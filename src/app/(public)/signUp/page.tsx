import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function SignUp() {
  return (
    <div>
      <Header subTitle="Cadastre-se gratuitamente" />
      <Form />

      <CardButton.Root asLink href="/signIn">
        <Icon.logIn />
        <CardButton.Text>
          Já possui uma conta?
          <CardButton.Span>Entre na plataforma</CardButton.Span>
        </CardButton.Text>
        <Icon.ChevronRight />
      </CardButton.Root>
    </div>
  );
}
