import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

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
    <html lang="en" data-theme="pastel" style={{ overflow: "hidden" }}>
      <body className={montserrat.className} style={{ overflow: "hidden" }}>
        <div className="min-w-[50%]">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
