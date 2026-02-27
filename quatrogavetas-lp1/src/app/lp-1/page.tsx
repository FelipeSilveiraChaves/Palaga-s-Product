import { Badge } from "../components/badge";
import { DashedDivider } from "../components/dasheddivider";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import BaseContent from "./components/paragraph";
import HorizontalMarquee from "../components/marqueecomponent";
import Hero from "./components/hero";
import TextWrapper from "./components/textwrapper";
import { Title } from "./components/title";
import LessonsTitle from "./components/lessonstitle";
import LessonBlock from "./components/lessonblock";
import CallToAction from "../components/calltoaction";
import FAQCard from "../components/FAQ";

export default function LandingPageOne() {
  // padding ta 45 no total, px-4 no main container para o video, e px-7.25 nos textos. assim ficando 16px para os videos e 29px+16px = 45px para os textos
  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="flex h-full w-full flex-col items-center justify-center px-4">
        <Hero />
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-15" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Então, <br /> resolvemos{" "}
            <span>
              <Badge label="Pesquisar" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Passamos um ano viajando por todo o país, conversando com pessoas.
          </BaseContent>
          <BaseContent className="pb-7">
            Não tínhamos a mínima ideia de moda, produção, nem mesmo de
            camisetas. Tudo o que sabíamos era sobre bom design e como contar
            uma história envolvente. Acontece que era isso que faltava na
            experiência.
          </BaseContent>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <BaseContent className="py-7">
            Não tínhamos a mínima ideia de moda, produção, nem mesmo de
            camisetas. Tudo o que sabíamos era sobre bom.
          </BaseContent>
          <BaseContent>
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos era sobre bom.
          </BaseContent>
        </TextWrapper>
        <TextWrapper>
          <DashedDivider className="mt-15 mb-21" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Empacotamos isso em{" "}
            <span>
              <Badge label="6 Aulas" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos era sobre bom.
          </BaseContent>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Bloco de notas"
          whichLesson="Aula 1"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />

        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Agenda"
          whichLesson="Aula 2"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />

        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Lista de tarefas"
          whichLesson="Aula 3"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />

        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Ritual Diário"
          whichLesson="Aula 4"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />

        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Ritual Semanal"
          whichLesson="Aula 5"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />

        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <LessonBlock
          lessonName="Ritual Mensal"
          whichLesson="Aula 6"
          description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
        />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-21" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Colocamos, <br /> materiais{" "}
            <span>
              <Badge label="Extras" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos.
          </BaseContent>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-15" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Treinamos uma equipe,{" "}
            <span>
              <Badge label="Braba" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos.
          </BaseContent>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-15" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Incluímos uma ótima{" "}
            <span>
              <Badge label="Oferta" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos.
          </BaseContent>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-15" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            E o apelidamos de{" "}
            <span>
              <Badge label="Palaga" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos.
          </BaseContent>
        </TextWrapper>
        <CallToAction />
        <TextWrapper>
          <DashedDivider className="mt-15 mb-15" />
          <Title
            className={`font-title text-[49px] leading-12.5 font-semibold tracking-[-0.99px] text-[#202A40]`}
          >
            Outras{" "}
            <span>
              <Badge label="Perguntas" />
            </span>
          </Title>
          <BaseContent className="pt-7.5 pb-7">
            Acontece que era isso que faltava na experiência, produção, nem
            mesmo de camisetas. Tudo o que sabíamos.
          </BaseContent>
        </TextWrapper>
        <FAQCard
          Question={"O curso é para iniciantes?"}
          Answer={
            "O curso foi pensado para ambos os perfis. Se você está começando, vai aprender a fazer certo desde o início. Se já tem experiência, vai organizar o conhecimento e descobrir pontos cegos que podem estar custando dinheiro."
          }
          className={"mb-7.5"}
        />
        <FAQCard
          Question={"As aulas são demoradas?"}
          Answer={
            "O curso completo tem apenas 60 minutos, dividido em 6 aulas de 10 minutos cada. Você pode assistir tudo de uma vez ou ir aula por aula, no seu ritmo."
          }
          className={"mb-7.5"}
        />
        <FAQCard
          Question={"Quanto tempo de acesso?"}
          Answer={
            "O acesso é vitalício. Uma vez que você comprar, o curso é seu para sempre. Isso inclui todas as atualizações futuras que fizermos no conteúdo."
          }
          className={"mb-7.5"}
        />
        <FAQCard
          Question={"E se eu não gostar do curso?"}
          Answer={
            "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia."
          }
          className={"mb-7.5"}
        />
        <FAQCard
          Question={"Quais são os materiais extra?"}
          Answer={
            "Sim! Você recebe planilhas práticas para calcular os principais indicadores financeiros do seu negócio. São ferramentas que você pode usar imediatamente após assistir as aulas."
          }
          className={"mb-7.5"}
        />
        <FAQCard
          Question={"Posso assistir pelo celular?"}
          Answer={
            "Sim! A plataforma é 100% responsiva e você pode assistir as aulas em qualquer dispositivo: computador, tablet ou celular."
          }
        />
      </div>
    </>
  );
}
