import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

export function Title({
  children,
  className = "text-sm",
  ...rest
}: TitleProps) {
  return (
    <h2 className={clsx("text-gray-900 font-bold", className)} {...rest}>
      {children}
    </h2>
  );
}
