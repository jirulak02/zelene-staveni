import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Detection() {
  const t = useTranslations("BlowerPage.Detection");

  return (
    <ContainerBezova>
      <div className="space-y-5">
        <h2 className="text-center text-zelena">{t("title")}</h2>
        <p className="mx-auto max-w-xl">{t("text1")}</p>
        <div className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-auto">
          <Image
            className="mb:mx-0 mx-auto"
            alt={t("image1.alt")}
            width="200"
            height="250"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/e6837ebd-9046-4dfe-a127-c9312e347c33_kour.png"
          />
          <Image
            className="mb:mx-0 mx-auto"
            alt={t("image2.alt")}
            width="200"
            height="250"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/b823821f-e8d9-42ea-87b6-ec3410f31e89_duct2.png"
          />
          <Image
            className="mb:mx-0 mx-auto"
            alt={t("image3.alt")}
            width="200"
            height="140"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/25eb9e20-6e2f-4b6f-86c5-c87d86327d3b_anemometr.png"
          />
          <Image
            className="mb:mx-0 mx-auto"
            alt={t("image4.alt")}
            width="200"
            height="140"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/ed38ffe1-a3dd-4811-bdf3-86ae7e4e6259_infra.png"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="mt-10 flex flex-col items-center space-y-4">
            <Image
              alt={t("image5.alt")}
              width="50"
              height="50"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/e53ce9d3-e19d-4a66-9be2-dc0236dd032a_done.png"
            />
            <p className="px-4">{t("text2")}</p>
          </div>
          <div className="mt-10 flex flex-col items-center space-y-4">
            <Image
              alt={t("image6.alt")}
              width="50"
              height="50"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://utfs.io/f/6f631673-48aa-4c26-b785-2e18107f8861_fix.png"
            />
            <p className="px-4">{t("text3")}</p>
          </div>
        </div>
      </div>
    </ContainerBezova>
  );
}
