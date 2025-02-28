import { useTranslations } from "next-intl";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Details() {
  const t = useTranslations("JezirkaPage.Details");

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">{t("title")}</h2>
      <div className="m-auto mt-6 max-w-xl space-y-4 md:mt-10">
        <p>{t("text1")}</p>
        <p>{t("text2")}</p>
        <p>{t("text3")}</p>
      </div>
    </ContainerBila>
  );
}
