import { PageContainer } from "@/app/components/pageContainer";
import { Card } from "./components/card";

export default function Dashboard() {
  return (
    <PageContainer>
      <main className="w-full h-full flex flex-col gap-12 ">
        <section className="flex flex-col">
          <h2 className="text-2xl uppercase font-bold text-zinc-900 mb-4">
            Cursos em andamento
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl uppercase font-bold text-zinc-900 mb-4">
            Cursos finalizados
          </h2>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
