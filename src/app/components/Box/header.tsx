import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className="flex p-3 sm:px-8 sm:pt-7 sm:pb-2 items-center self-stretch">
      <h2 className="text-zinc-900 text-xs font-bold">{children}</h2>
    </div>
  );
}
