import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <nav className="sm:hidden fixed z-50 w-full h-16 max-w-lg m-auto bottom-4 left-0 right-0 px-4 ">
      <div className="shadow-md border-t border-gray-200 shadow-gray-200 bg-white rounded-full p-1.5  ">
        <ul className="grid h-full max-w-lg grid-cols-4 gap-1 mx-auto">
          {children}
        </ul>
      </div>
    </nav>
  );
}
