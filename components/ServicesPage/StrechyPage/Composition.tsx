import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Composition() {
  const t = useTranslations("StrechyPage.Composition");
  const data = useTranslations("data.strechy");

  const keys = Array.from({ length: 8 }, (_, i) => (i + 1).toString());
  const dataWork = keys.map((key) => ({
    id: `strechy_work_${key}`,
    alt: data(`work.${key}.alt`),
    url: data(`work.${key}.url`),
  }));

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">{t("title")}</h2>
      <h3 className="my-8 text-center text-hneda">{t("subtitle")}</h3>
      <Images data={dataWork} width={200} height={150} />
      <div className="mt-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div className="mx-auto md:mx-0 md:ml-auto">
          <h4 className="mb-4 text-hneda md:mb-8">{t("text1")}</h4>
          <ul className="space-y-1">
            <li>✓ {t("list.item1")}</li>
            <li>✓ {t("list.item2")}</li>
            <li>✓ {t("list.item3")}</li>
            <li>✓ {t("list.item4")}</li>
            <li>✓ {t("list.item5")}</li>
            <li>✓ {t("list.item6")}</li>
          </ul>
        </div>
        <Image
          className="md:mx0 mx-auto items-center md:ml-5"
          alt={t("image.alt")}
          width={300}
          height={350}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          src="https://utfs.io/f/da49b2a9-1ce7-469c-8462-a0f7bc789952_skladba.png"
        />
      </div>
    </ContainerBila>
  );
}
