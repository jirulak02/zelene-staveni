import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import Details from "@/components/ServicesPage/JezirkaPage/Details";
import OurServices from "@/components/ServicesPage/JezirkaPage/OurServices";
import Realization from "@/components/ServicesPage/JezirkaPage/Realization";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Jezirka() {
  const t = useTranslations("JezirkaPage");

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/e6420bff-af76-4c61-ac3e-3708b71d232e-dyfkmz.jpg"
      />
      <Details />
      <OurServices />
      <Realization />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "JezirkaPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
