import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Details() {
  const t = useTranslations("DotacePage.Details");

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">{t("title")}</h2>
      <h3 className="mx-auto mt-6 max-w-xl text-center text-hneda md:mt-8">{t("subtitle")}</h3>
      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-2">
        <div className="space-y-4 md:space-y-5">
          <div>
            {t.rich("text1", {
              link: () => (
                <a
                  className="border-b border-neutral-100 text-zelena hover:border-zelena"
                  href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("link1.label")}
                </a>
              ),
            })}
          </div>
          <div>
            {t.rich("text2", {
              bold: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
            <ul className="list-disc pl-5">
              <li>{t("list.item1")}</li>
              <li>{t("list.item2")}</li>
              <li>{t("list.item3")}</li>
              <li>{t("list.item4")}</li>
              <li>{t("list.item5")}</li>
              <li>{t("list.item6")}</li>
            </ul>
          </div>
          <div>
            {t.rich("text3", {
              bold1: (chunks) => <span className="font-semibold">{chunks}</span>,
              bold2: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </div>
          <div>
            {t.rich("text4", {
              link1: () => (
                <a
                  className="border-b border-neutral-100 text-zelena hover:border-zelena"
                  href="https://utfs.io/f/61e3e1ac-13ed-460f-8fff-09b6911e9ca0_zavazne_pokyny.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("link2.label")}
                </a>
              ),
              link2: () => (
                <a
                  className="border-b border-neutral-100 text-zelena hover:border-zelena"
                  href="https://www.novazelenausporam.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("link3.label")}
                </a>
              ),
            })}
          </div>
        </div>
        <Image
          style={{ width: "400px" }}
          className="m-auto"
          alt={t("image.alt")}
          width={400}
          height={200}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          src="https://utfs.io/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
        />
      </div>
    </ContainerBila>
  );
}
