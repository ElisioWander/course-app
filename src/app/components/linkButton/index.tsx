import { cloneElement, ReactElement, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type LinkButtonProps = LinkProps & {
  endIcon?: ReactElement;
  children: ReactNode;
};

export function LinkButton({ endIcon, children, ...rest }: LinkButtonProps) {
  return (
    <Link
      className="flex items-center gap-1 text-red-300 cursor-pointer hover:text-red-400 transition-colors duration-200"
      {...rest}
    >
      {children}
      {endIcon &&
        cloneElement(endIcon, { className: "text--red-300" } as HTMLElement)}
    </Link>
  );
}
