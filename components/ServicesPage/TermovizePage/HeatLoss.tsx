import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function HeatLoss() {
  const t = useTranslations("TermovizePage.HeatLoss");

  return (
    <ContainerBila>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2 md:space-y-6">
          <h2 className="text-zelena">{t("title")}</h2>
          <p>{t("text1")}</p>
          <p>{t("text2")}</p>
        </div>
        <div>
          <Image
            className="m-auto w-[280px] md:w-[400px]"
            alt={t("image.alt")}
            width={400}
            height={300}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/47b516d7-f1d1-46fe-8dff-417503996947-ityoyr.png"
          />
        </div>
      </div>
    </ContainerBila>
  );
}
