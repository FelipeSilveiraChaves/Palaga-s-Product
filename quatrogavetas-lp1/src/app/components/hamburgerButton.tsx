"use client";
import { useState } from "react";
import Button from "./button";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-end">
      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-carbon-800 flex items-center justify-center pb-1 cursor-pointer"
      >
        {/* Área de 48x48 dentro do círculo */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Moldura opcional */}
          <div className="absolute inset-2 pointer-events-none " />

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
                  : "-translate-y-[3.5px]"           // sobe, deixando o vão no meio
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
                  : "translate-y-[3.5px]"            // desce, deixando o vão no meio
              }
            `}
          />
        </div>
      </button>
      <div className={`gap-2 flex-1 flex flex-col items-end mt-2 transition-opacity duration-200 ease-in-out
        ${
          isOpen 
            ? "opacity-100 pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }
        `}>
          <Button variant="default">Produtos</Button>
          <Button variant="red">Cursos</Button>
          <Button variant="dark">Contatos</Button>
      </div>
    </div>
  );
}
