import { BlurReveal } from "./components/blurreview";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <h1 className="text-carbon-800 text-[40px] sm:text-5xl leading-none tracking-[-0.4px] pb-2">
        <BlurReveal delay={0.05}>Organização</BlurReveal>{" "}
        <BlurReveal delay={0.10}>é</BlurReveal>{" "}
        <BlurReveal delay={0.15}>o</BlurReveal>{" "}
        <BlurReveal delay={0.20}>ato</BlurReveal>{" "}
        <BlurReveal delay={0.25}>de</BlurReveal>{" "}
        <BlurReveal delay={0.30}>colocar</BlurReveal>{" "}
        <BlurReveal delay={0.35}>as</BlurReveal>
        <br className="hidden sm:block" />
        <BlurReveal delay={0.40}>coisas</BlurReveal>{" "}
        <BlurReveal delay={0.45}>em</BlurReveal>{" "}
        <BlurReveal delay={0.50}>seus</BlurReveal>{" "}
        <BlurReveal delay={0.55}>devidos</BlurReveal>{" "}
        <BlurReveal delay={0.60}>lugares</BlurReveal>
      </h1>
    </div>
  );
}
