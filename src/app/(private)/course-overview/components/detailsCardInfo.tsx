import { cloneElement, ReactElement } from "react";

type DetailsCardInfo = {
  title: string;
  subTitle: string;
  icon: ReactElement;
};

export function DetailsCardInfo({ title, subTitle, icon }: DetailsCardInfo) {
  return (
    <div className="flex items-center gap-4 self-stretch">
      <div className="flex w-8 h-8 justify-center items-center rounded-md border border-green-600 bg-green-400 text-white text-md">
        {cloneElement(icon, { className: "w-4" } as HTMLElement)}
      </div>
      <div className="flex flex-col justify-center items-start flex-1">
        <p className="inline-flex items-center font-bold gap-1 text-zinc-900 text-xs">
          {title}
        </p>
        <p className="text-zinc-900 text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
