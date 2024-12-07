import "@/styles/globals.css";
import SideBar from "./components/sidebar";
import { Button } from "@/components/ui/button";
import { signOut } from "@/server/auth";
import SignOut from "@/app/_components/client/sign-out";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-secondary">
          <SideBar />
          <main className="w-full py-8">
            <nav className="top-0 flex justify-between px-12">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <div className="flex items-center space-x-4">
                <SignOut />
              </div>
            </nav>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
