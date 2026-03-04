import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col justify-start bg-[#0F192F] px-6 pt-12 pb-4 sm:justify-center sm:pt-16 sm:text-center">
      <p className="text-base/[20px] text-[#F4F6F965]">
        © 2025 Interception Ltda. Todos os direitos reservados.
      </p>
      <p className="text-base/[20px] text-[#F4F6F965]">
        <Link className="hover:text-[#0D99FF]" href="/terms">
          Termos de uso
        </Link>{" "}
        |{" "}
        <Link className="hover:text-[#0D99FF]" href="policy">
          Políticas de privacidade
        </Link>{" "}
        |{" "}
        <Link className="hover:text-[#0D99FF]" href="Contact">
          Contato
        </Link>
      </p>
    </div>
  );
}
