import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "./layout";
import Achievments from "@/components/HomePage/Achievments";
import Hero from "@/components/HomePage/Hero";
import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Home() {
  const t = useTranslations("HomePage");
  const data = useTranslations("data.home");

  const keys = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  const dataStrechy = keys.map((key) => ({
    id: `home_strechy_${key}`,
    name: data(`strechy.${key}.name`),
    alt: data(`strechy.${key}.alt`),
    url: data(`strechy.${key}.url`),
  }));

  return (
    <>
      <ScrollUp />
      <Hero />
      <Achievments />
      <Showcase title={t("Showcase.title")} data={dataStrechy} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
