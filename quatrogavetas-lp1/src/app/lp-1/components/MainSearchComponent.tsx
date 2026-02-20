import { BiLeftArrowAlt } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdStarOutline } from "react-icons/md";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function MainSearchComponent() {
  const ExamplesVariables = {
    BaseModel:
      "rounded-full text-[21px] h-[45px] px-[18px] inline-flex items-center justify-center leading-none " +
      "bg-white text-[#1F1F1F] border-[0,5px] border-[#E5E5E5] " +
      "shadow-[0px_4px_8px_rgba(0,0,0,0.05),0px_0px_0px_1.16px_rgba(0,0,0,0.065)] ",
    RedModel:
      "rounded-full text-[21px] h-[45px] px-[18px] inline-flex items-center justify-center leading-none " +
      "bg-[#FFE4E4] border-[0,5px] border-[#FDEFEE] text-[#1F1F1F] " +
      "shadow-[0px_4px_8px_rgba(255,123,123,0.05),0px_0px_0px_1.16px_rgba(226,23,0,0.065)] ",
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-159.75 flex-col items-start gap-3">
        <div className="flex h-17 w-full items-center justify-between gap-1.75 rounded-[21px] border border-[#DFDFDF] bg-white px-1.75 py-2.25 shadow-[0px_2px_10px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.05)]">
          <div className="flex h-12.75 w-12.75 items-center justify-center">
            <BiLeftArrowAlt size={30} color="#ABABAB" />
          </div>

          <div className="flex h-12.75 flex-1 items-center justify-between">
            <div className="flex flex-1 items-center justify-between rounded-full bg-[#EFEDED] p-1.75 pr-5.25">
              <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <Image
                  src="/googleGLogo.svg"
                  alt="Google"
                  width={22}
                  height={22}
                />
              </div>

              <h3
                className={`${inter.className} flex-1 overflow-hidden text-[21px] leading-7.5`}
              >
                Como ser produtivo?
              </h3>

              <div className="flex h-7.5 w-7.5 items-center justify-center">
                <MdStarOutline color="#474747" size={26} />
              </div>
            </div>
          </div>

          <div className="flex h-12.75 w-12.75 items-center justify-center">
            <PiDotsThreeVerticalBold color="#474747" size={31} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 pl-19.5">
          <div className={`${inter.className} ${ExamplesVariables.BaseModel}`}>
            Hábitos
          </div>
        </div>
      </div>
    </div>
  );
}
