"use client";
import { useState } from "react";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <button
      onClick={toggle}
      className="w-12 h-12 rounded-full bg-carbon-800 flex items-center justify-center pb-1"
    >
      {/* Área de 48x48 dentro do círculo */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Moldura opcional */}
        <div className="absolute inset-2 pointer-events-none" />

        {/* Barra superior */}
        <span
          className={`
            absolute left-1/2 top-1/2
            w-5 h-[3px] bg-white rounded-full
            -translate-x-1/2
            origin-center
            transition-transform duration-300 ease-in-out
            ${
              isOpen
                ? "translate-y-0 rotate-45"        // vai pro centro e gira
                : "-translate-y-[5.5px]"           // sobe, deixando o vão no meio
            }
          `}
        />

        {/* Barra inferior */}
        <span
          className={`
            absolute left-1/2 top-1/2
            w-5 h-[3px] bg-white rounded-full
            -translate-x-1/2
            origin-center
            transition-transform duration-300 ease-in-out
            ${
              isOpen
                ? "translate-y-0 -rotate-45"       // vai pro centro e gira
                : "translate-y-[5.5px]"            // desce, deixando o vão no meio
            }
          `}
        />
      </div>
    </button>
  );
}
