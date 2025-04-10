import { Box } from "@/app/components/Box";
import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

export function SubscribeButton() {
  return (
    <Box.Root>
      <Box.Header className="gap-2">
        <Box.Title>Assinatura anual</Box.Title>
      </Box.Header>
      <Box.Content>
        <Box.Title className="text-lg">
          Tenha acesso a todos os cursos da plataforma
        </Box.Title>
        <div className="mt-2 mb-6">
          <p>
            até 12x <strong className="text-lg text-green-600 ">R$49,90</strong>{" "}
            sem juros
          </p>
          <p>
            R$598,80 <span className="text-sm">à vista</span>
          </p>
        </div>

        <CardButton.Root href="/course" asLink>
          <CardButton.Text className="font-bold">Quero assinar</CardButton.Text>
          <Icon.ChevronRight className="text-white" />
        </CardButton.Root>
      </Box.Content>
    </Box.Root>
  );
}
