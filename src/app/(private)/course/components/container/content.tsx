import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto">
      {children}
    </div>
  );
}
