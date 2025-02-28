import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import type { Params } from "../layout";
import ServiceInfo from "@/components/ServicesPage/ServiceInfo";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";

export default function Sluzby() {
  const t = useTranslations("SluzbyPage");

  return (
    <>
      <ScrollUp />
      <Container>
        <h1 className="my-10 text-zelena">{t("title")}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[280px] overflow-hidden lg:h-[480px]">
            <Image
              alt={t("strechy.image.alt")}
              priority
              fill={true}
              sizes="(min-width: 1024px) 640px, 100vw"
              quality={100}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/468ee74c-416f-4625-9d4a-359a92855562_strechy_sluzby.png"
            />
          </div>
          <div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
            <ServiceInfo
              alt={t("strechy.alt")}
              img="https://utfs.io/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
              heading={t("strechy.heading")}
              text={t("strechy.text")}
              href="/sluzby/zelene-strechy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
            <ServiceInfo
              alt={t("jezirka.alt")}
              img="https://utfs.io/f/aef3d419-ef2a-4ac9-964c-929929c89f9b-1v7wuv.png"
              heading={t("jezirka.heading")}
              text={t("jezirka.text")}
              href="/sluzby/jezirka"
            />
          </Reveal>
          <Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
            <Image
              alt={t("jezirka.image.alt")}
              fill={true}
              sizes="(min-width: 1024px) 640px, 100vw"
              quality={100}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/74f65524-a186-4419-b836-b48006c900f2_korenovky_sluzby.png"
            />
          </Reveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:h-[480px]">
            <Image
              alt={t("blower.image.alt")}
              fill={true}
              sizes="(min-width: 1024px) 640px, 100vw"
              quality={100}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/e2e498dc-f3cb-469c-9475-8a4806c97245_blowerdoor_sluzby.png"
            />
          </Reveal>
          <Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
            <ServiceInfo
              alt={t("blower.alt")}
              img="https://utfs.io/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
              heading={t("blower.heading")}
              text={t("blower.text")}
              href="/sluzby/blower-door-test"
            />
          </Reveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
            <ServiceInfo
              alt={t("termo.alt")}
              img="https://utfs.io/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
              heading={t("termo.heading")}
              text={t("termo.text")}
              href="/sluzby/termovize"
            />
          </Reveal>
          <Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
            <Image
              alt={t("termo.image.alt")}
              fill={true}
              sizes="(min-width: 1024px) 640px, 100vw"
              quality={100}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/2fc25db7-2ca1-4a22-a8d9-bed01b4a84b9_termovize_sluzby.png"
            />
          </Reveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal className="relative h-[280px] overflow-hidden lg:h-[480px]">
            <Image
              alt={t("dotace.image.alt")}
              fill={true}
              sizes="(min-width: 1024px) 640px, 100vw"
              quality={100}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/ec841236-3dfd-4ff0-85e8-1d27fcdfe034_dotace_sluzby.png"
            />
          </Reveal>
          <Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
            <ServiceInfo
              alt={t("dotace.alt")}
              img="https://utfs.io/f/8b8ac783-5332-40bc-8707-8f157dabc550_analytics.png"
              heading={t("dotace.heading")}
              text={t("dotace.text")}
              href="/sluzby/dotace"
            />
          </Reveal>
        </div>
      </Container>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SluzbyPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
