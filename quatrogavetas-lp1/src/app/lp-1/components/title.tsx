type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40] ${className}`}
    >
      {children}
    </h1>
  );
}
