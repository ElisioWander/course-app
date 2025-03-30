import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <main className="w-full px-4 h-full max-w-[1280px] m-auto flex items-center justify-between">
      {children}
    </main>
  );
}
