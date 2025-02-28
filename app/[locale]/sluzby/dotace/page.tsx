import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import BlowerDoor from "@/components/ServicesPage/DotacePage/BlowerDoor";
import Details from "@/components/ServicesPage/DotacePage/Details";
import HowItWorks from "@/components/ServicesPage/DotacePage/HowItWorks";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Dotace() {
  const t = useTranslations("DotacePage");

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/34e8344d-a7c9-4444-946e-6f843c8a657c_dotace_hero.jpg"
      />
      <Details />
      <HowItWorks />
      <BlowerDoor />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DotacePage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
