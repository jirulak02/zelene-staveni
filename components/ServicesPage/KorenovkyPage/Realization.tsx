import { useTranslations } from "next-intl";

import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Realization() {
  const t = useTranslations("KorenovkyPage.Realization");
  const data = useTranslations("data.korenovky");

  const keys = Array.from({ length: 11 }, (_, i) => (i + 1).toString());
  const dataRealization = keys.map((key) => ({
    id: `korenovky_realization_${key}`,
    alt: data(`realization.${key}.alt`),
    url: data(`realization.${key}.url`),
  }));

  return (
    <ContainerBezova>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <Images data={dataRealization} width={200} height={150} />
      </div>
    </ContainerBezova>
  );
}
