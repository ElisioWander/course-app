import { Card } from "./components/card";
import { Input } from "@/app/components/input";
import Icon from "@/app/components/Icon";
import { LinkButton } from "@/app/components/linkButton";
import { Page } from "@/app/components/page";

export default function Dashboard() {
  return (
    <Page.Root>
      <main className="flex flex-col gap-12">
        <div className="w-full max-w-[478px] m-auto ">
          <Input placeholder="Pesquisar por curso" icon={<Icon.Search />} />
        </div>

        <section className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">
              Nome da sessão
            </h2>
            <LinkButton href="" endIcon={<Icon.ChevronRight />}>
              Ver tudo
            </LinkButton>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">
              Nome da sessão
            </h2>
            <LinkButton href="" endIcon={<Icon.ChevronRight />}>
              Ver tudo
            </LinkButton>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">
              Nome da sessão
            </h2>
            <LinkButton href="" endIcon={<Icon.ChevronRight />}>
              Ver tudo
            </LinkButton>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </Page.Root>
  );
}
