import { ReactNode } from "react";

export function Span({ children }: { children: ReactNode }) {
  return <span className="text-green-400">{children}</span>;
}
