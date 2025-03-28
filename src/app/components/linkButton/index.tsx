import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type LinkButtonProps = LinkProps & {
  children: ReactNode;
};

export function LinkButton({ children, ...rest }: LinkButtonProps) {
  return (
    <Link
      className="text-red-300 cursor-pointer hover:text-red-400 transition-colors duration-200"
      {...rest}
    >
      {children}
    </Link>
  );
}
