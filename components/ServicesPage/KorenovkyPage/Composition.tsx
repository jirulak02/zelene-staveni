import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Composition() {
  const t = useTranslations("KorenovkyPage.Composition");
  const data = useTranslations("data.korenovky");

  const keys = Array.from({ length: 5 }, (_, i) => (i + 1).toString());
  const dataComposition = keys.map((key) => ({
    id: `korenovky_composition_${key}`,
    name: data(`composition.${key}.name`),
    description: data(`composition.${key}.description`),
    url: data(`composition.${key}.url`),
  }));

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena md:mb-10">{t("title")}</h2>
      {dataComposition.map((item) => (
        <div key={item.id} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-2">
          <div className="space-y-2 md:space-y-5">
            <h3 className="text-hneda">{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <Image
            style={{ width: "300px" }}
            className="m-auto"
            alt={t("image.alt")}
            width={300}
            height={225}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src={item.url}
          />
        </div>
      ))}
    </ContainerBila>
  );
}
