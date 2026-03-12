type BadgeProps = {
  label?: string;
  className?: string;
  classNameDiv?: string;
};

export function Badge({
  label = "MARCH",
  className = "",
  classNameDiv = "",
}: BadgeProps) {
  return (
    <div
      className={`font-title inline-flex h-12.75 items-center justify-center rounded-full bg-[#CBE9FF] px-3.5 align-middle font-extrabold ${classNameDiv}`}
    >
      <span
        className={`text-[40px] leading-[49.5px] font-normal -tracking-[0.9px] ${className} text-[#CBE9FF]`}
      >
        {label}
      </span>
    </div>
  );
}
