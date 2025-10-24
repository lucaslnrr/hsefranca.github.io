import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationTopLinks } from "@/lib/data";
import Image from "next/image";

export default function NavigationTop() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Card className="rounded-none border-none shadow-sm">
        <CardContent className="container mx-auto px-4">
          <nav className="flex flex-col items-start gap-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Logo */}
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HSE Franca</span>
              <Image src="/media/logo.png" alt="HSE Franca" width={150} height={30} />
            </Link>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
              {NavigationTopLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start lg:w-auto"
                  >
                    <Link
                      href={link.href}
                      className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none"
                    >
                      <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-primary transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </header>
  );
}
