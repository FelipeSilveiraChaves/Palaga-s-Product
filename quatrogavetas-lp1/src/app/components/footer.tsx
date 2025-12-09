export default function Footer(){
    return (
        <div className="w-full flex items-center justify-center flex-col pb-4 pt-16">
            <p className="text-carbon-400 text-base/[20px]">© 2025 Palaga. Todos os direitos reservados.</p>
            <p className="text-carbon-400 text-base/[20px]"><a className="hover:text-carbon-600" href="/terms">Termos de uso</a> | <a className="hover:text-carbon-600" href="terms">Termos de privacidade</a> | <a className="hover:text-carbon-600" href="Contact">Contato</a></p>
        </div>
    )
}