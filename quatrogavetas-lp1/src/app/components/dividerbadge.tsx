type DividerBadgeProps = {
  label?: string;
  leftPct?: number; // posição horizontal do badge (em %)
};

export function DividerBadge({
  label = "MARCH",
  leftPct = 33,
}: DividerBadgeProps) {
  return (
    <div className="relative mt-30 mb-15 h-12 w-full">
      {" "}
      <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2">
        <svg width="100%" height="6" preserveAspectRatio="none">
          <line
            x1="0"
            y1="3"
            x2="100%"
            y2="3"
            stroke="#E0E5EE"
            strokeWidth="3"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Badge inclinada */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${leftPct}%` }}
      >
        <div
          className="flex h-10.75 w-26.25 items-center justify-center rounded-lg bg-[#FFF6CA] shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_1px_1px_rgba(0,0,0,0.05)]"
          style={{ transform: "rotate(-1.5deg)" }}
        >
          <span className="block text-[27px] leading-none font-semibold tracking-[0.02em] text-[#DDD08D]">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
