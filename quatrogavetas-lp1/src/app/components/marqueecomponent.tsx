// components/HorizontalMarquee.tsx
"use client";

import Marquee from "react-fast-marquee";

export default function HorizontalMarquee() {
  return (
    <div className="w-full overflow-hidden py-16 bg-white flex items-center justify-center">
      <Marquee
        speed={40}           // velocidade constante
        gradient={false}
        pauseOnHover={false}
        className="max-w-[1600px]"
        direction="right"
      >
        <div className="w-[228px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 1
        </div>
        <div className="w-[228px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 2
        </div>
        <div className="w-[228px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 3
        </div>
        <div className="w-[228px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 4
        </div>
        <div className="w-[400px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 5
        </div>
        <div className="w-[400px] h-[421px] bg-[#D9DEE6] mx-2 flex items-center justify-center">
          GIF 6
        </div>
      </Marquee>
    </div>
  );
}
