import { Appbar } from "@/app/components/appbar";
import { BottomNavigation } from "@/app/components/bottomNavigation";
import Icon from "@/app/components/Icon";
import { Logo } from "@/app/components/logo";
import { Navbar } from "@/app/components/navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen font-default">
      <Appbar.Root>
        <Appbar.Content>
          <Logo />
          <Navbar.Root>
            <Navbar.Item label="Dashboard" href="/dashboard" />
            <Navbar.Item label="Cursos" href="/courses" />
            <Navbar.Item label="Aprendizado" href="/learning" />
          </Navbar.Root>
        </Appbar.Content>
      </Appbar.Root>

      <div className="flex flex-1 overflow-hidden">{children}</div>

      <BottomNavigation.Root>
        <BottomNavigation.Item
          label="Dashboard"
          href="/dashboard"
          icon={<Icon.LayoutDashboard />}
        />
        <BottomNavigation.Item
          label="Cursos"
          href="/courses"
          icon={<Icon.BookOpen />}
        />
        <BottomNavigation.Item
          label="Aprendizado"
          href="learning"
          icon={<Icon.Route />}
        />
        <BottomNavigation.Item href="" label="Todos" icon={<Icon.Ellipsis />} />
      </BottomNavigation.Root>
    </div>
  );
}
