import { Breadcrumb } from "@/app/components/breadcrumb";
import Icon from "@/app/components/Icon";
import { Page } from "@/app/components/page";
import { Aside } from "./components/aside";
import { Introduction } from "./components/introduction";
import { Instructor } from "./components/instructor";
import { Details } from "./components/details";

export default function CourseOverview() {
  return (
    <Page.Root className="p-[0]">
      <Page.Header>
        <Breadcrumb.Root>
          <Breadcrumb.Item
            href="/dashboard"
            label="Dashboard"
            icon={<Icon.House />}
          />
          <Breadcrumb.Item href="/courses" label="Cursos" />
          <Breadcrumb.Item label="Visão Geral" rightBar={false} />
        </Breadcrumb.Root>
      </Page.Header>

      <div className="flex p-4 lg:px-6 lg:pt-12 pb-16 lg:pb-12 w-full ">
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-14 mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-6 flex-1 overflow-hidden">
            <Introduction />
            <Instructor />
            <Details />
          </div>

          <Aside />
        </div>
      </div>
    </Page.Root>
  );
}
