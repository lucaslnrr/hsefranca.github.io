import React from "react";
import Image from "next/image";
import { CompanyValues } from "@/lib/data";
import { basePath } from "@/lib/basePath";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh my-24 space-y-32">
      <section className="">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h2 className="scroll-m-20 font-semibold tracking-tight text-5xl capitalize">
            Nossa missão
          </h2>
          <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-3xl text-balance lg:flex-auto space-y-8">
              <p className="text-xl">
                Promover ambientes de trabalho mais seguros, saudáveis e
                produtivos, por meio de soluções completas em Segurança do
                Trabalho (SST), perícia e treinamentos.
              </p>
              <p className="text-foreground/70">
                Atuamos com proximidade ao cliente, entendimento do negócio e
                aplicação prática das NRs, unindo prevenção, conformidade e
                melhoria contínua.
              </p>
              <p className="text-foreground/70">
                Nossa equipe reúne experiência técnica e didática para
                transformar requisitos legais em rotinas simples e eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*
       * End of Mission Section
       */}
      <section className="aspect-[5/2] w-full relative">
        <Image
          fill
          quality={70}
          src={`${basePath}/media/4.png`}
          alt="Equipe da HSE Franca em atividade de campo"
          className="object-cover object-center "
        />
      </section>
      {/*
       * End of Company Media Section
       */}
      <section className="">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight capitalize first:pt-0 text-foreground">
            Nossos valores
          </h2>
          <p className="mt-2 text-foreground text-base/6">
            Ética, transparência, responsabilidade e foco em resultados para a
            segurança das pessoas e sustentabilidade do negócio.
          </p>
        </div>
        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {CompanyValues.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold capitalize text-base text-foreground">
                {value.name}
              </dt>
              <dd className="mt-1 prose-sm text-foreground/60">
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      {/*
       * End of Values Section
       */}
      <section className="py-24 bg-primary/20 dark:bg-card sm:py-32 rounded-2xl">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure className="flex flex-col justify-between flex-auto mt-10">
                <blockquote className="prose dark:text-slate-300">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center mt-10 gap-x-6">
                  <div className="relative h-14 w-14">
                    <Image
                      fill
                      className="rounded-full "
                      src={`${basePath}/media/5.png`}
                      alt="Cliente da HSE Franca"
                    />
                  </div>
                  <div className="text-base/6">
                    <div className="font-semibold">Judith Black</div>
                    <div>CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col pt-10 border-t border-gray-900/10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure className="flex flex-col justify-between flex-auto mt-10">
                <blockquote className="prose dark:text-slate-300">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center mt-10 gap-x-6">
                  <div className="relative h-14 w-14">
                    <Image
                      fill
                      className="rounded-full bg-gray-50"
                      src={`${basePath}/media/6.png`}
                      alt="Cliente da HSE Franca"
                    />
                  </div>
                  <div className="text-base/6">
                    <div className="font-semibold ">Joseph Rodriguez</div>
                    <div>CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/*
       * End of Testimonal Section
       */}
    </main>
  );
}
