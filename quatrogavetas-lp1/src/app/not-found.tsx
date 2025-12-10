import Button from "./components/button";

export default function notFound404() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
        <div>
            <h1 className="text-carbon-800 text-6xl sm:text-8xl leading-none tracking-[-0.4px] pb-2 justify-center ">404</h1>
            <h2 className="text-carbon-800 text-[36px] sm:text-5xl leading-none tracking-[-0.4px] pb-2 justify-center ">Página não encontrada</h2>
            <p className="text-carbon-400 text-[22px]/[28px] sm:text-2xl/[32px] ">Aqui nem a Palaga conseguiu se organizar, não deve estar na lista de tarefas</p>
            <div className="flex justify-start pt-10">
                <Button href={'/'} variant="dark">Que tal voltar?</Button>
            </div>
        </div>

    </div>
  );
}
