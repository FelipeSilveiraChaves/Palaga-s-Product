'use client'

import Link from "next/link";
import Image from "next/image";
import PalagaLogo from "../../../assets/logo-exemplo.svg"
import { useEffect, useState } from "react";
import HamburgerButton from "./hamburgerButton";
  

export default function Navbar(){
    const [landingOrigin, setLandingOrigin] = useState('lp-1')
    


    useEffect(() => {
        const origin = localStorage.getItem('landingOrigin') || "lp-1";
        setLandingOrigin(origin)
    }, [landingOrigin])

    return (
        <nav className="w-full h-16 bg-carbon-0  content-between pt-4 px-6 mb-6">
                <div className="items-center w-full flex justify-between">
                    <Link href={`/${landingOrigin}`} className="text-amber-900 items-center pr-4"><Image alt="Logo da Palaga" src={PalagaLogo}></Image></Link>
                    <HamburgerButton />
                </div>
        </nav>
    )
}