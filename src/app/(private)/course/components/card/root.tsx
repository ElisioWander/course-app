import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className="rounded border border-gray-200 bg-white"
    >
      {children}
    </Accordion.Root>
  );
}
