import { useTranslations } from "next-intl";

import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";
import Button from "@/components/ui/Button";

export default function Showcase() {
  const t = useTranslations("TermovizePage.Showcase");
  const data = useTranslations("data.termovize");

  const keys = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const dataRealization = keys.map((key) => ({
    id: `termovize_realization_${key}`,
    alt: data(`realization.${key}.alt`),
    url: data(`realization.${key}.url`),
  }));

  return (
    <ContainerBezova>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <Images data={dataRealization} width={200} height={140} />
        <Button href="/reference#galerie-termovize">{t("button.label")}</Button>
      </div>
    </ContainerBezova>
  );
}
