import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function WhenToMeasure() {
  const t = useTranslations("TermovizePage.WhenToMeasure");

  return (
    <ContainerBezova>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div>
          <Image
            className="m-auto rounded-full md:w-[350px]"
            alt={t("image.alt")}
            width={350}
            height={350}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/34ba025e-b2d3-4b44-beac-fbba8da75f9b_ir11circle.png"
          />
        </div>
        <div className="space-y-6 md:col-span-2">
          <div className="space-y-4">
            <h3 className="text-hneda">{t("title1")}</h3>
            <p>{t("text1")}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-hneda">{t("title2")}</h3>
            <ul className="list-disc space-y-1 pl-4">
              <li>{t("list.item1")}</li>
              <li>{t("list.item2")}</li>
              <li>{t("list.item3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerBezova>
  );
}
