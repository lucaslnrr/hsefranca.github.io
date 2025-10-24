import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <>
      <main className="container mx-auto min-h-dvh my-24 space-y-32">
        <section className="lg:text-balance lg:text-center space-y-12">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="shadow-none rounded-full border-foreground/20"
            >
              <Link href="/#treinamentos" className="relative">
                Próximos treinamentos na HSE Franca &nbsp;
                <span className="font-semibold text-primary space-nowrap">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Saiba mais <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Button>
            <h1 className="scroll-m-20 sm:text-6xl/18 font-bold tracking-tight">
              Segurança do Trabalho (SST), Perícia e Treinamentos.
            </h1>
            <p className="text-lg">
              Atuamos com soluções completas em saúde e segurança ocupacional:
              SST, perícias trabalhistas e previdenciárias, programas legais,
              laudos, consultoria e treinamentos para conformidade e prevenção.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/contact">Fale conosco</Link>
              </Button>
              <Button variant="secondary" className="shadow-none" asChild>
                <Link href="/servicos">Nossos serviços</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-video bg-neutral-300 rounded-lg overflow-hidden">
            <Image
              fill
              src={`${basePath}/media/1.png`}
              alt="Equipe de Segurança do Trabalho da HSE Franca"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>SST e PGR</CardTitle>
                <CardDescription>
                  Gestão de Segurança do Trabalho, PGR, PCMSO (em interface
                  com o médico), APR, inspeções e planos de ação para reduzir
                  riscos e atender às NRs.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver serviço →
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Perícia</CardTitle>
                <CardDescription>
                  Assistência técnica em perícias judiciais, elaboração e
                  contestação de laudos, análises de nexo e condições de
                  trabalho.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver serviço →
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-none">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Treinamentos NR</CardTitle>
                <CardDescription>
                  Capacitações normativas (NRs), integração, SIPAT e programas
                  sob medida para sua operação.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver treinamentos →
                </CardAction>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* <...> End Of Hero Section <...> */}
        <section className="">
          <Card className="bg-primary/20 dark:bg-card text-center border-none shadow-none">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Receba novidades e datas de treinamentos.
              </h2>
              <p className="">Cadastre seu e-mail para ser avisado sobre novas turmas e conteúdos.</p>
              <div className="flex w-full max-w-sm lg:mx-auto items-center lg:justify-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-foreground/20 shadow-none"
                />
                <Button type="submit">Inscrever</Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-y-24 lg:gap-x-12">
          <div className="w-full order-first space-y-3 flex flex-col justify-center items-start">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Gestão de riscos e conformidade que geram resultados.
            </h3>
            <p className="text-lg/7 text-foreground">
              Implementamos práticas de SST alinhadas às NRs, com foco em prevenção,
              melhoria contínua e segurança operacional, apoiando pessoas e o negócio.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">Conheça nossos serviços &rarr;</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded bg-foreground/30 rounded-lg">
            <Image
              fill
              src={`${basePath}/media/2.png`}
              alt="Ilustração de segurança do trabalho"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="lg:order-last flex flex-col justify-center items-start gap-4">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Treinamentos práticos e focados na realidade do campo.
            </h3>
            <p className="text-lg/7 text-foreground">
              Capacitações com conteúdo aplicável, exercícios e simulações para fixação,
              garantindo equipes mais preparadas e ambientes mais seguros.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">Ver treinamentos &rarr;</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded bg-foreground/30 rounded-lg">
            <Image
              fill
              src={`${basePath}/media/3.png`}
              alt="Equipe em treinamento de segurança"
              className="object-cover object-center rounded-xl"
            />
          </div>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
        <section className="">
          <Card className="bg-primary/20 dark:bg-card text-center border-none shadow-none">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Pronto para elevar a segurança do seu negócio?
              </h2>
              <p className="">Fale com a HSE Franca: (27) 99518-6540 • comercial@hsefranca.com</p>
              <div className="flex items-center justify-center gap-4">
                <Button className="shadow-none" asChild>
                  <Link href="tel:5527995186540">Ligar agora</Link>
                </Button>
                <Button variant="secondary" className="shadow-none" asChild>
                  <Link href="mailto:comercial@hsefranca.com">Enviar e-mail</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
      </main>
    </>
  );
}
