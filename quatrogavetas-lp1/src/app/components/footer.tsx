import Link from "next/link"

export default function Footer(){
    return (
        <div className="w-full flex justify-start flex-col pb-4 px-6 pt-12 sm:pt-16 sm:text-center sm:justify-center">
            <p className="text-carbon-400 text-base/[20px]">© 2025 Palaga. Todos os direitos reservados.</p>
            <p className="text-carbon-400 text-base/[20px]"><Link className="hover:text-carbon-600" href="/terms">Termos de uso</Link> | <Link className="hover:text-carbon-600" href="policy">Políticas de privacidade</Link> | <Link className="hover:text-carbon-600" href="Contact">Contato</Link></p>
        </div>
    )
}