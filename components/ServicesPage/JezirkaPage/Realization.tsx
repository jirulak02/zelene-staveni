import { useTranslations } from "next-intl";

import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Realization() {
  const t = useTranslations("JezirkaPage.Realization");
  const data = useTranslations("data.jezirka");

  const keys = Array.from({ length: 8 }, (_, i) => (i + 1).toString());
  const dataRealization = keys.map((key) => ({
    id: `jezirka_realization_${key}`,
    alt: data(`realization.${key}.alt`),
    url: data(`realization.${key}.url`),
  }));

  return (
    <ContainerBila>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <Images data={dataRealization} width={200} height={150} />
      </div>
    </ContainerBila>
  );
}
