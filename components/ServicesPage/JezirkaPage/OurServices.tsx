import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function OurServices() {
  const t = useTranslations("JezirkaPage.OurServices");
  const data = useTranslations("data.jezirka");

  const keys = Array.from({ length: 3 }, (_, i) => (i + 1).toString());
  const dataDetails = keys.map((key) => ({
    id: `jezirka_details_${key}`,
    name: data(`details.${key}.name`),
    url: data(`details.${key}.url`),
  }));

  return (
    <ContainerBezova>
      <h3 className="text-center text-hneda">{t("title")}</h3>
      <div className="grid grid-cols-auto">
        {dataDetails.map((item) => (
          <div
            key={item.id}
            className="my-4 flex flex-col items-center space-y-4 text-center md:my-10 md:space-y-8"
          >
            <Image
              style={{ width: "50px" }}
              alt={t("image.alt")}
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src={item.url}
            />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </ContainerBezova>
  );
}
