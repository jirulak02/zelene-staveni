import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "../layout/Container";
import InfoCard from "./InfoCard";

export default function Hero() {
  const t = useTranslations("HomePage.Hero");

  return (
    <div className="-mt-image pb-12">
      <div className="relative h-[400px] md:h-[700px]">
        <div className="relative h-[400px] overflow-hidden md:h-[700px]">
          <Image
            src="https://utfs.io/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
            alt={t("image.alt")}
            fill={true}
            quality={100}
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-shadow text-neutral-100">
          <h1 className="md:text-7xl">{t("title1")}</h1>
          <h1 className="md:text-7xl">{t("title2")}</h1>
          <h3 className="mt-3 font-normal">{t("subtitle")}</h3>
        </div>
      </div>
      <Container className="relative z-10 -mt-16 md:-mt-24">
        <Image
          style={{ width: "1280px" }}
          alt={t("grassImage.alt")}
          width={1280}
          height={18}
          priority
          src="https://utfs.io/f/9f519bb7-eb54-4d37-b958-b7da531941df_grass.png"
        />
        <div className="-mt-1 grid grid-cols-1 bg-neutral-100 shadow-lg shadow-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            className="border-b-2 border-neutral-300 sm:border-r-2 lg:border-b-0"
            alt={t("services.strechy.alt")}
            img="https://utfs.io/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
            heading={t("services.strechy.heading")}
            text={t("services.strechy.text")}
            href="/sluzby/zelene-strechy"
          />
          <InfoCard
            className="border-b-2 border-neutral-300 lg:border-b-0 lg:border-r-2"
            alt={t("services.jezirka.alt")}
            img="https://utfs.io/f/aef3d419-ef2a-4ac9-964c-929929c89f9b-1v7wuv.png"
            heading={t("services.jezirka.heading")}
            text={t("services.jezirka.text")}
            href="/sluzby/jezirka"
          />
          <InfoCard
            className="border-b-2 border-neutral-300 sm:border-r-2 lg:border-b-0"
            alt={t("services.blower.alt")}
            img="https://utfs.io/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
            heading={t("services.blower.heading")}
            text={t("services.blower.text")}
            href="/sluzby/blower-door-test"
          />
          <InfoCard
            alt={t("services.termovize.alt")}
            img="https://utfs.io/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
            heading={t("services.termovize.heading")}
            text={t("services.termovize.text")}
            href="/sluzby/termovize"
          />
        </div>
      </Container>
    </div>
  );
}
