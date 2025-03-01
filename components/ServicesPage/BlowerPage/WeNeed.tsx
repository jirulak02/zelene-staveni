import { useTranslations } from "next-intl";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function WeNeed() {
  const t = useTranslations("BlowerPage.WeNeed");

  return (
    <ContainerBezova>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-4 md:space-y-5">
          <h3 className="text-hneda">{t("title1")}</h3>
          <p>
            {t.rich("text1", {
              bold: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
          <p>
            {t.rich("text2", {
              bold: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
        </div>
        <div className="mt-4 space-y-4 md:mt-0 md:space-y-5">
          <h3 className="text-hneda">{t("title2")}</h3>
          <ul className="ml-4 list-disc space-y-1">
            <li>{t("list.item1")}</li>
            <li>{t("list.item2")}</li>
            <li>
              <a
                className="border-b border-bezova text-zelena hover:border-zelena"
                href="https://utfs.io/f/80ffe9a8-1dee-4efc-a55f-4d9a2198d4b3_blowerdoor_pravidla_rd.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("list.item3.link.label")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ContainerBezova>
  );
}
