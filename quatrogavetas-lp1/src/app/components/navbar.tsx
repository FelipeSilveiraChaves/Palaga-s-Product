"use client";

import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [landingOrigin, setLandingOrigin] = useState("lp-1");
  const [visible, setVisible] = useState(true);

  // Framer: scroll position
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useEffect(() => {
    const origin = localStorage.getItem("landingOrigin") || "lp-1";
    setLandingOrigin(origin);
  }, []); // <- importante: não ficar loopando

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    const prev = lastY.current;

    const delta = current - prev;
    const threshold = 2;

    // sempre mostra perto do topo
    if (current < 80) {
      setVisible(true);
    } else if (delta > threshold) {
      // rolando pra baixo -> esconde
      setVisible(false);
    } else if (delta < -threshold) {
      // rolando pra cima -> mostra
      setVisible(true);
    }

    lastY.current = current;
  });

  return (
    <motion.div
  className="
    w-full fixed top-0 left-0 px-6 pt-7 z-50 bg-transparent
    will-change-transform
  "
  initial={{ y: 0 }}
  animate={visible ? { y: 0 } : { y: -90 }}
  transition={{
    duration: 0.45,
    ease: [0.4, 0.0, 0.2, 1],
  }}
  style={{ pointerEvents: visible ? "auto" : "none" }}
>
  <nav className="
    w-full max-w-[750px] h-14 rounded-full mx-auto flex items-center justify-between pr-[23px] pl-[33px]
    bg-white/78 backdrop-blur-md
    border border-[#E1E1E1]/70
    shadow-[0px_2px_10px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.05)]
    will-change-[backdrop-filter]
  ">
        <Link href={landingOrigin}>
          <FaInstagram  color="#6f7481" size={26} />
        </Link>

        <div className="flex items-center justify-center text-[#6f7481] gap-5">
          <p>Email</p>
          <FaInstagram color="#6f7481" size={26} />
        </div>
      </ nav>
    </motion.div>
  );
}
