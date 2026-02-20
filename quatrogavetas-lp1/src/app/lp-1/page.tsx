import LocalStorageLpRegister from "../components/localstoragelpregister";
import { DividerBadge } from "../components/dividerbadge";
import HorizontalMarquee from "../components/marqueecomponent";
import Hero from "./components/hero";

export default function LandingPageOne() {
  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        <Hero />
        <DividerBadge label="March" />
        <div className="max-w-125">
          <h1
            className={`font-title pb-10 text-[64px] leading-16 font-semibold tracking-[-1.28px] text-[#202A40]`}
          >
            Então, decidimos simplificar
          </h1>
          <p className="text-carbon-600 pb-7 text-[20px] leading-7.5 tracking-normal">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically
            how we decided to make the March Tee and became founders overnight.
          </p>
          <p className="text-carbon-600 pb-15 text-[20px] leading-7.5 tracking-normal">
            We were clueless about fashion, manufacturing, even tees. All we
            knew was good design and telling a compelling story.{" "}
            <span className="bg-[#FFFF0060]">Turns out that’s </span>what was
            missing <span className="bg-[#FFFF0060]">from the experience</span>,
            along with an actually well-made tee. So we jumped{" "}
            <span className="bg-[#FFFF0060]">right into making things.</span>
          </p>
        </div>
        <div className="h-106 w-187.5 rounded-2xl bg-[#F5F7FA]"></div>
        <div className="max-w-125 pt-15">
          <p className="text-carbon-600 pb-7 text-[20px] leading-7.5 tracking-normal">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically
            how we decided to make the March Tee and became founders overnight.
          </p>
          <p className="text-carbon-600 pt-15 text-[20px] leading-7.5 tracking-normal">
            We were clueless about fashion, manufacturing, even tees. All we
            knew was good design and telling a compelling story. Turns out
            that’s what was missing from the experience, along with an actually
            well-made tee. So we jumped right into making things.
          </p>
        </div>
        <DividerBadge label="March" />
        <div className="max-w-125">
          <h1
            className={`font-title pb-10 text-[64px] leading-16 font-semibold tracking-[-1.28px] text-[#202A40]`}
          >
            E este foi o resultado
          </h1>
          <p className="text-carbon-600 pb-7 text-[20px] leading-7.5 tracking-normal">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically
            how we decided to make the March Tee and became founders overnight.
          </p>
          <p className="text-carbon-600 pb-15 text-[20px] leading-7.5 tracking-normal">
            We were clueless about fashion, manufacturing, even tees. All we
            knew was good design and telling a compelling story. Turns out
            that’s what was missing from the experience, along with an actually
            well-made tee. So we jumped right into making things.
          </p>
        </div>
        <div className="h-106 w-187.5 rounded-2xl bg-[#F5F7FA]"></div>
        <div className="max-w-125 pt-15">
          <p className="text-carbon-600 pb-7 text-[20px] leading-7.5 tracking-normal">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically
            how we decided to make the March Tee and became founders overnight.
          </p>
          <p className="text-carbon-600 pt-15 text-[20px] leading-7.5 tracking-normal">
            We were clueless about fashion, manufacturing, even tees. All we
            knew was good design and telling a compelling story. Turns out
            that’s what was missing from the experience, along with an actually
            well-made tee. So we jumped right into making things.
          </p>
        </div>
      </div>
    </>
  );
}
