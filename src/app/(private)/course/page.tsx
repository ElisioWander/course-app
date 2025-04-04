import { Breadcrumb } from "@/app/components/breadcrumb";
import { Page } from "@/app/components/page";

export default function Course() {
  return (
    <div className="flex-1 overflow-y-auto" id="layout-content">
      <div className="flex flex-col md:flex-row h-full overflow-x-auto md:overflow-hidden">
        <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto">
          <Page.Header>
            <Breadcrumb />
          </Page.Header>

          <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto transition-[height]">
            <div className="flex flex-1 flex-shrink-0 relative">
              <div className="flex flex-col w-full transition-all md:h-[calc(80vh-80px)] bg-black">
                VÍDEO
              </div>
            </div>
            <div className="flex flex-col gap-12 md:pt-6 md:pb-20 md:pl-10 md:pr-6">
              <div className="flex flex-col-reverse flex-1 md:flex-row gap-10 self-stretch">
                <div className="main-info flex flex-col gap-8 flex-1">
                  <div className="title flex flex-col gap-6">
                    <div className="headline flex flex-col gap-4">
                      <h2 className="text-xl text-gray-100 font-bold">
                        Título
                      </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex flex-row-reverse">
                          <span className="flex justify-center items-center flex-shrink-0 bg-purpleseat-base text-white select-none w-[3.25rem] h-12 [&+&]:-mr-4 hover:z-10 transition-all"></span>
                        </div>
                        <div className="flex flex-col">
                          <a
                            className="AuiLinkButton-root inline-flex justify-center items-center gap-1 flex-shrink-0 font-[600] cursor-pointer text-sm leading-shorter [&>svg]:size-5 text-gray-200 hover:text-gray-100"
                            href=""
                          >
                            <span className="AuiLinkButton-label relative flex justify-center after:absolute after:content-[''] after:w-0 after:h-px after:bottom-0 after:transition-all hover:after:w-full">
                              Nome do professor
                            </span>
                          </a>
                          <span className="text-xs md:text-sm text-gray-200">
                            Educador
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 text-md text-gray-200 w-full max-w-[800px]">
                    <p>
                      <a
                        href=""
                        className="AuiLinkButton-root inline-flex justify-center items-center gap-1 flex-shrink-0 font-[600] cursor-pointer text-sm leading-shorter [&>svg]:size-5 text-purpleseat-light"
                      >
                        <span className="AuiLinkButton-label relative flex justify-center after:absolute after:content-[''] after:w-0 after:h-px after:bottom-0 after:transition-all hover:after:w-full after:bg-[currentColor]">
                          Commit: Estrutura da aplicação - Componente: Post
                        </span>
                      </a>
                    </p>
                    <p>
                      Nessa aula vamos estruturar o conteúdo do componente , nos
                      baseando no conteúdo que podemos encontrar no Layout do
                      Figma.
                    </p>
                  </div>
                </div>
                <div className="actions flex flex-col items-center gap-3">
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor=""
                      className="inline-flex justify-center items-center px-5 py-2 gap-[10px] rounded border border-transparent bg-gray-800 hover:bg-gray-700 transition-colors text-xs text-white font-bold leading-[1.5rem] cursor-pointer select-none [&:has(button[data-state=checked])]:bg-[#0D4722] [&:has(button[data-state=checked])]:hover:border-[#1B873F] normal-case [&:has(:disabled)]:opacity-80 [&:has(:disabled)]:cursor-wait [&>button:disabled]:cursor-wait"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        className="peer flex items-center justify-center w-4 h-4 rounded-[2.5px] border-[1.5px] border-gray-400 border-solid bg-transparent data-[state=checked]:rounded-[4px] data-[state=checked]:bg-[#1B873F] data-[state=checked]:border-[#1B873F]"
                      >
                        Marcar como assistida
                      </button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 gap-8 self-stretch mt-auto border-t border-solid border-t-gray-800">
              div do direitos reservados
            </div>
          </div>
        </div>

        <aside className="flex flex-col self-stretch w-full md:w-[360px] min-[1441px]:w-[384px] min-[1921px]:w-[432px] h-full border-l border-l-transparent bg-gray-900 transition-all">
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
                      stroke-width="0"
                      width="1em"
                      height="1em"
                      viewBox="0 0 25 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8304 17.699L3.93778 17.699"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M21.0615 10.8495H3.93778"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M21.0615 4.42809H3.93778"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M18.6 20L21.0615 17.5384L18.6 15.0769"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
