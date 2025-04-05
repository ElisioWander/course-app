import { Page } from "@/app/components/page";
import CardLessons from "./components/cardLessons";
import { Breadcrumb } from "@/app/components/breadcrumb";
import Icon from "@/app/components/Icon";
import { SectionDescription } from "./components/descriptionSection";
import { VideoSection } from "./components/videoSection";
import { CopyrightSection } from "./components/copyrightSection";

export default function Course() {
  return (
    <Page.Root className="p-[0]">
      <div className="flex flex-col md:flex-row h-full overflow-x-auto md:overflow-hidden">
        <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto">
          <Page.Header>
            <Breadcrumb.Root>
              <Breadcrumb.Item
                href="/dashboard"
                label="Dashboard"
                icon={<Icon.House />}
              />
              <Breadcrumb.Item href="/courses" label="Cursos" />
              <Breadcrumb.Item label="Cursos de ..." rightBar={false} />
            </Breadcrumb.Root>
          </Page.Header>

          <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto transition-[height]">
            <VideoSection />
            <SectionDescription />
            <CopyrightSection />
          </div>
        </div>

        <aside className="flex flex-col self-stretch w-full md:w-[360px] min-[1441px]:w-[384px] min-[1921px]:w-[432px] h-full border-l border-l-transparent bg-gray-900 transition-all">
          <div className="flex flex-col h-full">
            <div className="flex flex-col h-full border-l border-l-gray-800 md:overflow-y-auto">
              <div className="p-4 md:p-3 tab-content">
                <div className="flex flex-col h-full gap-3">
                  <div className="flex pl-3 items-center gap-2 self-stretch">
                    <h2 className="w-full text-md md:text-xl text-gray-100 font-bold">
                      Conteúdo
                    </h2>
                    <button className="flex w-fit rounded text-2xl transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none cursor-pointer bg-transparent hover:enabled:bg-gray-700 text-gray-200 border-none p-[10px] [&_svg]:size-5">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        width="1em"
                        height="1em"
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8304 17.699L3.93778 17.699"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.0615 10.8495H3.93778"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.0615 4.42809H3.93778"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18.6 20L21.0615 17.5384L18.6 15.0769"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 select-none">
                    <div>
                      <CardLessons />
                      <CardLessons />
                      <CardLessons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Page.Root>
  );
}
