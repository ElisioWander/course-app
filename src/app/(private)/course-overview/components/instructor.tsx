import { Box } from "@/app/components/Box";
import Image from "next/image";

export function Instructor() {
  return (
    <Box.Root>
      <Box.Header>Instrutor</Box.Header>
      <Box.Content className="gap-5">
        <div className="flex items-center gap-4">
          <span className="flex justify-center items-center flex-shrink-0 bg-purpleseat-base text-zinc-900 select-none w-[3.25rem] h-12 [&+&]:-mr-4 hover:z-10 transition-all">
            <Image
              width={50}
              height={50}
              className="h-full w-full rounded-full object-cover"
              src="https://github.com/elisioWander.png"
              alt=""
            />
          </span>
          <div className="flex flex-col items-start">
            <h3 className="text-sm text-zinc-900 sm:text-md font-bold">
              Nome do Instrutor
            </h3>
            <p className="text-zinc-900 text-xs sm:text-sm">
              Cargo do instrutor
            </p>
          </div>
        </div>

        <Box.Paragrapth>
          <p>
            Programador há 11 anos com foco nas melhores tecnologias de
            desenvolvimento web & mobile. Apaixonado por educação e por mudar a
            vida das pessoas através da programação. Mais de 500.000 pessoas já
            passaram por um dos seus treinamentos.
          </p>
        </Box.Paragrapth>
      </Box.Content>
    </Box.Root>
  );
}
