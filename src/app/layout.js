import { Inter } from "next/font/google";
import NavMobile from "@/components/Navbars/NavMobile";
import NavDesktop from "@/components/Navbars/NavDesktop";
import CustomCursor from "@/components/CustomCursor";

import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F. Silvestri | Video Creator",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen font-sans bg-black`}>
        <NavMobile />
        <NavDesktop />

        <CustomCursor />
        <main className="w-full h-full px-10">{children}</main>
      </body>
    </html>
  );
}
