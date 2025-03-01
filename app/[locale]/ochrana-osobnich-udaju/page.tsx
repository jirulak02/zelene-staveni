import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../layout";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";

export default function ZasadyOsobnichUdaju() {
  const t = useTranslations("ZasadyOsobnichUdajuPage");

  return (
    <>
      <ScrollUp />
      <Container>
        <div className="mb-10 flex flex-col space-y-10">
          <h1 className="mt-10 text-zelena">{t("title")}</h1>
          <div>
            <p>{t("1.text1")}</p>
            <p>{t("1.text2")}</p>
            <p>{t("1.text3")}</p>
            <p>{t("1.text4")}</p>
            <p>{t("1.text5")}</p>
            <p>{t("1.text6")}</p>
            <p>{t("1.text7")}</p>
          </div>
          <div className="space-y-4">
            <p>{t("2.text1")}</p>
            <p>{t("2.text2")}</p>
          </div>
          <div>
            <p>{t("3.text1")}</p>
            <p>{t("3.text2")}</p>
            <p>{t("3.text3")}</p>
            <p>{t("3.text4")}</p>
            <p>{t("3.text5")}</p>
            <p>{t("3.text6")}</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ZasadyOsobnichUdajuPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
