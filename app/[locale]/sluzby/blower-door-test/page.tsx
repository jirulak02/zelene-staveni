import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../../layout";
import Detection from "@/components/ServicesPage/BlowerPage/Detection";
import Explanation from "@/components/ServicesPage/BlowerPage/Explanation";
import Pricing from "@/components/ServicesPage/BlowerPage/Pricing";
import Showcase from "@/components/ServicesPage/BlowerPage/Showcase";
import WeNeed from "@/components/ServicesPage/BlowerPage/WeNeed";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import ScrollUp from "@/components/layout/ScrollUp";

export default function BlowerDoor() {
  const t = useTranslations("BlowerPage");

  return (
    <>
      <ScrollUp />
      <ServicesImage
        name={t("title")}
        url="https://utfs.io/f/609a5541-f36b-492c-9f60-1f9db2b3cce7_blowerdoor_hero.jpg"
      />
      <Explanation />
      <WeNeed />
      <Showcase />
      <Detection />
      <Pricing />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlowerPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
