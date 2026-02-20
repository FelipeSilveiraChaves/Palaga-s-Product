// components/HorizontalMarquee.tsx
"use client";

import Marquee from "react-fast-marquee";

export default function HorizontalMarquee() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden bg-white">
      <Marquee
        speed={40} // velocidade constante
        gradient={false}
        pauseOnHover={false}
        className="w-full max-w-400 overflow-hidden lg:mask-[linear-gradient(to_right,transparent,black_2.5%,black_98%,transparent)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_2.5%,black_98%,transparent)]"
        direction="right"
      >
        <div className="mx-2 flex h-105.25 w-57 items-center justify-center bg-[#D9DEE6]">
          GIF 1
        </div>
        <div className="mx-2 flex h-105.25 w-57 items-center justify-center bg-[#D9DEE6]">
          GIF 2
        </div>
        <div className="mx-2 flex h-105.25 w-57 items-center justify-center bg-[#D9DEE6]">
          GIF 3
        </div>
        <div className="mx-2 flex h-105.25 w-57 items-center justify-center bg-[#D9DEE6]">
          GIF 4
        </div>
        <div className="mx-2 flex h-105.25 w-100 items-center justify-center bg-[#D9DEE6]">
          GIF 5
        </div>
        <div className="mx-2 flex h-105.25 w-100 items-center justify-center bg-[#D9DEE6]">
          GIF 6
        </div>
      </Marquee>
    </div>
  );
}
