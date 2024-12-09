import { auth } from "@/server/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedUrls = ["/admin"]; // Add your protected URLs here
const loginPage = "/api/auth/signin";
export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const session = await auth();
  console.log(session);
  if (!session && protectedUrls.some((path) => url.pathname.startsWith(path))) {
    url.pathname = loginPage;
    return NextResponse.redirect(url);
  }

  if (session && url.pathname === loginPage) {
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  if (
    session &&
    protectedUrls.some((path) => url.pathname.startsWith(path)) &&
    session.user.email != process.env.ADMIN_EMAIL
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
