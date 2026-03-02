import { Gabarito, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-gabarito",
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hanken",
});

// ✅ Palmer local
export const palmer = localFont({
  src: [
    {
      path: "../../public/fonts/palmer/font.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/palmer/font.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-palmer",
});
