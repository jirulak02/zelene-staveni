import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Findings from "@/components/ServicesPage/TermovizePage/Findings";
import HeatLoss from "@/components/ServicesPage/TermovizePage/HeatLoss";
import Pricing from "@/components/ServicesPage/TermovizePage/Pricing";
import Showcase from "@/components/ServicesPage/TermovizePage/Showcase";
import WhenToMeasure from "@/components/ServicesPage/TermovizePage/WhenToMeasure";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Termovize() {
  const t = useTranslations("TermovizePage");

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/49406b25-42ad-40bc-9177-48716c0c5bd2_termovize_hero.jpeg"
      />
      <HeatLoss />
      <WhenToMeasure />
      <Findings />
      <Showcase />
      <Pricing />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermovizePage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
