import "@/styles/globals.css";


import { type Metadata } from "next";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

export const metadata: Metadata = {
  title: "TotalEngineering",
  description: "Fabrication Service in Coimbatore",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  );
}
