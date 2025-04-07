import { ReactNode } from "react";
import clsx from "clsx";

type HeaderProps = {
  className?: string;
  children: ReactNode;
};

export function Header({ children, className }: HeaderProps) {
  return (
    <div
      className={
        (clsx("flex p-3 sm:px-8 sm:pt-7 sm:pb-2 items-center self-stretch"),
        className)
      }
    >
      {children}
    </div>
  );
}
