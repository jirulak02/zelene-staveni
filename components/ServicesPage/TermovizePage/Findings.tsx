import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Findings() {
  return (
    <ContainerBila>
      <h2 className="mb-4 text-zelena md:mb-6">Co lze měřením zjistit</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <ul className="list-disc space-y-1 pl-4">
          <li>Nedostatky v zateplení budovy, špatné provedení izolací</li>
          <li>Špatné utěsnění oken nebo dveří</li>
          <li>Tepelné mosty</li>
          <li>Skryté netěsnosti v plášti budovy</li>
          <li>Kontrola provedení stavebních prací</li>
          <li>Závady v podlahovém vytápění</li>
          <li>Závady v elektroinstalacích - přehřívání rozvaděčů, kabelů, jističů, motorů</li>
          <li>Závady ve fotovoltaických i termických panelech</li>
          <li>Chyby v izolacích topných rozvodů a zásobníků</li>
          <li>Problémy v komínovém systému</li>
        </ul>

        <div>
          <Image
            className="m-auto w-[250px] md:w-[400px]"
            alt="Ukázka měření termokamerou"
            width={400}
            height={300}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/a7b346ce-1eef-42c6-9f0b-fa874641ac14_budova.png"
          />
        </div>
      </div>
    </ContainerBila>
  );
}
