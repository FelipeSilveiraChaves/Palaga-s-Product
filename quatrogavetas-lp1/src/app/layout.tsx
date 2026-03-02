import type { Metadata } from "next";
import { gabarito, hanken } from "@/lib/fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { palmer } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Palaga's palace",
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
        className={`${gabarito.variable} ${hanken.variable} ${palmer.variable} font-base bg-carbon-0 flex min-h-screen flex-col font-(--font-hanken) antialiased`}
      >
        <Navbar />
        <main className="flex flex-1 pt-31.5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
