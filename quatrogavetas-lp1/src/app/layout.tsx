import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const dinRounded = localFont({
  src: '../../public/font.woff2',
})

export const metadata: Metadata = {
  title: "s",
  description: "Organize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dinRounded.className} antialiased min-h-screen bg-carbon-0`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
