import { Badge } from "../../components/badge";
import { DashedDivider } from "../../components/dasheddivider";
import LocalStorageLpRegister from "../../components/localstoragelpregister";
import BaseContent from "./components/paragraph";
import TextWrapper from "./components/textwrapper";
import { Title } from "./components/title";
import AgendaLotada from "../../../../assets/images/agendalotadaMac.png";
import AgendaOrganizada from "../../../../assets/images/agendaorganizadaMac.png";
import LessonBlock from "./components/lessonblock";
import CallToAction from "../../components/calltoaction";
import FAQCard from "../../components/FAQ";
import { ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function LandingPageOne() {
  // padding ta 45 no total, px-4 no main container para o video, e px-7.25 nos textos. assim ficando 16px para os videos e 29px+16px = 45px para os textos

  const faqs = [
    {
      question: "O curso é para iniciantes?",
      answer:
        "O curso foi pensado para ambos os perfis. Se você está começando, vai aprender a fazer certo desde o início. Se já tem experiência, vai organizar o conhecimento e descobrir pontos cegos que podem estar custando dinheiro.",
    },
    {
      question: "As aulas são demoradas?",
      answer:
        "O curso completo tem apenas 60 minutos, dividido em 6 aulas de 10 minutos cada. Você pode assistir tudo de uma vez ou ir aula por aula, no seu ritmo.",
    },
    {
      question: "Quanto tempo de acesso?",
      answer:
        "O acesso é vitalício. Uma vez que você comprar, o curso é seu para sempre. Isso inclui todas as atualizações futuras que fizermos no conteúdo.",
    },
    {
      question: "E se eu não gostar do curso?",
      answer:
        "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.",
    },
    {
      question: "Quais são os materiais extra?",
      answer:
        "Sim! Você recebe planilhas práticas para calcular os principais indicadores financeiros do seu negócio. São ferramentas que você pode usar imediatamente após assistir as aulas.",
    },
    {
      question: "Posso assistir pelo celular?",
      answer:
        "Sim! A plataforma é 100% responsiva e você pode assistir as aulas em qualquer dispositivo: computador, tablet ou celular.",
    },
  ];

  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="flex w-full flex-col bg-[#F8FCFF]">
        <div className="flex h-full w-full flex-col items-center justify-center px-4">
          <TextWrapper>
            <Title className="mb-7">
              Ser <Badge label="Produtivo" className="-mb-2" /> anda muito
              complicado
            </Title>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-225 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <TextWrapper>
            <BaseContent className="pt-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title>
              Então, pensamos em{" "}
              <Badge className="sm:mt-2" label="Simplificar" />
            </Title>

            <BaseContent className="py-7">
              Passamos um ano viajando por todo o país, conversando com pessoas.
            </BaseContent>

            <BaseContent className="pb-7">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom design e como contar
              uma história envolvente. Acontece que era isso que faltava na
              experiência.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <TextWrapper>
            <BaseContent className="pt-7">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title>
              Juntamos isso em <Badge label="6 Aulas" />
            </Title>

            <BaseContent className="pt-7 pb-11">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Bloco de notas"
            whichLesson="Aula 1"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
          />

          <ReactCompareSlider
            className="h-full w-full max-w-167.5 overflow-hidden rounded-2xl"
            position={40} // começa em 35% (mais pra esquerda)
            itemOne={
              <Image src={AgendaOrganizada} alt="Imagem de Agenda lotada" />
            }
            itemTwo={
              <Image
                src={AgendaLotada}
                alt="Imagem de Agenda Organizada pelo método"
                className="object-contain object-[center_55%]"
              />
            }
            handle={
              <div className="relative h-full">
                {/* linha do meio */}
                <div className="absolute top-0 left-1/2 h-full w-1.5 -translate-x-1/2 bg-[#202A40]" />

                {/* botão */}
                <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-26 w-7.5 items-center justify-center rounded-full bg-[#0D99FF] shadow-md">
                    {/* ÍCONE (troca aqui) */}
                    <MoveHorizontal className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            }
          />
          <LessonBlock
            lessonName="Agenda"
            whichLesson="Aula 2"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Lista de tarefas"
            whichLesson="Aula 3"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Diário"
            whichLesson="Aula 4"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Semanal"
            whichLesson="Aula 5"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Mensal"
            whichLesson="Aula 6"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
          />
          <DashedDivider className="mt-15 mb-21" />
          <TextWrapper>
            <Title>
              Criamos,
              <br /> <Badge label="Estudos" /> de caso
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <DashedDivider className="mt-15 mb-21" />
          <TextWrapper>
            <Title
              className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
            >
              Treinamos uma <Badge label="Equipe" /> suporte
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <DashedDivider className="mt-15 mb-21" />
          <TextWrapper>
            <Title
              className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
            >
              Incluímos uma <Badge label="Garantia" />
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-video w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />

          <DashedDivider className="mt-15 mb-21" />

          <TextWrapper className="sm:flex sm:flex-col sm:items-center sm:justify-center">
            <Title
              className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
            >
              E oferecemos a <br /> um <Badge label="Valor" /> justo
            </Title>

            <BaseContent className="w-87.5 pt-7 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom,#F8FCFF_5%,#0D99FF_25%,#0F192F_80%)]">
          <CallToAction />
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[#0F192F]">
          <DashedDivider className="mt-11 mb-11" stroke="#E0E5EE10" />
          <div className="px-5.25">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                Question={faq.question}
                Answer={faq.answer}
                className={index !== faqs.length - 1 ? "mb-5" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
