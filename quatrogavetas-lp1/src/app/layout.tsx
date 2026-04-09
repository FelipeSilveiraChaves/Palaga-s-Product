import type { Metadata } from "next";
import { gabarito, hanken } from "@/lib/fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { palmer } from "@/lib/fonts";
import SupportButton from "./components/fab";
import MetaPixel from "./components/MetaPixel";

export const metadata: Metadata = {
  title: "Cimbre",
  description: "É mais facil do que parece",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${gabarito.variable} ${hanken.variable} ${palmer.variable} font-base flex min-h-screen flex-col bg-[#F8FCFF] font-(--font-hanken) antialiased`}
      >
        <MetaPixel />
        <Navbar />
        <main className="flex min-h-screen flex-1 pt-32.5">{children}</main>
        <SupportButton href="/contact" />
      </body>
    </html>
  );
}
