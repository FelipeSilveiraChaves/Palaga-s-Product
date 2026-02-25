import { Badge } from "../../components/badge";

export default function Hero() {
  return (
    <>
      <div className="max-w-125 px-7.25">
        <h1
          className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
        >
          Ser{" "}
          <span>
            <Badge label="Produtivo" />
          </span>{" "}
          está muito complicado
        </h1>
        <p className="pt-7.5 pb-7 text-[18px] leading-6.75 tracking-normal text-[#202A40] lg:text-[20px]">
          Ok, maybe it wasn’t quite so quick and clean. But that’s basically how
          we decided to make the March Tee and became founders overnight.
        </p>
      </div>
    </>
  );
}
