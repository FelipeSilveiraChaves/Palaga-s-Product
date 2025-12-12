"use client";

import Link from "next/link";
import { ReactNode, forwardRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "default" | "red" | "dark";
  href: string;
  exeternalButton?: boolean;
  className?: string;
};

// motion() em cima do Next Link
const MotionLink = motion(Link);

export default function Button({
  href,
  exeternalButton = false,
  children,
  variant = "default",
  className,
}: ButtonProps) {
  const base =
    "rounded-full text-[19px] px-4 h-12 inline-flex justify-center items-center outline-4 outline-carbon-0 cursor-pointer select-none transform-gpu will-change-transform";

  const variants = {
    default: "bg-carbon-50 text-carbon-800",
    red: "bg-[#FFC0C0] text-[#FF0000]",
    dark: "text-carbon-50 bg-carbon-800",
  };

  const classes = cn(base, variants[variant], className);

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.6 },
  } as const;

  if (exeternalButton) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps}>
      {children}
    </MotionLink>
  );
}
