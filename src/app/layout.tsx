import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import NavBar from "./_components/navbar";
import { ThemeProvider } from "./_components/theme-provider";
import Footer from "./_components/footer";
import Whatsapp from "./_components/floating-whatsapp";

export const metadata: Metadata = {
  title: "TotalEngineering",
  description: "Fabrication Service in Coimbatore",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
        <Whatsapp/>
      </body>
    </html>
  );
}
