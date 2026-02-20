import MainSearchComponent from "./MainSearchComponent";

export default function Hero() {
  return (
    <>
      <div className="max-w-125">
        <h1
          className={`font-title text-[64px] leading-16 font-semibold tracking-[-1.28px] text-[#202A40]`}
        >
          Ser produtivo está muito complicado
        </h1>
        <p className="text-carbon-600 pt-7.5 pb-15 text-[20px] leading-7.5 tracking-normal">
          Ok, maybe it wasn’t quite so quick and clean. But that’s basically how
          we decided to make the March Tee and became founders overnight.
        </p>
      </div>
      <MainSearchComponent />
    </>
  );
}
