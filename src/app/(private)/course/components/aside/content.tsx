import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return <div className="flex flex-col gap-2 select-none">{children}</div>;
}
