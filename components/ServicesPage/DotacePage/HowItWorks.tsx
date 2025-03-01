import { useTranslations } from "next-intl";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function HowItWorks() {
  const t = useTranslations("DotacePage.HowItWorks");

  return (
    <ContainerBezova>
      <h3 className="text-center text-hneda">{t("title")}</h3>
      <div className="mx-auto mt-4 max-w-xl space-y-4 md:mt-8 md:space-y-4">
        <p>{t("text1")}</p>
        <p>{t("text2")}</p>
        <p>{t("text3")}</p>
        <p>
          {t.rich("text4", {
            link1: () => (
              <a
                className="border-b border-bezova text-zelena hover:border-zelena"
                href="mailto:dotace@zelenestaveni.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                dotace@zelenestaveni.cz
              </a>
            ),
            link2: () => (
              <a
                className="border-b border-bezova text-zelena hover:border-zelena"
                href="tel:+420777898501"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("tel")}
              </a>
            ),
          })}
        </p>
      </div>
    </ContainerBezova>
  );
}
