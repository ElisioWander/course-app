import { LinkButton } from "@/app/components/linkButton";
import { Box } from "@/app/components/Box";
import Icon from "@/app/components/Icon";

export function Introduction() {
  return (
    <Box.Root>
      <div className="group relative flex h-[200px] justify-center items-center self-stretch overflow-hidden cursor-pointer">
        {/* <img src="" alt="" className="object-cover origin-top transition-transform group-hover:scale-110" /> */}
        <div className="h-full w-full flex items-center justify-center text-white bg-black">
          Vídeo introdutório
        </div>
      </div>

      <Box.Content className="items-center gap-5">
        <Box.Paragrapth>
          <p>
            Nesta trilha você irá conhecer os tópicos essenciais de React para
            Web, se aventurar no ecossistema e aprender na prática todas as
            possibilidades que essa biblioteca tem para oferecer. A trilha
            começa pela introdução com os três pilares da biblioteca: Estado,
            Propriedade e Componente e te leva até colocar as aplicações em
            produção, com testes e deploy automatizados.
          </p>
          <p>
            Com uma abordagem mais prática você irá criar diversos projetos ao
            longo da trilha, desde aplicações mais simples como um feed social
            simplificado até o desenvolvimento de dashboard de administração de
            pizzaria, com gerenciamento de pedidos e comunicação com API
            própria.
          </p>
        </Box.Paragrapth>

        <LinkButton href="" endIcon={<Icon.ChevronDown />}>
          Ler mais
        </LinkButton>
      </Box.Content>
    </Box.Root>
  );
}
