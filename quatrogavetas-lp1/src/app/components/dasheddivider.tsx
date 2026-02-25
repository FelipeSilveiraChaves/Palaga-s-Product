type DashedDividerProps = {
  textBelow?: boolean;
  className?: string; // ainda deixo opcional pra não te prender no futuro
};

export function DashedDivider({
  textBelow = false,
  className = "",
}: DashedDividerProps) {
  return (
    <div
      className={`mt-15 w-full ${textBelow ? "mb-21" : "mb-15"} ${className}`}
    >
      <svg width="100%" height="6">
        <line
          x1="0"
          y1="3"
          x2="100%"
          y2="3"
          stroke="#E0E5EE"
          strokeWidth="2"
          strokeDasharray="8 12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
