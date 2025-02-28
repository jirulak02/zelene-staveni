import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import type { Params } from "../layout";
import ContactForm from "@/components/ContactPage/ContactForm";
import Employees from "@/components/ContactPage/Employees";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Kontakt() {
  const t = useTranslations("ContactPage");

  return (
    <>
      <ScrollUp />
      <Container>
        <h1 className="mb-6 mt-10 text-zelena md:mb-10">Kontakt</h1>
        <div className="mb-6 md:mb-10">
          <p>{t("address.company")}</p>
          <p>{t("address.address")}</p>
          <p>{t("address.ico")}</p>
          <p>{t("address.dic")}</p>
        </div>
        <Employees />
        <Reveal>
          <h2 className="mb-5 mt-10 text-zelena">{t("title2")}</h2>
        </Reveal>
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="h-80 rounded-3xl border-2 border-neutral-200 lg:h-full">
            <iframe
              width="100%"
              height="100%"
              className="rounded-3xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRVGxxwuJC0cRLZls-GrzDTI&zoom=15&key=${process.env.GOOGLE_API}`}
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
