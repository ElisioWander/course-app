import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function Title({ children, className, ...rest }: TitleProps) {
  return (
    <h2
      className={clsx("text-zinc-900 text-xs font-bold", className)}
      {...rest}
    >
      {children}
    </h2>
  );
}
