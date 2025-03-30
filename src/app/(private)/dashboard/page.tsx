import { PageContainer } from "@/app/components/pageContainer";
import { Card } from "./components/card";
export default function Dashboard() {
  return (
    <PageContainer>
      <main className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 h-full flex flex-col items-center justify-center gap-8">
        <Card />
        <Card />
        <Card />
      </main>
    </PageContainer>
  );
}
