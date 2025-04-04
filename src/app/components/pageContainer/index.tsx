import { HTMLAttributes, ReactNode } from "react";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="relative w-full h-full mt-20 p-6 flex flex-col">
      {children}
    </div>
  );
}
