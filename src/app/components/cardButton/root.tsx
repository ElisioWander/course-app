import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type RootProps = {
  asLink?: boolean;
  href?: Url;
  children: ReactNode;
};

export function Root({ asLink = false, href = "#", children }: RootProps) {
  return (
    <footer className="p-4 bg-red-50 rounded-[12px] mt-8 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-red-100 ">
      {asLink ? (
        <Link className="flex items-center gap-4 w-full " href={href}>
          {children}
        </Link>
      ) : (
        children
      )}
    </footer>
  );
}
