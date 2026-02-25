import { Badge } from "../components/badge";
import { DashedDivider } from "../components/dasheddivider";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import BaseContent from "./components/paragraph";
import HorizontalMarquee from "../components/marqueecomponent";
import Hero from "./components/hero";
import TextWrapper from "./components/textwrapper";
import { Title } from "./components/title";
import LessonsTitle from "./components/lessonstitle";

export default function LandingPageOne() {
  // padding ta 45 no total, px-4 no main container para o video, e px-7.25 nos textos. assim ficando 16px para os videos e 29px+16px = 45px para os textos
  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="flex h-full w-full flex-col items-center justify-center px-4">
        <Hero />
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <DashedDivider />
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
        <TextWrapper className="max-w-125 px-7.25">
          <DashedDivider textBelow />
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
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle
              LessonName={"Bloco de notas"}
              WhichLesson={"Aula 1"}
            />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle LessonName={"Agenda"} WhichLesson={"Aula 2"} />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle
              LessonName={"Lista de tarefas"}
              WhichLesson={"Aula 3"}
            />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle LessonName={"Ritual Diário"} WhichLesson={"Aula 4"} />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle
              LessonName={"Ritual Semanal"}
              WhichLesson={"Aula 5"}
            />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>
        </TextWrapper>
        <div className="aspect-video w-full max-w-187.5 rounded-2xl bg-[#F5F7FA]" />
        <TextWrapper>
          <div className="mt-6.25 px-2">
            {/* px-2 aumenta em 8 os 45px de paddings ja somados anteriormente ficando 53px */}
            <LessonsTitle LessonName={"Ritual Mensal"} WhichLesson={"Aula 6"} />
            <BaseContent className="pt-5 pb-18">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </div>

          <DashedDivider textBelow />
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
          <DashedDivider />
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
          <DashedDivider />
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
          <DashedDivider />
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
      </div>
    </>
  );
}
