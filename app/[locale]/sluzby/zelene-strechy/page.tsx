import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import Showcase from "@/components/HomePage/Showcase";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Composition from "@/components/ServicesPage/StrechyPage/Composition";
import Considerations from "@/components/ServicesPage/StrechyPage/Considerations";
import Grants from "@/components/ServicesPage/StrechyPage/Grants";
import OurServices from "@/components/ServicesPage/StrechyPage/OurServices";
import Plants from "@/components/ServicesPage/StrechyPage/Plants";
import Types from "@/components/ServicesPage/StrechyPage/Types";
import Weather from "@/components/ServicesPage/StrechyPage/Weather";
import ScrollUp from "@/components/layout/ScrollUp";

export default function ZeleneStrechy() {
  const t = useTranslations("StrechyPage");
  const data = useTranslations("data.strechy");

  const keys = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const dataRoofs = keys.map((key) => ({
    id: `strechy_roofs_${key}`,
    name: data(`roofs.${key}.name`),
    alt: data(`roofs.${key}.alt`),
    url: data(`roofs.${key}.url`),
  }));

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
      />
      <Considerations />
      <Composition />
      <OurServices />
      <Weather />
      <Types />
      <Showcase title={t("Showcase.title")} data={dataRoofs} />
      <Plants />
      <Grants />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StrechyPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
