import { useTranslations } from "next-intl";

import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Showcase() {
  const t = useTranslations("BlowerPage.Showcase");
  const data = useTranslations("data.blower");

  const keys = Array.from({ length: 5 }, (_, i) => (i + 1).toString());
  const dataRealization = keys.map((key) => ({
    id: `blower_realization_${key}`,
    alt: data(`realization.${key}.alt`),
    url: data(`realization.${key}.url`),
  }));

  return (
    <ContainerBila>
      <div className="space-y-4 md:space-y-5">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <p className="mx-auto max-w-xl text-center">{t("text")}</p>
        <Images data={dataRealization} width={200} height={250} />
      </div>
    </ContainerBila>
  );
}
