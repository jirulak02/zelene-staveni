import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Considerations() {
  return (
    <ContainerBezova>
      <h2 className="mb-6 text-center text-zelena md:mb-10">
        Realizujeme zelené střechy od A do Z
      </h2>
      <h3 className="text-center text-hneda">Na co myslet před realizací zelené střechy?</h3>
      <h3 className="text-center text-hneda">Ujasněte si tyto základní body:</h3>
      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt="Ikona porovnávání"
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://uploadthing.com/f/c102cf57-d4cb-42d2-8756-8890be141c4b_compare.png"
            />
          </div>
          <h5>Jaký styl se Vám líbí</h5>
        </div>
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt="Ikona šetřícího prasátka"
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://uploadthing.com/f/5c5f462a-8170-4d09-8bed-21787099faf0_savings.png"
            />
          </div>
          <h5>Kolik chcete investovat</h5>
        </div>
        <div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
          <div
            className="flex items-center justify-center rounded-full bg-neutral-100"
            style={{ width: "120px", height: "120px" }}
          >
            <Image
              alt="Ikona kolapsujícího domu"
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src="https://uploadthing.com/f/186eae08-60f8-4d0f-a853-70686d80b3fe_foundation.png"
            />
          </div>
          <h5>Možné zatížení střešní konstrukce</h5>
        </div>
      </div>
    </ContainerBezova>
  );
}
