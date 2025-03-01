import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Findings() {
  const t = useTranslations("TermovizePage.Findings");

  return (
    <ContainerBila>
      <h2 className="mb-4 text-zelena md:mb-6">{t("title")}</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <ul className="list-disc space-y-1 pl-4">
          <li>{t("list.item1")}</li>
          <li>{t("list.item2")}</li>
          <li>{t("list.item3")}</li>
          <li>{t("list.item4")}</li>
          <li>{t("list.item5")}</li>
          <li>{t("list.item6")}</li>
          <li>{t("list.item7")}</li>
          <li>{t("list.item8")}</li>
          <li>{t("list.item9")}</li>
          <li>{t("list.item10")}</li>
        </ul>
        <div>
          <Image
            className="m-auto w-[250px] md:w-[400px]"
            alt={t("image.alt")}
            width={400}
            height={300}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/a7b346ce-1eef-42c6-9f0b-fa874641ac14_budova.png"
          />
        </div>
      </div>
    </ContainerBila>
  );
}
