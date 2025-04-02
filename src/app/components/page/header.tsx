import { HTMLAttributes, ReactNode } from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Header({ children, className, ...rest }: HeaderProps) {
  return (
    <header
      className={`fixed left-0 right-0 top-20 py-4 px-5 border-b border-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </header>
  );
}
