import { ReactNode } from "react";

export function Span({ children }: { children: ReactNode }) {
  return <span className="text-red-400">{children}</span>;
}
