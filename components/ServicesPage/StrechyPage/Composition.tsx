import Image from "next/image";

import { dataWork } from "@/components/data/ServicesStrechy";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Composition() {
  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">Dokážeme udělat celou skladbu střechy</h2>
      <h3 className="my-8 text-center text-hneda">Ručíme Vám tak za celou střechu</h3>
      <Images data={dataWork} width={200} height={150} />
      <div className="mt-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div className="mx-auto md:mx-0 md:ml-auto">
          <h4 className="mb-4 text-hneda md:mb-8">Skladba zelené střechy</h4>
          <ul className="space-y-1">
            <li>✓ Rostliny</li>
            <li>✓ Substrát</li>
            <li>✓ Filtrační vrstva</li>
            <li>✓ Drenážní + hydroakumulační vrstva</li>
            <li>✓ Ochranná vrstva</li>
            <li>✓ Hydroizolace odolná prorůstání</li>
          </ul>
        </div>
        <Image
          className="md:mx0 mx-auto items-center md:ml-5"
          alt="Rozbor jednotlivých částí skladby zelené střechy"
          width={300}
          height={350}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          src="https://uploadthing.com/f/da49b2a9-1ce7-469c-8462-a0f7bc789952_skladba.png"
        />
      </div>
    </ContainerBila>
  );
}
