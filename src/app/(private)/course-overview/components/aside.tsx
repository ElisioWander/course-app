import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

export function Aside() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-4 w-full lg:w-[384px]">
      <div className="flex flex-col self-stretch rounded-md border border-gray-200 p-4 lg:p-6 lg:pt-5 gap-4 lg:gap-6 bg-white">
        <div className="flex flex-col gap-4 self-stretch">
          <h2 className="text-xs text-span font-bold">Progresso geral</h2>

          <div className="flex items-center gap-2 self-stretch">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="relative w-full bg-green-700 h-2 rounded-full "></div>
              <span className="flex-shrink-0 text-zinc-900 text-xs">100%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 self-stretch">
          <CardButton.Root>
            <CardButton.Text className="font-bold">
              Acessar Conteúdo
            </CardButton.Text>
            <Icon.ChevronRight />
          </CardButton.Root>
        </div>
      </div>
    </div>
  );
}
