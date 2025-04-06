import { Breadcrumb } from "@/app/components/breadcrumb";
import { Page } from "@/app/components/page";
import Icon from "@/app/components/Icon";

import { SectionDescription } from "./components/descriptionSection";
import { CopyrightSection } from "./components/copyrightSection";
import { VideoSection } from "./components/videoSection";
import { Container } from "./components/container";
import { Aside } from "./components/aside";
import { Card } from "./components/card";

const data = [
  {
    title: "Primeiro Módulo",
    id: "1",
    moduleNumber: 1,
    amountLessons: 7,
    amountTime: "51:35",
    isModuleCompleted: true,
    lessons: [
      {
        id: "1",
        label: "Primeira aula",
        time: "00:01:31",
        isCompleted: true,
        isActive: false,
      },
      {
        id: "2",
        label: "Segunda aula",
        time: "00:01:31",
        isCompleted: true,
        isActive: false,
      },
      {
        id: "3",
        label: "Terceira aula",
        time: "00:01:31",
        isCompleted: true,
        isActive: false,
      },
      {
        id: "4",
        label: "Quarta aula",
        time: "00:01:31",
        isCompleted: true,
        isActive: false,
      },
    ],
  },
  {
    title: "Segundo Módulo",
    id: "2",
    moduleNumber: 2,
    amountLessons: 5,
    amountTime: "51:35",
    isModuleCompleted: false,
    lessons: [
      {
        id: "5",
        label: "Primeira aula",
        time: "00:01:31",
        isCompleted: true,
        isActive: false,
      },
      {
        id: "6",
        label: "Segunda aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: true,
      },
      {
        id: "7",
        label: "Terceira aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
      {
        id: "8",
        label: "Quarta aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
    ],
  },
  {
    title: "Terceiro Módulo",
    id: "3",
    moduleNumber: 3,
    amountLessons: 10,
    amountTime: "51:35",
    isModuleCompleted: false,
    lessons: [
      {
        id: "9",
        label: "Primeira aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
      {
        id: "10",
        label: "Segunda aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
      {
        id: "11",
        label: "Terceira aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
      {
        id: "12",
        label: "Quarta aula",
        time: "00:01:31",
        isCompleted: false,
        isActive: false,
      },
    ],
  },
];

export default function Course() {
  return (
    <Page.Root className="p-[0]">
      <Container.Root>
        <Container.Content>
          <Page.Header>
            <Breadcrumb.Root>
              <Breadcrumb.Item
                href="/dashboard"
                label="Dashboard"
                icon={<Icon.House />}
              />
              <Breadcrumb.Item href="/courses" label="Cursos" />
              <Breadcrumb.Item href="/course-overview" label="Visão Geral" />
              <Breadcrumb.Item label="Cursos de ..." rightBar={false} />
            </Breadcrumb.Root>
          </Page.Header>

          <div className="flex flex-col flex-1 flex-shrink-0 w-full md:overflow-y-auto transition-[height]">
            <VideoSection />
            <SectionDescription />
            <CopyrightSection />
          </div>
        </Container.Content>

        <Aside.Root>
          <Aside.Header title="Conteúdo" />
          <Aside.Content>
            {data.map((item) => (
              <Card.Root key={item.id}>
                <Card.Trigger
                  title={item.title}
                  value={item.id}
                  moduleNumber={item.moduleNumber}
                  amountLessons={item.amountLessons}
                  amountTime={item.amountTime}
                  isModuleCompleted={item.isModuleCompleted}
                >
                  <Card.Content>
                    {item.lessons.map((lesson) => (
                      <Card.Item
                        key={lesson.id}
                        icon={<Icon.Video />}
                        label={lesson.label}
                        time={lesson.time}
                        isCompleted={lesson.isCompleted}
                        isActive={lesson.isActive}
                      />
                    ))}
                  </Card.Content>
                </Card.Trigger>
              </Card.Root>
            ))}
          </Aside.Content>
        </Aside.Root>
      </Container.Root>
    </Page.Root>
  );
}
