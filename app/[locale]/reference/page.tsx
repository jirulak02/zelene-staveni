import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../layout";
import Container from "@/components/layout/Container";
import ContainerBezova from "@/components/layout/ContainerBezova";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";
import ScrollButton from "@/components/ui/ScrollButton";

export default function Reference() {
  const t = useTranslations("ReferencePage");
  const data = useTranslations("data.reference");

  const keysStrechy = Array.from({ length: 41 }, (_, i) => (i + 1).toString());
  const dataStrechy = keysStrechy.map((key) => ({
    id: `reference_strechy_${key}`,
    name: data(`strechy.${key}.name`),
    alt: data(`strechy.${key}.alt`),
    url: data(`strechy.${key}.url`),
  }));
  const keysJezirka = Array.from({ length: 7 }, (_, i) => (i + 1).toString());
  const dataJezirka = keysJezirka.map((key) => ({
    id: `reference_jezirka_${key}`,
    alt: data(`jezirka.${key}.alt`),
    url: data(`jezirka.${key}.url`),
  }));
  const keysBlower = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const dataBlower = keysBlower.map((key) => ({
    id: `reference_blower_${key}`,
    alt: data(`blower.${key}.alt`),
    url: data(`blower.${key}.url`),
  }));
  const keysTermovize = Array.from({ length: 14 }, (_, i) => (i + 1).toString());
  const dataTermovize = keysTermovize.map((key) => ({
    id: `reference_termovize_${key}`,
    alt: data(`termovize.${key}.alt`),
    url: data(`termovize.${key}.url`),
  }));

  return (
    <>
      <Container>
        <h1 className="mb-6 mt-10 text-zelena md:mb-10">{t("title")}</h1>
        <p>{t("text")}</p>
        <div className="mb-10 mt-4 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-4">
          <ScrollButton id="galerie-zelene-strechy">{t("buttons.strechy")}</ScrollButton>
          <ScrollButton id="galerie-jezirka">{t("buttons.jezirka")}</ScrollButton>
          <ScrollButton id="galerie-blower-door-test">{t("buttons.blower")}</ScrollButton>
          <ScrollButton id="galerie-termovize">{t("buttons.termovize")}</ScrollButton>
        </div>
      </Container>
      <ContainerBezova>
        <h2 id="galerie-zelene-strechy" className="pb-6 text-center text-zelena md:pb-10">
          {t("gallery.strechy.title")}
        </h2>
        <Images data={dataStrechy} width={200} height={150} />
      </ContainerBezova>
      <ContainerBila>
        <h2 id="galerie-jezirka" className="pb-6 text-center text-zelena md:pb-10">
          {t("gallery.jezirka.title")}
        </h2>
        <Images data={dataJezirka} width={200} height={150} />
      </ContainerBila>
      <ContainerBezova>
        <h2 id="galerie-blower-door-test" className="pb-6 text-center text-zelena md:pb-10">
          {t("gallery.blower.title")}
        </h2>
        <Images data={dataBlower} width={200} height={250} />
      </ContainerBezova>
      <ContainerBila>
        <h2 id="galerie-termovize" className="pb-6 text-center text-zelena md:pb-10">
          {t("gallery.termovize.title")}
        </h2>
        <Images data={dataTermovize} width={200} height={140} />
      </ContainerBila>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ReferencePage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
