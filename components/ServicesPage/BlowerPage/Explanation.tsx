import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Explanation() {
  const t = useTranslations("BlowerPage.Explanation");

  return (
    <ContainerBila>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-zelena">{t("basicInfo.title")}</h2>
          <p>
            {t.rich("basicInfo.text", {
              link: () => (
                <a
                  className="border-b border-neutral-100 text-zelena hover:border-zelena"
                  href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("basicInfo.link.label")}
                </a>
              ),
            })}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            style={{ width: "400px", height: "200px" }}
            alt={t("image1.alt")}
            width={400}
            height={200}
            quality={100}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full"
            style={{ width: "320px" }}
            alt={t("image2.alt")}
            width={320}
            height={320}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/6fcd6a31-bfeb-4d56-8601-9057f441d4ad_blowercircle.png"
          />
        </div>
        <div className="row-start-1 md:row-start-auto">
          <h3 className="mb-2 text-hneda">{t("otherInfo.title1")}</h3>
          <p>{t("otherInfo.text1")}</p>
          <h3 className="mb-2 mt-5 text-hneda">{t("otherInfo.title2")}</h3>
          <ul className="ml-4 list-disc space-y-1">
            <li>{t("otherInfo.list.item1")}</li>
            <li>{t("otherInfo.list.item2")}</li>
            <li>{t("otherInfo.list.item3")}</li>
            <li>
              {t.rich("otherInfo.list.item4.text", {
                link: () => (
                  <a
                    className="border-b border-neutral-100 text-zelena hover:border-zelena"
                    href="https://utfs.io/f/a41e8847-d592-4483-9074-f43b6151605b_protokol_ukazka_blowerdoor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("otherInfo.list.item4.link.label")}
                  </a>
                ),
              })}
            </li>
          </ul>
        </div>
      </div>
    </ContainerBila>
  );
}
