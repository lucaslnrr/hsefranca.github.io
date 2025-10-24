"use client";
import { programs_info } from "@/lib/data";
import { CreateSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { basePath } from "@/lib/basePath";

interface ProgramsInfoInterface {
  id: number;
  title: string;
  description: string;
}

export default function ProgramsList() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <ul className="">
      {programs_info.map((data: ProgramsInfoInterface) => (
        <li key={data.id}>
          <Link
            href={`/programs/${CreateSlug(data.title)}`}
            className={`group transition-all rounded-xl border-2 border-primary-100 active:bg-primary-100 dark:border-primary-800 bg-primary-50 hover:border-primary-200 hover:bg-primary-50 dark:bg-primary-900 dark:hover:bg-primary-800 dark:active:bg-primary-700 ${
              hoveredCard && hoveredCard !== data.title ? "opacity-50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(data.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-full h-64 relative overflow-hidden">
              <Image
                fill
                src={`${basePath}/media/${(data.id % 12) + 1}.png`}
                alt={data.title}
                className="object-cover rounded-t-xl group-hover:contrast-125"
                priority={data.id === 1} // Only prioritize first image for performance
              />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-lg font-bold leading-none tracking-tight">
                {data.title}
              </p>
              <p className="text-sm leading-5 opacity-80 line-clamp-3">
                {data.description}
              </p>
              <button
                type="button"
                className="rounded-md bg-transparent pr-2.5 py-1 text-xs font-medium capitalize text-gray-900 group-hover:underline dark:text-white dark:opacity-70"
                aria-label={`Read more about ${data.title}`}
              >
                Read About The Program &rarr;
              </button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
