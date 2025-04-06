import { HTMLAttributes, ReactNode } from "react";

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Content({ children, className }: ContentProps) {
  return (
    <div
      className={`flex flex-col p-3 sm:p-8 sm:pt-7 self-stretch ${className}`}
    >
      {children}
    </div>
  );
}
