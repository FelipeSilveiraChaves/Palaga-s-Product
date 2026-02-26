"use client";

import Marquee from "react-fast-marquee";

export default function HorizontalMarquee({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden bg-transparent ${className}`}
    >
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={false}
        className="w-full max-w-400 overflow-hidden"
        direction="right"
      >
        <div className="mx-2 flex h-56.5 w-84.5 items-center justify-center rounded-2xl bg-[#F5F7FA] shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.10)]">
          GIF 1
        </div>
        <div className="mx-2 flex h-56.5 w-84.5 items-center justify-center rounded-2xl bg-[#F5F7FA] shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.10)]">
          GIF 2
        </div>
        <div className="mx-2 flex h-56.5 w-84.5 items-center justify-center rounded-2xl bg-[#F5F7FA] shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.10)]">
          GIF 3
        </div>
        <div className="mx-2 flex h-56.5 w-84.5 items-center justify-center rounded-2xl bg-[#F5F7FA] shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.10)]">
          GIF 4
        </div>
      </Marquee>
    </div>
  );
}
