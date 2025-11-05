"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationTopLinks } from "@/lib/data";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavigationTop() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Card className="rounded-none border-none shadow-sm">
        <CardContent className="container mx-auto px-4">
          <nav className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Top row: logo + mobile toggle */}
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HSE Franca</span>
                <Image
                  src={`${basePath}/media/logo.png`}
                  alt="HSE Franca"
                  width={160}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                aria-controls="primary-navigation"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
            </div>

            {/* Navigation Links */}
            <ul
              id="primary-navigation"
              className={cn(
                "flex-col gap-2 lg:flex lg:flex-row lg:items-center lg:gap-1",
                open ? "flex" : "hidden"
              )}
            >
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
                      onClick={() => setOpen(false)}
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
