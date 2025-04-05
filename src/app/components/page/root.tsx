import { HTMLAttributes, ReactNode } from "react";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Root({ children, className, ...rest }: PageContainerProps) {
  return (
    <div
      id="layout-content"
      className={`flex-1 overflow-y-auto p-6 overflow-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
