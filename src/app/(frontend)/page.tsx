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
import BannerCarousel from "@/components/BannerCarousel";

export default function page() {
  return (
    <>
      <main className="container mx-auto min-h-dvh my-24 space-y-32">
        <section>
          <BannerCarousel
            slides={[
              {
                image: `${basePath}/media/1.png`,
                title: "Segurança do Trabalho e Conformidade",
                description:
                  "PGR, PCMSO, laudos e consultoria para cumprir NRs, reduzir riscos e proteger pessoas e resultados.",
                ctaText: "Fale conosco",
                ctaHref: "/contact",
                align: "left",
              },
              {
                image: `${basePath}/media/2.png`,
                title: "Treinamentos NR sob medida",
                description:
                  "Capacitações práticas, simulações e exercícios aplicáveis à realidade da sua operação.",
                ctaText: "Ver treinamentos",
                ctaHref: "/servicos",
                align: "center",
              },
              {
                image: `${basePath}/media/3.png`,
                title: "Assistência em Perícia",
                description:
                  "Atuação técnica em perícias judiciais, análises de nexo, elaboração e contestação de laudos com embasamento técnico.",
                ctaText: "Saiba mais",
                ctaHref: "/pericia",
                align: "right",
              },
            ]}
          />
        </section>
        <section className="relative lg:text-balance lg:text-center space-y-12 overflow-hidden rounded-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-6 sm:p-10">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="shadow-md rounded-full border-primary/30"
            >
              <Link href="/#treinamentos" className="relative">
                PrÃ³ximos treinamentos na HSE Franca &nbsp;
                <span className="font-semibold text-primary space-nowrap">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Saiba mais <span aria-hidden="true">â†’</span>
                </span>
              </Link>
            </Button>
            <h1 className="scroll-m-20 sm:text-6xl/18 font-bold tracking-tight">
              SeguranÃ§a do Trabalho (SST), PerÃ­cia e Treinamentos.
            </h1>
            <p className="text-lg">
              Atuamos com soluÃ§Ãµes completas em saÃºde e seguranÃ§a ocupacional:
              SST, perÃ­cias trabalhistas e previdenciÃ¡rias, programas legais,
              laudos, consultoria e treinamentos para conformidade e prevenÃ§Ã£o.
            </p>
            <div className="space-x-4">
              <Button className="shadow-md" asChild>
                <Link href="/contact">Fale conosco</Link>
              </Button>
              <Button variant="secondary" className="shadow-md" asChild>
                <Link href="/servicos">Nossos serviÃ§os</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/1.png`}
              alt="Equipe de SeguranÃ§a do Trabalho da HSE Franca"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-3 text-start">
                <CardTitle>SST e PGR</CardTitle>
                <CardDescription>
                  GestÃ£o de SeguranÃ§a do Trabalho, PGR, PCMSO (em interface
                  com o mÃ©dico), APR, inspeÃ§Ãµes e planos de aÃ§Ã£o para reduzir
                  riscos e atender Ã s NRs.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver serviÃ§o â†’
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-3 text-start">
                <CardTitle>PerÃ­cia</CardTitle>
                <CardDescription>
                  AssistÃªncia tÃ©cnica em perÃ­cias judiciais, elaboraÃ§Ã£o e
                  contestaÃ§Ã£o de laudos, anÃ¡lises de nexo e condiÃ§Ãµes de
                  trabalho.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver serviÃ§o â†’
                </CardAction>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-3 text-start">
                <CardTitle>Treinamentos NR</CardTitle>
                <CardDescription>
                  CapacitaÃ§Ãµes normativas (NRs), integraÃ§Ã£o, SIPAT e programas
                  sob medida para sua operaÃ§Ã£o.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  Ver treinamentos â†’
                </CardAction>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* <...> End Of Hero Section <...> */}
        <section className="">
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Receba novidades e datas de treinamentos.
              </h2>
              <p className="">Cadastre seu e-mail para ser avisado sobre novas turmas e conteÃºdos.</p>
              <div className="flex w-full max-w-sm lg:mx-auto items-center lg:justify-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-primary/30 shadow-sm"
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
              GestÃ£o de riscos e conformidade que geram resultados.
            </h3>
            <p className="text-lg/7 text-foreground">
              Implementamos prÃ¡ticas de SST alinhadas Ã s NRs, com foco em prevenÃ§Ã£o,
              melhoria contÃ­nua e seguranÃ§a operacional, apoiando pessoas e o negÃ³cio.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">ConheÃ§a nossos serviÃ§os &rarr;</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/2.png`}
              alt="IlustraÃ§Ã£o de seguranÃ§a do trabalho"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="lg:order-last flex flex-col justify-center items-start gap-4">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Treinamentos prÃ¡ticos e focados na realidade do campo.
            </h3>
            <p className="text-lg/7 text-foreground">
              CapacitaÃ§Ãµes com conteÃºdo aplicÃ¡vel, exercÃ­cios e simulaÃ§Ãµes para fixaÃ§Ã£o,
              garantindo equipes mais preparadas e ambientes mais seguros.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">Ver treinamentos &rarr;</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/3.png`}
              alt="Equipe em treinamento de seguranÃ§a"
              className="object-cover object-center rounded-xl"
            />
          </div>
        </section>
        {/* <...> End Of Call TO Action Section <...> */}
        {/* Differenciais */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
              Por que a HSE Franca?
            </h2>
            <p className="text-lg/7 text-foreground/80">
              Mais que documentos: entregamos diagnÃ³stico, plano de aÃ§Ã£o e suporte contÃ­nuo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Atendimento ponta a ponta</CardTitle>
                <CardDescription>
                  Da anÃ¡lise inicial Ã  implementaÃ§Ã£o e acompanhamento.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>VivÃªncia em campo</CardTitle>
                <CardDescription>
                  SoluÃ§Ãµes prÃ¡ticas e factÃ­veis para operaÃ§Ãµes reais.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Agilidade com qualidade</CardTitle>
                <CardDescription>
                  Prazos curtos, comunicaÃ§Ã£o clara e entregas consistentes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>RelatÃ³rios objetivos</CardTitle>
                <CardDescription>
                  Documentos que facilitam auditorias e decisÃµes de gestÃ£o.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Processo */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
              Como trabalhamos
            </h2>
            <p className="text-lg/7 text-foreground/80">
              Um fluxo simples para gerar resultados e conformidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["DiagnÃ³stico", "Plano", "ExecuÃ§Ã£o", "Acompanhamento"].map((etapa, idx) => (
              <Card
                key={etapa}
                className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5"
              >
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-primary/15 text-primary font-semibold">
                      {idx + 1}
                    </span>
                    <CardTitle className="!mb-0">{etapa}</CardTitle>
                  </div>
                  <CardDescription>
                    {idx === 0 && "Levantamento de riscos, documentos e rotinas."}
                    {idx === 1 && "DefiniÃ§Ã£o de aÃ§Ãµes, prazos e responsabilidades."}
                    {idx === 2 && "ImplementaÃ§Ã£o, treinamentos e evidÃªncias."}
                    {idx === 3 && "Indicadores, revisÃµes e melhoria contÃ­nua."}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
              DÃºvidas frequentes
            </h2>
            <p className="text-lg/7 text-foreground/80">
              Respostas rÃ¡pidas para as perguntas mais comuns.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "O que Ã© PGR e quem precisa?",
              "Quais treinamentos NR eu devo aplicar?",
              "Como funciona a assistÃªncia em perÃ­cias?",
              "VocÃªs atendem fora do EspÃ­rito Santo e SÃ£o Paulo?",
            ].map((q) => (
              <li key={q} className="group">
                <Link
                  href="/questions"
                  className="block rounded-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 p-5 shadow-md transition-colors hover:border-primary/30"
                >
                  <p className="font-medium">{q}</p>
                  <p className="text-sm text-foreground/70 mt-1">Saiba mais â†’</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="">
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Pronto para elevar a seguranÃ§a do seu negÃ³cio?
              </h2>
              <p className="">Fale com a HSE Franca: (27) 99518-6540 â€¢ comercial@hsefranca.com</p>
              <div className="flex items-center justify-center gap-4">
                <Button className="shadow-md" asChild>
                  <Link href="tel:5527995186540">Ligar agora</Link>
                </Button>
                <Button variant="secondary" className="shadow-md" asChild>
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





