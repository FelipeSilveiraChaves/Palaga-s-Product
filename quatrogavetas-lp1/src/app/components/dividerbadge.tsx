type DividerBadgeProps = {
  label?: string;
  leftPct?: number; // posição horizontal do badge (em %)
};

export function DividerBadge({ label = "MARCH", leftPct = 33 }: DividerBadgeProps) {
  return (
    <div className="relative w-full h-10">
      
      {/* Linha com dash 8/8 e pontas arredondadas */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
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
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${leftPct}%` }}
      >
        <div
          className="
            rounded-lg
            flex items-center justify-center
            bg-[#FFF6CA]
            h-[43px]
            w-[105px]
            shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_1px_1px_rgba(0,0,0,0.05)]
          "
          style={{ transform: "rotate(-1.5deg)" }}
        >
          <span className="block text-[27px] leading-none text-[#DDD08D] font-semibold tracking-[0.02em]">
            {label}
          </span>
        </div>
      </div>

    </div>
  );
}
