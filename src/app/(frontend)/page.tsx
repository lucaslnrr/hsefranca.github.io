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
import { ShieldCheck, FileText, GraduationCap } from "lucide-react";
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
        <section className="relative lg:text-balance lg:text-center space-y-12 overflow-hidden rounded-3xl p-8 sm:p-14 isolate ring-1 ring-primary/20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
          <div className="space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="shadow-lg rounded-full border-primary/40 bg-white/60 backdrop-blur hover:bg-white/80"
            >
              <Link href="/#treinamentos" className="relative">
                Pr�ximos treinamentos na HSE Franca &nbsp;
                <span className="font-semibold text-primary space-nowrap">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Saiba mais <span aria-hidden="true">?</span>
                </span>
              </Link>
            </Button>
            <h1 className="scroll-m-20 text-5xl sm:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                Seguran�a do Trabalho (SST), Per�cia e Treinamentos.
              </span>
            </h1>
            <p className="text-lg">
              Atuamos com solu��es completas em sa�de e seguran�a ocupacional:
              SST, per�cias trabalhistas e previdenci�rias, programas legais,
              laudos, consultoria e treinamentos para conformidade e preven��o.
            </p>
            <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 text-foreground/90">
              <li className="flex items-center justify-center sm:justify-start gap-2"><span className="text-primary">?</span><span>Planos sob medida</span></li>
              <li className="flex items-center justify-center sm:justify-start gap-2"><span className="text-primary">?</span><span>Atendimento presencial e remoto</span></li>
              <li className="flex items-center justify-center sm:justify-start gap-2"><span className="text-primary">?</span><span>Equipe t�cnica certificada</span></li>
            </ul>
            <div className="space-x-4">
              <Button className="shadow-lg" size="lg" asChild>
                <Link href="/contact">Fale conosco</Link>
              </Button>
              <Button variant="secondary" className="shadow-lg" size="lg" asChild>
                <Link href="/servicos">Nossos servi�os</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/1.png`}
              alt="Equipe de Seguran�a do Trabalho da HSE Franca"
              className="object-cover object-center rounded-xl"
            />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative group rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ring-1 ring-transparent group-hover:ring-primary/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-primary/60 opacity-70 group-hover:opacity-100" />
              <CardContent className="space-y-3 text-start">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary p-2 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30 transition-colors">
                  <ShieldCheck className="size-5" />
                </div>
                <CardTitle>SST e PGR</CardTitle>
                <CardDescription>
                  Gestão de Segurança do Trabalho, PGR, PCMSO (em interface
                  com o médico), APR, inspeções e planos de ação para reduzir
                  riscos e atender às NRs.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  <span className="text-primary">Ver serviço →</span>
                </CardAction>
              </CardContent>
            </Card>
            <Card className="relative group rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ring-1 ring-transparent group-hover:ring-primary/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-primary/60 opacity-70 group-hover:opacity-100" />
              <CardContent className="space-y-3 text-start">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary p-2 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30 transition-colors">
                  <FileText className="size-5" />
                </div>
                <CardTitle>Perícia</CardTitle>
                <CardDescription>
                  Assistência técnica em perícias judiciais, elaboração e
                  contestação de laudos, análises de nexo e condições de
                  trabalho.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  <span className="text-primary">Ver serviço →</span>
                </CardAction>
              </CardContent>
            </Card>
            <Card className="relative group rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ring-1 ring-transparent group-hover:ring-primary/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-primary/60 opacity-70 group-hover:opacity-100" />
              <CardContent className="space-y-3 text-start">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary p-2 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30 transition-colors">
                  <GraduationCap className="size-5" />
                </div>
                <CardTitle>Treinamentos NR</CardTitle>
                <CardDescription>
                  Capacitações normativas (NRs), integração, SIPAT e programas
                  sob medida para sua operação.
                </CardDescription>
                <CardAction className="text-xs text-muted-foreground">
                  <span className="text-primary">Ver treinamentos →</span>
                </CardAction>
              </CardContent>
            </Card>
          </div>
          </div>
          </div>
        </section>
        {/* <...> End Of Hero Section <...> */}
        <section className="">
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Receba novidades e datas de treinamentos.
              </h2>
              <p className="">Cadastre seu e-mail para ser avisado sobre novas turmas e conte�dos.</p>
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
              Gest�o de riscos e conformidade que geram resultados.
            </h3>
            <p className="text-lg/7 text-foreground">
              Implementamos pr�ticas de SST alinhadas �s NRs, com foco em preven��o,
              melhoria cont�nua e seguran�a operacional, apoiando pessoas e o neg�cio.
            </p>
            <Button variant="link" className="pl-0" asChild>
              <Link href="/servicos">Conhe�a Nossos servi�os ?</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image
              fill
              src={`${basePath}/media/2.png`}
              alt="Ilustra��o de seguran�a do trabalho"
              className="object-cover object-center rounded-xl"
            />
          </div>
          <div className="lg:order-last flex flex-col justify-center items-start gap-4">
            <h3 className="scroll-m-20 dark:text-primary-100 text-3xl font-bold tracking-wide transition-colors first:mt-0">
              Treinamentos pr�ticos e focados na realidade do campo.
            </h3>
            <p className="text-lg/7 text-foreground">
              Capacita��es com conte�do aplic�vel, exerc�cios e simula��es para fixa��o,
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
              alt="Equipe em treinamento de seguran�a"
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
              Mais que documentos: entregamos diagn�stico, plano de a��o e suporte cont�nuo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <CardContent className="space-y-2">
                <CardTitle>Atendimento ponta a ponta</CardTitle>
                <CardDescription>
                  Da an�lise inicial � implementa��o e acompanhamento.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <CardContent className="space-y-2">
                <CardTitle>Viv�ncia em campo</CardTitle>
                <CardDescription>
                  Solu��es pr�ticas e fact�veis para opera��es reais.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <CardContent className="space-y-2">
                <CardTitle>Agilidade com qualidade</CardTitle>
                <CardDescription>
                  Prazos curtos, comunica��o clara e entregas consistentes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <CardContent className="space-y-2">
                <CardTitle>Relat�rios objetivos</CardTitle>
                <CardDescription>
                  Documentos que facilitam auditorias e decis�es de gest�o.
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
            {["Diagn�stico", "Plano", "Execu��o", "Acompanhamento"].map((etapa, idx) => (
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
                    {idx === 1 && "Defini��o de a��es, prazos e responsabilidades."}
                    {idx === 2 && "Implementa��o, treinamentos e evid�ncias."}
                    {idx === 3 && "Indicadores, revis�es e melhoria cont�nua."}
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
              D�vidas frequentes
            </h2>
            <p className="text-lg/7 text-foreground/80">
              Respostas r�pidas para as perguntas mais comuns.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "O que � PGR e quem precisa?",
              "Quais treinamentos NR eu devo aplicar?",
              "Como funciona a assist�ncia em per�cias?",
              "Voc�s atendem fora do Esp�rito Santo e S�o Paulo?",
            ].map((q) => (
              <li key={q} className="group">
                <Link
                  href="/questions"
                  className="block rounded-lg border border-primary/10 bg-gradient-to-b from-background to-primary/5 p-5 shadow-md transition-colors hover:border-primary/30"
                >
                  <p className="font-medium">{q}</p>
                  <p className="text-sm text-foreground/70 mt-1">Saiba mais ?</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="">
          <Card className="text-center border-none shadow-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <CardContent className="space-y-4 relative px-6 py-24 overflow-hidden bg-theme isolate sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="max-w-2xl mx-auto scroll-m-20 text-3xl font-extrabold capitalize text-center tracking-normal ">
                Pronto para elevar a seguran�a do seu neg�cio?
              </h2>
              <p className="">Fale com a HSE Franca: (27) 99518-6540 . comercial@hsefranca.com</p>
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











