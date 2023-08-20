import Image from "next/image";

import { dataDetails } from "@/components/data/ServicesKorenovky";
import ContainerBila from "@/components/layout/ContainerBila";

export default function Details() {
  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">Kořenové čístírny odpadních vod</h2>
      <div className="m-auto mt-6 max-w-xl space-y-4 md:mt-10">
        <p>Kořenová čistírna odpadních vod je vlastně takový malý přírodní mokřad.</p>
        <p>
          Slouží k čištění odpadních vod z domácnosti. Podle dosavadních zkušeností od nás i ze
          zahraničí je tato technologie svou účinností plně srovnatelná s ostatními běžně
          používanými technologiemi. Výhodou jsou minimální náklady na provoz. Není potřeba žádná
          elektrická energie na pohon čerpadla a podobně. Účinnost čištění není závislá na
          rovnoměrném přísunu odpadních vod.
        </p>
        <p>
          Zvládne i občasné nárazové zatížení i výpadek produkce odpadu. Kořenová čistírna vytváří
          na pozemku zajímavou dominantu a pomáhá udržovat příznivé klima ve svém okolí.
        </p>
      </div>
      <h3 className="mt-12 text-center text-hneda">Co všechno pro vás zajistíme</h3>
      <div className="grid grid-cols-auto">
        {dataDetails.map((item) => (
          <div
            key={item.id}
            className="my-4 flex flex-col items-center space-y-4 text-center md:my-10 md:space-y-8"
          >
            <Image
              style={{ width: "50px" }}
              alt="Ikony na podporu vysvětlení"
              width={50}
              height={50}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              src={item.url}
            />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </ContainerBila>
  );
}
