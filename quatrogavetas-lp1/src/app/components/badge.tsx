type BadgeProps = {
  label?: string;
  className?: string;
};

export function Badge({ label = "MARCH", className = "" }: BadgeProps) {
  return (
    <div
      className={`font-palmer inline-flex h-12.5 items-center justify-center rounded-full bg-[#CBE9FF] px-3.5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] ${className}`}
    >
      <span className="-mt-5 text-[80px] leading-12.5 font-normal -tracking-[0.5px] text-[#0D99FF]">
        {label}
      </span>
    </div>
  );
}
