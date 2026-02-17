import Image from "next/image";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import { Gabarito } from 'next/font/google'
import mockupNote from '../../../assets/images/cadernomockup2.png'
import MainSearchComponent from "./components/MainSearchComponent";

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function LandingPageOne() {
  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="h-full p-4 flex flex-col justify-center items-center w-full">
        <div className=" max-w-lg ">
          <h1
            className={`${gabarito.className} text-[64px] text-[#202A40] tracking-[-1.28px] leading-16 font-semibold`}
          >
            Ser produtivo está muito complicado
          </h1>
          <p className="text-[20px] text-carbon-600 tracking-normal leading-[30px] pt-[30px] pb-7">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically how we decided to make the March Tee and became founders overnight.
          </p>
        </div>
          <MainSearchComponent />
          
        <div className="max-w-lg">
          <h1
            className={`${gabarito.className} pt-[90px] pb-16 text-[64px] text-[#202A40] tracking-[-1.28px] leading-16 font-semibold`}
          >
            Vantagens
          </h1>
          <p className=" text-[20px] text-carbon-600 tracking-normal leading-[30px] pb-7">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically how we decided to make the March Tee and became founders overnight.
          </p>
          <Image
            src={mockupNote}
            alt="Caderno de planejamento"
            width={640}
            height={520}
            priority
          />
          <p className="mt-[30px] text-[20px] text-carbon-600 tracking-normal leading-[30px] pb-7">
            We were clueless about fashion, manufacturing, even tees. All we knew was good design and telling a compelling story. <span className="bg-[#FFFF0060]">Turns out that’s </span>what was missing <span className="bg-[#FFFF0060]">from the experience</span>, along with an actually well-made tee. So we jumped <span className="bg-[#FFFF0060]">right into making things.</span>
          </p>
        </div>
      </div>

    </>

  )
}