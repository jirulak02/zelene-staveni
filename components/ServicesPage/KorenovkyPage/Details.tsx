import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Details() {
  const t = useTranslations("KorenovkyPage.Details");
  const data = useTranslations("data.korenovky");

  const keys = Array.from({ length: 4 }, (_, i) => (i + 1).toString());
  const dataDetails = keys.map((key) => ({
    id: `korenovky_details_${key}`,
    name: data(`details.${key}.name`),
    url: data(`details.${key}.url`),
  }));

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">{t("title")}</h2>
      <div className="m-auto mt-6 max-w-xl space-y-4 md:mt-10">
        <p>{t("text1")}</p>
        <p>{t("text2")}</p>
        <p>{t("text3")}</p>
      </div>
      <h3 className="mt-12 text-center text-hneda">{t("title2")}</h3>
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
    </ContainerBila>
  );
}
