import { HTMLAttributes, ReactNode } from "react";

type TextProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export function Text({ children, className = "", ...rest }: TextProps) {
  return (
    <p
      className={`text-sm flex flex-col w-full gap-[0.2rem] text-zinc-700 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
