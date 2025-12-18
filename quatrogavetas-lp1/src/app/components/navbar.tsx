'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerButton from "./hamburgerButton";
import Logo from "./logo";
import LogoFake from '../../../assets/logo-exemplo.svg'
  

export default function Navbar(){
    const [landingOrigin, setLandingOrigin] = useState('lp-1')
    


    useEffect(() => {
        const origin = localStorage.getItem('landingOrigin') || "lp-1";
        setLandingOrigin(origin)
    }, [landingOrigin])

    return (
        <nav  className="
            w-full 
            h-16 
            sticky top-0 
            px-6 pt-4 mb-6 
            z-50
            bg-transparent
            shadow-[inset_0_20px_20px_20px_rgba(255,255,255,0.9)]
        ">
                <div className="w-full flex justify-between items-start">
                    <Link href={`/${landingOrigin}`}><LogoFake /></Link>
                    <HamburgerButton />
                </div>
        </nav>
    )
}