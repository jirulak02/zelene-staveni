import Image from "next/image";

import { dataDetails } from "@/components/data/ServicesJezirka";
import ContainerBezova from "@/components/layout/ContainerBezova";

export default function OurServices() {
  return (
    <ContainerBezova>
      <h3 className="text-center text-hneda">Co všechno pro vás zajistíme</h3>
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
    </ContainerBezova>
  );
}
