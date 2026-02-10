import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const dinRounded = localFont({
  src: '../../public/font.woff2',
})

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
        className={`${dinRounded.className} antialiased min-h-screen flex flex-col bg-carbon-0`}
      >
        <Navbar />
          <main className="flex-1 flex">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
