import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationBottomLinks } from "@/lib/data";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

export default function NavigationBottom() {
  return (
    <footer>
      <Card className="bg-primary/20 dark:bg-card rounded-b-none shadow-none border-none">
        <CardContent className="container mx-auto lg:px-0 py-8 lg:py-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              {/* Logo */}
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HSE Franca</span>
                <Image
                  src={`${basePath}/media/logo.png`}
                  alt="HSE Franca"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                />
              </Link>
              <p className="text-sm/6 text-balance text-foreground">
                Soluções em Segurança do Trabalho (SST), Perícia e Treinamentos
                para sua empresa.
              </p>
              <div className="flex gap-x-6">
                {NavigationBottomLinks.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/50"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Soluções
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 leading-none font-semibold">
                    Suporte
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {NavigationBottomLinks.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-10 border-t border-foreground/10 pt-3 sm:pt-4">
            <p className="text-sm text-foreground">
              &copy; {new Date().getFullYear()} HSE Franca. Todos os direitos
              reservados.
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}

