import { cloneElement, ReactElement } from "react";

interface ItemProps {
  label: string;
  time: string;
  isActive?: boolean;
  isCompleted?: boolean;
  icon: ReactElement;
}

export function Item({ label, time, isActive, isCompleted, icon }: ItemProps) {
  return (
    <div
      className={`flex p-2 items-center gap-6 cursor-pointer rounded transition-colors hover:bg-zinc-100 ${
        isActive
          ? "text-zinc-900 font-bold"
          : isCompleted
          ? "text-green-600"
          : "text-zinc-700"
      }`}
    >
      <div className="flex flex-1 items-center gap-3 overflow-hidden">
        {cloneElement(icon, {
          className: `isActive
            ? "text-zinc-900 font-bold"
            : isCompleted
            ? "text-green-600"
            : "text-zinc-700`,
        } as HTMLElement)}
        <span
          className="w-full overflow-hidden text-ellipsis text-sm whitespace-nowrap"
          title="Introdução"
        >
          {label}
        </span>
      </div>
      <span className="text-sm text-zinc-900 font-normal tabular-nums">
        {time}
      </span>
    </div>
  );
}
