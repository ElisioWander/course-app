import CardButton from "@/app/components/cardButton";
import Icon from "@/app/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function SignIn() {
  return (
    <div>
      <Header subTitle="Acesse sua conta" />
      <Form />

      <CardButton.Root asLink href="/signUp">
        <Icon.User className="text-zinc-700" />

        <CardButton.Text>
          Não tem uma conta?
          <CardButton.Span>Se inscreva gratuitamente</CardButton.Span>
        </CardButton.Text>
        <Icon.ChevronRight className="text-zinc-700" />
      </CardButton.Root>
    </div>
  );
}
