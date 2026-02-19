'use client'

import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(){
  const [landingOrigin, setLandingOrigin] = useState('lp-1')

  useEffect(() => {
    const origin = localStorage.getItem('landingOrigin') || "lp-1";
    setLandingOrigin(origin)
  }, [landingOrigin])

  return (
    <div className="
      w-full 
      h-16 
      sticky top-0 left-1/2
      px-6 pt-4 mb-6 
      z-50
      bg-transparent
    ">
      <nav className="
        w-full max-w-[750px] h-14 rounded-full mx-auto flex items-center justify-between pr-[23px] pl-[33px]
        bg-white/60 backdrop-blur-md
        border-[#E1E1E1]/70 border 
        shadow-[0px_2px_10px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.05)]
      ">
        <div>
          <FaInstagram color="#6f7481" size={26} />
        </div>

        <div className="flex items-center justify-center text-[#6f7481] gap-5 ">
          <p>Email</p>
          <FaInstagram color="#6f7481" size={26} />
        </div>
      </nav>
    </div>
  )
}
