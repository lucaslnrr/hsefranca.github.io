"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/servicos");
  }, [router]);
  return (
    <main className="container mx-auto my-24">
      <p>Redirecionando para Serviços…</p>
      <p>
        Se não for redirecionado automaticamente, <Link href="/servicos">clique aqui</Link>.
      </p>
    </main>
  );
}
