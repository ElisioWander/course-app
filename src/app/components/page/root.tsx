import { HTMLAttributes, ReactNode } from "react";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Root({ children, className, ...rest }: PageContainerProps) {
  return (
    <div className={`w-full h-full flex flex-col ${className}`} {...rest}>
      {children}
    </div>
  );
}
