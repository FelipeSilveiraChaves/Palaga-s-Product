"use client";

import { motion } from "framer-motion";

export default function BuyButton() {
  const href = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: 1 }}
      whileTap={{ y: 4 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="flex h-14 w-full items-center justify-center rounded-[12px] bg-[#0D99FF] text-[24px] leading-6 font-extrabold tracking-normal text-[#F5F7FA]"
    >
      COMPRAR
    </motion.a>
  );
}
