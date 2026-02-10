import Image from "next/image";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import { Gabarito } from 'next/font/google'
import mockupNote from '../../../assets/images/cadernomockup2.png'

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function LandingPageOne(){
  return(
    <>
      <LocalStorageLpRegister lpId={"lp-1"}/>
      <div className="h-full p-4 flex flex-col justify-center items-center w-full">
        <div className=" max-w-lg ">
          <h1
            className={`${gabarito.className} text-[64px] text-[#202A40] tracking-[-1.28px] leading-16 font-semibold`}
          >
            Estão cimplicando aquilo que era simples 
          </h1>  
          <p className="text-[20px] text-carbon-600 tracking-normal leading-[30px] pt-[60px] pb-7">
            In 2015, Ashish, Sukh and I (the Studio March team) were designing apps and websites for some pretty neat companies. We also wanted to build a product of our own that anyone could use and love, but weren’t sure what. Food delivery service? Better credit card? Reliable mobile network?
          </p>    
          <p className="text-[20px] text-carbon-600 tracking-normal leading-[30px] pb-[60px]">
            A hundred different ideas came to us, sitting around a tiny table in our basic tees. Wait... basic tees?! We love those, there aren’t any good options, let’s make one!
          </p>    
        </div>
          <Image
            src={mockupNote}
            alt="Caderno de planejamento"
            width={640}
            height={520}
            priority
          />
          <div className="max-w-lg">
             <h1
            className={`${gabarito.className} pt-[90px] pb-16 text-[64px] text-[#202A40] tracking-[-1.28px] leading-16 font-semibold`}
          >
            Vantagens 
          </h1>  
          <p className="text-[20px] text-carbon-600 tracking-normal leading-[30px] pb-7">
            Ok, maybe it wasn’t quite so quick and clean. But that’s basically how we decided to make the March Tee and became founders overnight.          </p>
          <p className="text-[20px] text-carbon-600 tracking-normal leading-[30px] pb-7">
            We were clueless about fashion, manufacturing, even tees. All we knew was good design and telling a compelling story. <span className="bg-[#FFFF0060]">Turns out that’s </span>what was missing <span className="bg-[#FFFF0060]">from the experience</span>, along with an actually well-made tee. So we jumped <span className="bg-[#FFFF0060]">right into making things.</span>          
            </p>
          </div>
      </div>
          
    </>
        
    )
}