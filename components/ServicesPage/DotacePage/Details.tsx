import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Details() {
  return (
    <ContainerBila>
      <h2 className="text-center text-zelena">Dotace na zelenou střechu</h2>
      <h3 className="mx-auto mt-6 max-w-xl text-center text-hneda md:mt-8">
        Nechte si usnadnit cestu k získání finanční podpory na vaši střechu
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-2">
        <div className="space-y-4 md:space-y-5">
          <div>
            Od ledna 2017 je možno žádat o dotaci na realizaci zelené střechy, kterou Vám rádi
            jakožto{" "}
            <a
              className="border-b border-neutral-100 text-zelena hover:border-zelena"
              href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              registrováný odborný dodavatel
            </a>{" "}
            projektu Nová zelená úsporám pomůžeme vyřídit.
          </div>
          <div>
            Bohužel od července 2023 lze dotace na zelenou střechu podávát zase{" "}
            <span className="font-semibold">jen spolu s další oblastní podpory</span>. Mezi ty
            patří:
            <ul className="list-disc pl-5">
              <li>Oblast A - zateplení</li>
              <li>Oblast B - novostavba</li>
              <li>Oblast C.1 - výměna zdrojů tepla</li>
              <li>Oblast C.2 - příprava teplé vody</li>
              <li>Oblast C.3 - fotovoltaické systémy</li>
              <li>Oblast C.4 - větrání</li>
            </ul>
          </div>
          <div>
            Dotace činí <span className="font-semibold">800-1000 Kč/m²</span> zelené střechy s
            maximální výší dotace <span className="font-semibold">100 000 Kč</span>. Cena zelené
            střechy tedy nemusí být vysoká.
          </div>
          <div>
            Více o dotacích se dozvíte v aktuálních{" "}
            <a
              className="border-b border-neutral-100 text-zelena hover:border-zelena"
              href="https://uploadthing.com/f/7b4abbc4-9a5b-4c96-9550-da7c7802e2f1_Z%C3%A1vazn%C3%A9%20pokyny.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              závazných pokynech pro žadatele
            </a>
            , nebo přímo na stránkách{" "}
            <a
              className="border-b border-neutral-100 text-zelena hover:border-zelena"
              href="https://www.novazelenausporam.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nová zelená úsporám
            </a>
            .
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
          src="https://uploadthing.com/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
        />
      </div>
    </ContainerBila>
  );
}
