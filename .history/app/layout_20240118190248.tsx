import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Theme } from "@radix-ui/themes";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className=" text-gray-300 bg-zinc-700 min-w-80">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}