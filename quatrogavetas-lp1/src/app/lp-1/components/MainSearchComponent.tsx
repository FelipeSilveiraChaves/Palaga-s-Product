import { BiLeftArrowAlt } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdStarOutline } from "react-icons/md";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export default function MainSearchComponent() {

    return (
        <div className="h-17 min-w-[639px] bg-white border-[1.5px] border-[#DFDFDF] py-2.25 px-1.75 gap-1.75 rounded-[21px] flex items-center justify-between shadow-[0px_2px_10px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.05)]">
            
            <div className="h-[51px] w-[51px] flex items-center justify-center ">
                <BiLeftArrowAlt size={30} color="#ABABAB" />
            </div>

            <div className="flex-1 h-[51px] flex items-center justify-between">
                <div className="bg-[#EFEDED] rounded-full flex-1 p-1.75 flex items-center justify-between pr-[21px]">

                    <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center mr-3">
                        <Image
                            src="/googleGLogo.svg"
                            alt="Google"
                            width={22}
                            height={22}
                        />
                    </div>

                    <h3 className={`${inter.className} text-[21px] leading-[30px] flex-1`}>
                        Para ser produtivo, eu preciso de...
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
    )
}
