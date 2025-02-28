import { useTranslations } from "next-intl";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Pricing() {
  const t = useTranslations("BlowerPage.Pricing");

  return (
    <ContainerBila>
      <div className="space-y-5">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <p className="text-center">{t("subtitle")}</p>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <h4 className="text-hneda">{t("text1.left")}</h4>
            <h4 className="text-hneda">{t("text1.right")}</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text2.left")}</p>
            <p>{t("text2.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text3.left")}</p>
            <p>{t("text3.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text4.left")}</p>
            <p>{t("text4.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text5.left")}</p>
            <p>{t("text5.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text6.left")}</p>
            <p>{t("text6.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text7.left")}</p>
            <p>{t("text7.right")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <p>{t("text8.left")}</p>
            <p>{t("text8.right")}</p>
          </div>
        </div>
      </div>
    </ContainerBila>
  );
}
