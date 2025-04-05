import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <div className="flex flex-col md:flex-row h-full overflow-x-auto md:overflow-hidden">
      {children}
    </div>
  );
}
