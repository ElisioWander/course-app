import { Breadcrumb } from "@/app/components/breadcrumb";
import { Page } from "@/app/components/page";

export default function Course() {
  return (
    <Page.Root>
      <Page.Header>
        <Breadcrumb />
      </Page.Header>
    </Page.Root>
  );
}
