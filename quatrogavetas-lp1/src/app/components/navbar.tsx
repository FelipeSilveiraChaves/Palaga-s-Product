'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function Navbar(){
    const [landingOrigin, setLandingOrigin] = useState('lp-1')


    useEffect(() => {
        const origin = localStorage.getItem('landingOrigin') || "lp-1";
        setLandingOrigin(origin)
    }, [landingOrigin])

    return (
        <nav className="w-full bg-amber-400 content-between p-4">
                <div className="items-center w-full flex justify-between pr-6">
                    <Link href={`/${landingOrigin}`} className="text-amber-900 items-center pr-4">Logo</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <p>Amongus</p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Site</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={'aboutus'} className="items-center text-amber-700 pr-6">
                                    Sobre Nós
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'ditatica'} className="items-center text-amber-700  pr-6">
                                    Didática
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'recomendacoes'} className="items-center text-amber-700">
                                    Recomendações
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> 
                </div>
        </nav>
    )
}