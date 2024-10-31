import "@/styles/globals.css";
import SideBar from "./components/sidebar";

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
          {children}
        </div>
      </body>
    </html>
  );
}
