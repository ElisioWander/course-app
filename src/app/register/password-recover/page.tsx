import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function PasswordRecover() {
  return (
    <div>
      <Header subTitle="Esqueci minha senha" />
      <Form />

      <CardButton.Root asLink href="/register/signIn">
        <Icon.ArrowBigLeft />
        <CardButton.Text className="text-center">
          Voltar para o login
        </CardButton.Text>
      </CardButton.Root>
    </div>
  );
}
