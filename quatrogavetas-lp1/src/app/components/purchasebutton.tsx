"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

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
      className="relative flex h-14 w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#0D99FF]"
    >
      <span className="text-[24px] leading-6 font-extrabold text-[#F5F7FA]">
        COMPRAR
      </span>
    </motion.a>
  );
}
