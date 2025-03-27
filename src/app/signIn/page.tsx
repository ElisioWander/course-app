import Icon from "@/app/components/Icon";
import { Form } from "./form";

export default function SignIn() {
  return (
    <div>
      <header className="text-center mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-2 ">
          Curso em Vídeo
        </h2>
        <h3 className="text-[1.25rem] text-zinc-700">Acesse sua conta</h3>
      </header>

      <Form />

      <footer className="p-4 bg-red-50 rounded-[12px] mt-8 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-red-100 ">
        <div>
          <Icon.User className="text-zinc-700" />
        </div>
        <p className="text-sm flex flex-col w-full gap-[0.2rem] text-zinc-700 ">
          Não tem uma conta?
          <span className="text-red-400">Se inscreva gratuitamente</span>
        </p>
        <div>
          <Icon.ChevronRight className="text-zinc-700" />
        </div>
      </footer>
    </div>
  );
}
