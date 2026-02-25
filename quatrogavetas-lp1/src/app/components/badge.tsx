type BadgeProps = {
  label?: string;
  className?: string;
};

export function Badge({ label = "MARCH", className = "" }: BadgeProps) {
  return (
    <div
      className={`font-third inline-flex h-12.5 items-center justify-center rounded-lg bg-[#FFF6CA] px-2.5 shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_1px_1px_rgba(0,0,0,0.05)] ${className}`}
      style={{ transform: "rotate(-0.5deg)" }}
    >
      <span className="text-[40px] leading-[49.9px] font-normal tracking-[0px] text-[#DDD08D]">
        {label}
      </span>
    </div>
  );
}
