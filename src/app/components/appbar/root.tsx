import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <div className="fixed w-full top-0 left-0 right-0 h-20 flex items-center bg-white border-b border-gray-200">
      {children}
    </div>
  );
}
