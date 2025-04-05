import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <Accordion.Content className="data-[state=open]:animate-accordion-slide-down data-[state=closed]:animate-accordion-slide-up overflow-hidden">
      <div className="flex flex-col p-2">{children}</div>
    </Accordion.Content>
  );
}
