import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";
import Button from "@/components/ui/Button";

export default function BlowerDoor() {
  const t = useTranslations("DotacePage.BlowerDoor");

  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">{t("title")}</h2>
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2">
        <div className="flex flex-col justify-center space-y-5 text-center">
          <p>{t("text")}</p>
          <div>
            <Button href="/sluzby/blower-door-test">{t("button.label")}</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            style={{ width: "200px" }}
            alt={t("image.alt")}
            width={200}
            height={250}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/8451747d-7e5c-493d-b3c1-023ac2d00b1e_blower2.png"
          />
        </div>
      </div>
    </ContainerBila>
  );
}
