type FAQCardProps = {
  className?: String;
  Question: String;
  Answer: String;
};

export default function FAQCard({ className, Question, Answer }: FAQCardProps) {
  return (
    <div
      className={`flex max-w-125 flex-col items-start gap-5 rounded-2xl border border-[#EEEEEE] bg-white p-6 shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.05)] ${className}`}
    >
      <p className="font-title text-2xl leading-6 font-semibold tracking-normal text-[#202A40]">
        {Question}
      </p>
      <p className="font-base leading-6.75 font-[18px] tracking-normal text-[#202A40]">
        {Answer}
      </p>
    </div>
  );
}
