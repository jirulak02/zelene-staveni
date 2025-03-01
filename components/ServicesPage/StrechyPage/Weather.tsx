import { useTranslations } from "next-intl";
import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Weather() {
  const t = useTranslations("StrechyPage.Weather");
  const data = useTranslations("data.strechy");

  const keys = Array.from({ length: 3 }, (_, i) => (i + 1).toString());
  const dataWeather = keys.map((key) => ({
    id: `strechy_weather_${key}`,
    name: data(`weather.${key}.name`),
    url: data(`weather.${key}.url`),
  }));

  return (
    <ContainerBila>
      <h3 className="my-5 text-center text-hneda">&quot;{t("title")}&quot;</h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-auto">
        {dataWeather.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-3 text-center">
            <Image
              style={{ width: "400px" }}
              alt={t("image.alt")}
              width={400}
              height={250}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src={item.url}
            />
            <h4 className="text-zelena">{item.name}</h4>
          </div>
        ))}
      </div>
    </ContainerBila>
  );
}
