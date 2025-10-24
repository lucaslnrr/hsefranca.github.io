import NavigationBottom from "@/components/NavigationBottom";
import NavigationTop from "@/components/NavigationTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSE Franca — Segurança do Trabalho (SST)",
  description:
    "SST, Perícia, serviços e treinamentos para sua empresa. Atuação completa em saúde e segurança ocupacional com foco em conformidade e prevenção.",
};

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationTop />
      {children}
      <NavigationBottom />
    </>
  );
}
