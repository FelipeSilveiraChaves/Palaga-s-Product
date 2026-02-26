import Image from "next/image";
import { DashedDivider } from "./dasheddivider";
import BuyButton from "./purchasebutton";
import HorizontalMarquee from "./marqueecomponent";

export default function CallToAction() {
  return (
    <div className="font-title relative flex w-full max-w-95.5 flex-col items-center justify-center rounded-b-4xl bg-[linear-gradient(to_bottom,#FFFFFF_5%,#0D99FF_25%,#202A40_80%)] pb-8">
      {/* MARQUEE “DENTRO” DO CTA, MAS IGNORANDO A LARGURA DELE */}
      <div className="absolute top-0 left-1/2 z-20 w-103.5 -translate-x-1/2">
        <HorizontalMarquee className="bg-transparent" />
      </div>
      <div className="h-56.5" />
      <div className="mt-4 mb-4 inline-flex h-9 cursor-pointer items-center justify-center rounded-full bg-[#202A40] px-4 text-[18px] leading-6 text-[#FFFFFF]">
        Pagamento Único
      </div>

      <div className="flex h-36 items-center justify-center">
        <div className="mb-2 flex items-center justify-center text-[40px] leading-6 font-semibold tracking-[-0.99px] text-[#F5F7FA70]">
          <span>12</span>
          <span className="-mr-2.25 flex items-center justify-center pl-1.5 text-3xl">
            x
          </span>
        </div>

        <span className="text-[200px] font-semibold text-[#F5F7FA] antialiased [text-rendering:optimizeLegibility]">
          8
        </span>

        <span className="mb-2 -ml-2 text-[40px] leading-6 font-semibold tracking-[-0.99px] text-[#F5F7FA70]">
          R$
        </span>
      </div>

      <div className="mt-4 inline-flex h-8 items-center justify-center rounded-full border-[1.5px] border-[#F5F7FA80] bg-[#FFFFFF30] px-3 text-[18px] leading-6 text-[#F5F7FA] outline outline-[#F5F7FA50]">
        Ou R$ 97 à vista
      </div>

      <div className="flex w-full flex-col items-center justify-center px-7.5 pt-7.5 pb-11.25">
        <DashedDivider stroke="#E0E5EE15" className="mb-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[18px] leading-6 tracking-normal text-[#F5F7FA]">
            6 aulas de gestão do tempo
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE15" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[18px] leading-6 tracking-normal text-[#F5F7FA]">
            12 materiais complementares
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE15" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[18px] leading-6 tracking-normal text-[#F5F7FA]">
            Suporte de 1 ano
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE15" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[18px] leading-6 tracking-normal text-[#F5F7FA]">
            Garantia de 7 dias
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE15" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[18px] leading-6 tracking-normal text-[#F5F7FA]">
            Acesso vitalício às atualizações
          </p>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-center">
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F5F7FA]">
          Checkout Seguro
        </p>
        <Image
          className="ml-1.25"
          src="/hubla.svg"
          alt="Hubla"
          width={36}
          height={15}
        />
      </div>

      <div className="w-full px-5.25">
        <BuyButton />
      </div>

      <div className="flex flex-col items-center justify-center pt-2">
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F4F6F940]">
          Comercializado por Interception D. LTDA
        </p>
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F4F6F940]">
          CNPJ 49.821.411/0001-37
        </p>
      </div>
    </div>
  );
}
