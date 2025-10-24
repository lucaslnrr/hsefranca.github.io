import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <main className="container p-4 mx-auto my-16 space-y-16">
        {/* Contact Info */}
        <section className="rounded-lg bg-primary/10 p-4 sm:p-6">
          <p className="text-sm text-foreground/80">HSE Franca</p>
          <h2 className="text-xl font-semibold">Entre em contato</h2>
          <ul className="mt-2 text-sm">
            <li>
              Telefone: <a className="underline" href="tel:5527995186540">(27) 99518-6540</a>
            </li>
            <li>
              E-mail: <a className="underline" href="mailto:comercial@hsefranca.com">comercial@hsefranca.com</a>
            </li>
          </ul>
        </section>
        {/* Support Center Section */}
        <section>
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-2">
            <p className="text-base font-semibold leading-7 text-primary capitalize">
              Fale com a HSE Franca
            </p>
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight capitalize">
              Suporte e contato
            </h1>
            <p className="text-lg max-w-[120ch] text-balance">
              Envie sua mensagem para orçamentos, dúvidas ou agendar uma visita técnica.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <Label
                  htmlFor="first-name"
                  className="text-sm font-semibold capitalize"
                >
                  Nome
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <Label
                  htmlFor="last-name"
                  className="text-sm font-semibold capitalize"
                >
                  Sobrenome
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-semibold capitalize"
                >
                  Empresa
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold capitalize"
                >
                  E-mail
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="phone-number"
                  className="text-sm font-semibold capitalize"
                >
                  Telefone
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="shadow-none border-foreground/65"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold capitalize"
                >
                  Mensagem
                </Label>
                <div className="mt-2.5">
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Digite sua mensagem"
                    className="shadow-none border-foreground/65"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* Privacy Policy Switch */}
              {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex items-center h-6">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-indigo-600" : "bg-gray-200",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="body-small">
                  By selecting this, you agree to our{" "}
                  <a
                    href="#"
                    className="font-semibold text-gray-950 dark:text-yellow-600"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group> */}
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <Button type="submit" className="w-40">
                Enviar mensagem
              </Button>
            </div>
          </form>
        </section>

        {/* Offices Section */}
        <section>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 capitalize">
              Onde estamos
            </h2>
            <p className="mt-3 body-large">
              Atendemos empresas em todo o Brasil com soluções presenciais e remotas.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Los Angeles */}
            <div>
              <h3 className="pl-6 font-semibold">Franca - SP</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>Atendimento regional e remoto</p>
                <p>Brasil</p>
              </address>
            </div>

            {/* New York */}
            <div>
              <h3 className="pl-6 font-semibold">Vitória - ES</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>Atendimento remoto</p>
                <p>Brasil</p>
              </address>
            </div>

            {/* Toronto */}
            <div>
              <h3 className="pl-6 font-semibold">Belo Horizonte - MG</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>Atendimento remoto</p>
                <p>Brasil</p>
              </address>
            </div>

            {/* London */}
            <div>
              <h3 className="pl-6 font-semibold">São Paulo - SP</h3>
              <address className="pt-2 pl-6 not-italic border-l border-primary/50">
                <p>Atendimento remoto</p>
                <p>Brasil</p>
              </address>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
