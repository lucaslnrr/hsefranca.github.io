﻿import React from "react";
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
              <Button className="shadow-md" asChild>
                <Link href="/contact">Fale conosco</Link>
              </Button>
              <Button variant="secondary" className="shadow-md" asChild>
                <Link href="/servicos">Nossos serviços</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/1.png`}
              alt="Equipe de Segurança do Trabalho da HSE Franca"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
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
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
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
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
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
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Receba novidades e datas de treinamentos.
              </h2>
              <p className="">Cadastre seu e-mail para ser avisado sobre novas turmas e conteúdos.</p>
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
              Gestão de riscos e conformidade que geram resultados.
            </h3>
            <p className="text-lg/7 text-foreground">
              Implementamos práticas de SST alinhadas às NRs, com foco em prevenção,
              melhoria contínua e segurança operacional, apoiando pessoas e o negócio.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">Conheça nossos serviços →</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
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
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/3.png`}
              alt="Equipe em treinamento de segurança"
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
              Mais que documentos: entregamos diagnóstico, plano de ação e suporte contínuo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Atendimento ponta a ponta</CardTitle>
                <CardDescription>
                  Da análise inicial à implementação e acompanhamento.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Vivência em campo</CardTitle>
                <CardDescription>
                  Soluções práticas e factíveis para operações reais.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Agilidade com qualidade</CardTitle>
                <CardDescription>
                  Prazos curtos, comunicação clara e entregas consistentes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5">
              <CardContent className="space-y-2">
                <CardTitle>Relatórios objetivos</CardTitle>
                <CardDescription>
                  Documentos que facilitam auditorias e decisões de gestão.
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
            {["Diagnóstico", "Plano", "Execução", "Acompanhamento"].map((etapa, idx) => (
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
                    {idx === 1 && "Definição de ações, prazos e responsabilidades."}
                    {idx === 2 && "Implementação, treinamentos e evidências."}
                    {idx === 3 && "Indicadores, revisões e melhoria contínua."}
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
              Dúvidas frequentes
            </h2>
            <p className="text-lg/7 text-foreground/80">
              Respostas rápidas para as perguntas mais comuns.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "O que é PGR e quem precisa?",
              "Quais treinamentos NR eu devo aplicar?",
              "Como funciona a assistência em perícias?",
              "Vocês atendem fora do Espírito Santo e São Paulo?",
            ].map((q) => (
              <li key={q} className="group">
                <Link
                  href="/questions"
                  className="block rounded-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 p-5 shadow-md transition-colors hover:border-primary/30"
                >
                  <p className="font-medium">{q}</p>
                  <p className="text-sm text-foreground/70 mt-1">Saiba mais →</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="">
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Pronto para elevar a segurança do seu negócio?
              </h2>
              <p className="">Fale com a HSE Franca: (27) 99518-6540 • comercial@hsefranca.com</p>
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





