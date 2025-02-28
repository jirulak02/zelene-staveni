import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import Composition from "@/components/ServicesPage/KorenovkyPage/Composition";
import Details from "@/components/ServicesPage/KorenovkyPage/Details";
import Realization from "@/components/ServicesPage/KorenovkyPage/Realization";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Korenovky() {
  const t = useTranslations("KorenovkyPage");

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/adeba4cf-aea7-4929-96f3-1d0fc91ba9b5_korenovky_hero.jpg"
      />
      <Details />
      <Realization />
      <Composition />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "KorenovkyPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
