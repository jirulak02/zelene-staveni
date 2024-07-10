import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";
import Button from "@/components/ui/Button";

export default function Grants() {
  return (
    <ContainerBila>
      <div className="grid grid-cols-1 gap-2 space-y-6 md:grid-cols-2 md:space-y-0">
        <div className="space-y-5">
          <h3 className="text-hneda">Dotace na zelené střechy</h3>
          <p>
            Od ledna 2017 je možno žádat o dotaci na realizaci zelené střechy, kterou Vám rádi
            vyřídíme.
          </p>
          <p>
            Dotace činí 700-1000 Kč/m² zelené střechy a více se dozvíte na stránkách{" "}
            <a
              className="border-b border-neutral-100 text-zelena hover:border-zelena"
              href="https://www.novazelenausporam.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nová zelená úsporám
            </a>
            . Cena zelené střechy tedy nemusí být vysoká. Maximální výše dotace je 100 000 Kč.
          </p>
          <div className="flex">
            <Button href="/sluzby/dotace">ZJISTIT VÍCE</Button>
          </div>
        </div>
        <Image
          style={{ width: "400px" }}
          className="m-auto"
          alt="Logo programu Nová zelená úsporám"
          width={400}
          height={200}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          src="https://utfs.io/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
        />
      </div>
    </ContainerBila>
  );
}
