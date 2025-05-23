import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Plants() {
  const t = useTranslations("StrechyPage.Plants");
  const data = useTranslations("data.strechy");

  const keys = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const dataPlants = keys.map((key) => ({
    id: `strechy_plants_${key}`,
    alt: data(`plants.${key}.alt`),
    url: data(`plants.${key}.url`),
  }));

  return (
    <ContainerBezova>
      <div className="flex flex-col space-y-3 md:space-y-5">
        <div
          className="m-auto flex items-center justify-center rounded-full bg-neutral-100"
          style={{ width: "120px", height: "120px" }}
        >
          <Image
            alt={t("image.alt")}
            width={50}
            height={50}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
          />
        </div>
        <h3 className="text-center text-hneda">{t("title")}</h3>
        <Images data={dataPlants} width={200} height={150} />
      </div>
    </ContainerBezova>
  );
}
