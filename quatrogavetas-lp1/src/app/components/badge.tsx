type BadgeProps = {
  label?: string;
  className?: string;
};

export function Badge({ label = "MARCH", className = "" }: BadgeProps) {
  return (
    <div
      className={`font-title inline-flex h-12.5 items-center justify-center rounded-full bg-[#CBE9FF] px-3.5 font-extrabold ${className}`}
    >
      <span className="- text-[40px] leading-[49.5] font-normal -tracking-[0.9px] text-[#0D99FF]">
        {label}
      </span>
    </div>
  );
}
