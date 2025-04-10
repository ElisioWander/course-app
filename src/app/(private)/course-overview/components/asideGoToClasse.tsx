import { Box } from "@/app/components/Box";
import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

export function AsideGoToClass() {
  return (
    <Box.Root>
      <Box.Header className="gap-2">
        <Box.Title>Progresso do curso</Box.Title>

        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex items-center gap-2 self-stretch">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="relative w-full bg-green-500 h-2 rounded-full "></div>
              <span className="flex-shrink-0 text-zinc-900 text-xs">100%</span>
            </div>
          </div>
        </div>
      </Box.Header>
      <Box.Content>
        <CardButton.Root href="/course" asLink>
          <CardButton.Text className="font-bold">
            Ir para as aulas
          </CardButton.Text>
          <Icon.ChevronRight className="text-white" />
        </CardButton.Root>
      </Box.Content>
    </Box.Root>
  );
}
