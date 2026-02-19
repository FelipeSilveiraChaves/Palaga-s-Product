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
        BaseModel:  "rounded-full text-[21px] h-[45px] px-[18px] inline-flex items-center justify-center leading-none " +
                    "bg-white text-[#1F1F1F] border-[0,5px] border-[#E5E5E5] " +
                    "shadow-[0px_4px_8px_rgba(0,0,0,0.05),0px_0px_0px_1.16px_rgba(0,0,0,0.065)] ",
        RedModel:   "rounded-full text-[21px] h-[45px] px-[18px] inline-flex items-center justify-center leading-none " +
                    "bg-[#FFE4E4] border-[0,5px] border-[#FDEFEE] text-[#1F1F1F] " +
                    "shadow-[0px_4px_8px_rgba(255,123,123,0.05),0px_0px_0px_1.16px_rgba(226,23,0,0.065)] ",
    }
   


    return (
        <div className="gap-3  flex flex-col items-start ">
            <div className="h-17 sm:w-[639px] w-full bg-white border border-[#DFDFDF] py-2.25 px-1.75 gap-1.75 rounded-[21px] flex items-center justify-between shadow-[0px_2px_10px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.05)]">
                
                <div className="h-[51px] w-[51px] flex items-center justify-center ">
                    <BiLeftArrowAlt size={30} color="#ABABAB" />
                </div>

                <div className="flex-1 h-[51px] flex items-center justify-between ml">
                    <div className="bg-[#EFEDED] rounded-full flex-1 p-1.75 flex items-center justify-between pr-[21px]">

                        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center mr-3">
                            <Image
                                src="/googleGLogo.svg"
                                alt="Google"
                                width={22}
                                height={22}
                            />
                        </div>

                        <h3 className={`${inter.className} text-[21px] leading-[30px] flex-1 ` }>
                          TESTE TESTE 
                        </h3>

                        <div className=" h-[30px] w-[30px] flex items-center justify-center">
                            <MdStarOutline color="#474747" size={26}/>
                        </div>

                    </div>
                </div>

                <div className="h-[51px] w-[51px] flex items-center justify-center ">
                    <PiDotsThreeVerticalBold color="#474747" size={31}/>
                </div>

            </div>
            <div className="flex flex-col gap-3 items-start pl-[78px]">
                <div className={`${inter.className} ${ExamplesVariables.BaseModel}`}>
                    Planners
                </div>
                <div className={`${inter.className} ${ExamplesVariables.BaseModel}`}>
                    Hábitos
                </div>
                <div className={`${inter.className} ${ExamplesVariables.BaseModel}`}>
                    Planejamento anual
                </div>
                <div className={`${inter.className} ${ExamplesVariables.RedModel}`}>
                    +147
                </div>
            </div>
        </div>
    )
}
