import React from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/basePath";

type Servico = {
  id: number;
  titulo: string;
  descricao: string;
};

const servicos: Servico[] = [
  {
    id: 1,
    titulo: "SST e PGR",
    descricao:
      "Gestão de Segurança do Trabalho, PGR, interface com PCMSO, APR, inspeções e planos de ação para reduzir riscos e atender às NRs.",
  },
  {
    id: 2,
    titulo: "Perícia",
    descricao:
      "Assistência técnica em perícias judiciais, quesitos, pareceres, contestação de laudos e análises de nexo.",
  },
  {
    id: 3,
    titulo: "Treinamentos NR",
    descricao:
      "Capacitações normativas, integração, SIPAT e programas sob medida para sua operação.",
  },
  {
    id: 4,
    titulo: "Laudos e LTCAT",
    descricao:
      "Elaboração de laudos técnicos, avaliações ambientais e LTCAT conforme legislação vigente.",
  },
  {
    id: 5,
    titulo: "Ergonomia",
    descricao:
      "Análises ergonômicas do trabalho (AET) e planos de melhoria alinhados às melhores práticas.",
  },
  {
    id: 6,
    titulo: "Consultoria",
    descricao:
      "Apoio contínuo em conformidade legal, auditorias internas e cultura de prevenção.",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen lg:container lg:mx-auto lg:py-24 p-4 py-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Serviços</h1>
        <p className="text-lg max-w-[100ch] text-balance">
          Soluções completas em Segurança do Trabalho (SST) e saúde ocupacional:
          PGR, interface com PCMSO, avaliações, laudos, treinamentos e
          consultoria para conformidade e prevenção.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {servicos.map((s) => (
          <div
            key={s.id}
            className="relative group isolate overflow-hidden rounded-lg bg-primary/15 hover:bg-primary/20 transition-all"
          >
            <div className="px-4 py-5 sm:p-6 flex items-start flex-col gap-3">
              <div className="w-full h-48 relative">
                <Image
                  fill
                  src={`${basePath}/media/${s.id + 1}.png`}
                  alt={s.titulo}
                  className="object-cover object-top rounded-xl"
                />
              </div>
              <h2 className="capitalize text-xl font-bold tracking-[0.01rem]">
                <Link href="#" className="group-hover:underline">
                  {s.titulo}
                  <span className="absolute inset-0"></span>
                </Link>
              </h2>
              <p className="line-clamp-4 text-base/[1.25] tracking-wide">
                {s.descricao}
              </p>
              <button className="rounded-sm block py-1 text-xs font-semibold text-sky-800 ">
                Solicitar orçamento &rarr;
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
