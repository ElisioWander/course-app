"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";

import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Informe o e-mail" })
    .email({ message: "Informe um e-mail válido" }),
  password: z.string().min(7, { message: "Deve ter no mínimo 7 caracteres" }),
});

type SignInUserInterface = z.infer<typeof schema>;

export function Form() {
  const { handleSubmit } = useForm<SignInUserInterface>({
    resolver: zodResolver(schema),
  });

  async function onSubmit() {
    // signIn(signInUserData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input label="E-mail" type="email" autoFocus placeholder="Seu e-mail" />
      <Input label="Senha" type="password" placeholder="Sua senha" />

      <div className="text-sm mb-4">
        <a className="bg-red-400 font-semibold cursor-pointer hover:bg-red-500">
          Esqueci minha senha
        </a>
      </div>

      <Button type="submit" isLoading={false}>
        Entrar
      </Button>
    </form>
  );
}
