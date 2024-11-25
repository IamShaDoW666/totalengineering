import { auth } from "@/server/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedUrls = ["/admin"]; // Add your protected URLs here

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const session = await auth();

  if (!session && protectedUrls.some((path) => url.pathname.startsWith(path))) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (session && url.pathname === "/login") {
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
