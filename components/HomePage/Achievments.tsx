import { useTranslations } from "next-intl";
import Image from "next/image";

import Counter from "../animations/Counter";
import ContainerBezova from "../layout/ContainerBezova";
import Button from "../ui/Button";

export default function Achievments() {
  const t = useTranslations("HomePage.Achievments");

  return (
    <ContainerBezova>
      <div className="space-y-4 text-center md:space-y-6">
        <h2 className="text-hneda">{t("title")}</h2>
        <p>{t("text")}</p>
        <Button href="/kontakt">{t("button.label")}</Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 text-center sm:grid-cols-auto md:mt-16">
        <div className="space-y-2 px-3 sm:space-y-3">
          <Counter countTo={20} className="text-6xl text-zelena sm:text-7xl" />
          <h3 className="text-zelena">{t("counter1.title")}</h3>
          <p>{t("counter1.text")}</p>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <Image
            alt={t("houseImage.alt")}
            width={150}
            height={150}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/1531e602-218a-48aa-b979-4492792896fa-vy8mnf.png"
          />
        </div>
        <div className="space-y-2 px-3 text-center sm:space-y-3">
          <Counter countTo={200} className="text-6xl text-zelena sm:text-7xl" />
          <h3 className="text-zelena">{t("counter2.title")}</h3>
          <p>{t("counter2.text")}</p>
        </div>
        <div className="hidden items-center justify-center text-center lg:flex">
          <Image
            alt={t("houseImage.alt")}
            width={150}
            height={150}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/1531e602-218a-48aa-b979-4492792896fa-vy8mnf.png"
          />
        </div>
        <div className="space-y-2 px-3 text-center sm:space-y-3">
          <Counter countTo={300} className="text-6xl text-zelena sm:text-7xl" />
          <h3 className="text-zelena">{t("counter3.title")}</h3>
          <p>{t("counter3.text")}</p>
        </div>
      </div>
    </ContainerBezova>
  );
}
