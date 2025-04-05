import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";

export function SectionDescription() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-1"
      className="rounded border border-gray-200 bg-white"
    >
      <Accordion.Item value="item-1">
        <section className="flex flex-col gap-12 md:pt-6 md:pb-20 md:px-10">
          <div className="flex flex-col-reverse flex-1 md:flex-row gap-10 self-stretch">
            <div className="main-info flex flex-col gap-8 flex-1">
              <Accordion.Trigger className="cursor-pointer p-4 md:p-0 md:cursor-default text-left title flex flex-col gap-6">
                <div className="headline flex flex-col gap-4">
                  <h2 className="text-xl text-zinc-900 font-bold">Título</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex flex-row-reverse">
                      <span className="flex justify-center items-center flex-shrink-0 bg-purpleseat-base text-white select-none w-[3.25rem] h-12 [&+&]:-mr-4 hover:z-10 transition-all">
                        <Image
                          width={50}
                          height={50}
                          className="h-full w-full rounded-full object-cover"
                          src="https://github.com/elisioWander.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href="#"
                        className="cursor-pointer text-sm font-semibold transition-colors duration-150 text-zinc-700 hover:text-zinc-900"
                      >
                        Nome do professor
                      </Link>
                      <span className="text-xs md:text-sm text-zinc-700">
                        Educador
                      </span>
                    </div>

                    <span className="md:hidden ml-auto">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="text-zinc-900 shrink-0 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Accordion.Trigger>

              <Accordion.Content>
                <div className="px-4 pb-4 md:p-0 flex flex-col gap-5 text-md text-zinc-700 w-full max-w-[800px]">
                  <p>
                    <Link
                      href=""
                      className="inline-flex justify-center items-center gap-1 flex-shrink-0 font-semibold cursor-pointer text-sm text-purpleseat-light"
                    >
                      <span className="relative flex justify-center after:absolute after:content-[''] after:w-0 after:h-px after:bottom-0 after:transition-all hover:after:w-full after:bg-[currentColor]">
                        Commit: Estrutura da aplicação - Componente: Post
                      </span>
                    </Link>
                  </p>
                  <p>
                    Nessa aula vamos estruturar o conteúdo do componente , nos
                    baseando no conteúdo que podemos encontrar no Layout do
                    Figma.
                  </p>
                </div>
              </Accordion.Content>
            </div>
          </div>
        </section>
      </Accordion.Item>
    </Accordion.Root>
  );
}
