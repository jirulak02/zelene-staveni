import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";
import Button from "@/components/ui/Button";

export default function Grants() {
  const t = useTranslations("StrechyPage.Grants");

  return (
    <ContainerBila>
      <div className="grid grid-cols-1 gap-2 space-y-6 md:grid-cols-2 md:space-y-0">
        <div className="space-y-5">
          <h3 className="text-hneda">{t("title")}</h3>
          <p>{t("text1")}</p>
          <p>
            {t.rich("text2", {
              link: () => (
                <a
                  className="border-b border-neutral-100 text-zelena hover:border-zelena"
                  href="https://www.novazelenausporam.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("link.label")}
                </a>
              ),
            })}
          </p>
          <div className="flex">
            <Button href="/sluzby/dotace">{t("button.label")}</Button>
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
