"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Slide = {
  image: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  align?: "left" | "center" | "right";
};

export default function BannerCarousel({
  slides,
  interval = 5000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = slides.length;

  React.useEffect(() => {
    if (!count) return;
    const id = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval, paused]);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + count) % count);

  return (
    <div
      className="relative w-full aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${count * 100}%` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative h-full min-w-full shrink-0">
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div
              className={
                "absolute inset-0 z-10 flex items-end p-6 sm:p-10" +
                (s.align === "center"
                  ? " justify-center text-center"
                  : s.align === "right"
                  ? " justify-end text-right"
                  : " justify-start text-left")
              }
            >
              <div className="max-w-2xl space-y-4 text-white drop-shadow">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  {s.title}
                </h2>
                {s.description ? (
                  <p className="text-base sm:text-lg text-white/90">{s.description}</p>
                ) : null}
                {s.ctaText && s.ctaHref ? (
                  <div>
                    <Button asChild size="lg" className="shadow-md">
                      <Link href={s.ctaHref}>{s.ctaText}</Link>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-3 sm:px-4">
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="pointer-events-auto bg-white/80 backdrop-blur hover:bg-white"
          aria-label="Slide anterior"
          onClick={() => go(-1)}
        >
          ‹
        </Button>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="pointer-events-auto bg-white/80 backdrop-blur hover:bg-white"
          aria-label="Próximo slide"
          onClick={() => go(1)}
        >
          ›
        </Button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para slide ${i + 1}`}
            className={
              "h-2 w-2 rounded-full transition-all " +
              (i === index ? "bg-white" : "bg-white/50 hover:bg-white/80")
            }
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
