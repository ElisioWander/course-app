import { SubscribeButton } from "@/app/components/subscribeButton";
import { AsideGoToClass } from "./asideGoToClasse";

export function Aside() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-4 w-full lg:w-[384px]">
      <AsideGoToClass />
      <SubscribeButton />
    </div>
  );
}
