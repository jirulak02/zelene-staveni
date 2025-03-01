import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Considerations() {
  const t = useTranslations("StrechyPage.Considerations");

  return (
    <ContainerBezova>
      <h2 className="mb-6 text-center text-zelena md:mb-10">{t("title")}</h2>
      <h3 className="text-center text-hneda">{t("subtitle1")}</h3>
      <h3 className="text-center text-hneda">{t("subtitle2")}</h3>
      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt={t("image1.alt")}
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/c102cf57-d4cb-42d2-8756-8890be141c4b_compare.png"
            />
          </div>
          <h5>{t("text1")}</h5>
        </div>
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt={t("image2.alt")}
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/5c5f462a-8170-4d09-8bed-21787099faf0_savings.png"
            />
          </div>
          <h5>{t("text2")}</h5>
        </div>
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt={t("image3.alt")}
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/186eae08-60f8-4d0f-a853-70686d80b3fe_foundation.png"
            />
          </div>
          <h5>{t("text3")}</h5>
        </div>
      </div>
    </ContainerBezova>
  );
}
