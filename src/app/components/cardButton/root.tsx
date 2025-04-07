import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type RootProps = {
  asLink?: boolean;
  href?: Url;
  variant?: "filled" | "outlined";
  className?: string;
  children: ReactNode;
};

export function Root({
  asLink = false,
  href = "#",
  className = "",
  variant = "filled",
  children,
}: RootProps) {
  return (
    <footer
      className={`p-4 ${
        variant === "outlined"
          ? "bg-transparent border text-gray-900 border-gray-300 hover:bg-gray-100"
          : "bg-green-400 text-white hover:bg-green-500"
      }  rounded-[12px] flex items-center gap-4 cursor-pointer transition-all duration-200  ${className}`}
    >
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
