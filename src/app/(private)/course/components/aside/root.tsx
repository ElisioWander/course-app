import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <aside className="flex flex-col self-stretch w-full md:w-[360px] min-[1441px]:w-[384px] min-[1921px]:w-[432px] h-full border-l border-l-transparent bg-white transition-all">
      <div className="flex flex-col h-full">
        <div className="flex flex-col h-full border-l border-l-gray-200 md:overflow-y-auto">
          <div className="p-4 md:p-3 tab-content">
            <div className="flex flex-col h-full gap-3">{children}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
