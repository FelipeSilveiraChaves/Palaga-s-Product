'use client'

import { useEffect } from "react";


type Props = { lpId: string };

export default function LocalStorageLpRegister({lpId}: Props) {
    useEffect(() => {
        localStorage.setItem("landingOrigin", lpId);
      }, []) // Roda só uma vez ao montar

    return null
}