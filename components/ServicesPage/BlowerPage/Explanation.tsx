import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Explanation() {
  return (
    <ContainerBila>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-zelena">Test průvzdušnosti obálky budov</h2>
          <p>
            Provádíme test vzduchotěsnosti obálky budov a bytů tzv. Blower Door test. Měření
            provádíme v souladu s normou ČSN EN ISO 9972. Jsme registrováni v{" "}
            <a
              className="border-b border-neutral-100 text-zelena hover:border-zelena"
              href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              seznamu odborných dodavatelů
            </a>{" "}
            projektu Nová zelená úsporám.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            style={{ width: "400px", height: "200px" }}
            alt="Logo programu Nová zelená úsporám"
            width={400}
            height={200}
            quality={100}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full"
            style={{ width: "320px" }}
            alt="Ukázka zapojení techniky k měření ve dveřích"
            width={320}
            height={320}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            src="https://utfs.io/f/6fcd6a31-bfeb-4d56-8601-9057f441d4ad_blowercircle.png"
          />
        </div>
        <div className="row-start-1 md:row-start-auto">
          <h3 className="mb-2 text-hneda">Kdy se test provádí</h3>
          <p>
            Test Blower Door je vyžadován především u pasivních a nízkoenergetických domů. Test je
            vhodné provést již v průběhu výstavby domu po zabudování oken a venkovních dveří, kdy je
            možno ještě relativně snadno opravit zjištěné netěsnosti.
          </p>
          <h3 className="mb-2 mt-5 text-hneda">Co Blower Door test obsahuje</h3>
          <ul className="ml-4 list-disc space-y-1">
            <li>příprava budovy</li>
            <li>případné utěsnění vzduchotechnických otvorů, odpadů apod.</li>
            <li>vlastní test provedený za podtlaku i přetlaku 20 až 75Pa</li>
            <li>
              výstupem měření je protokol obsahující stanovení hodnoty n50 pro měřený objekt (ukázka
              Protokolu měření ke stažení{" "}
              <a
                className="border-b border-neutral-100 text-zelena hover:border-zelena"
                href="https://utfs.io/f/a41e8847-d592-4483-9074-f43b6151605b_protokol_ukazka_blowerdoor.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZDE
              </a>
              )
            </li>
          </ul>
        </div>
      </div>
    </ContainerBila>
  );
}
