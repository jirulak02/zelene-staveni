import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Explanation() {
    return (
        <Container className="my-20">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-5">
                    <h2 className="text-zelena">
                        Test průvzdušnosti obálky budov
                    </h2>
                    <p>
                        Provádíme test vzduchotěsnosti obálky budov a bytů tzv.
                        Blower Door test. Měření provádíme v souladu s normou
                        ČSN EN ISO 9972. Jsme registrováni v{" "}
                        <a
                            className="border-b border-neutral-100 text-zelena hover:border-zelena"
                            href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
                            target="_blank"
                        >
                            seznamu odborných dodavatelů
                        </a>{" "}
                        projektu Nová zelená úsporám.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        style={{ width: "400px" }}
                        alt="Logo programu Nová zelená úsporám"
                        width="800"
                        height="400"
                        src="https://uploadthing.com/f/d2e86f21-10f0-478b-bc11-861adcaa8604_nzu.png"
                    />
                </div>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                    <Image
                        className="rounded-full"
                        style={{ width: "320px" }}
                        alt="Ukázka zapojení techniky k měření ve dveřích"
                        width="640"
                        height="640"
                        src="https://uploadthing.com/f/a0208a4e-7aed-4a40-a807-f2fdf31d9042_blowercircle.png"
                    />
                </div>
                <div className="space-y-5">
                    <h3 className="text-hneda">Kdy se test provádí</h3>
                    <p>
                        Test Blower Door je vyžadován především u pasivních a
                        nízkoenergetických domů. Test je vhodné provést již v
                        průběhu výstavby domu po zabudování oken a venkovních
                        dveří, kdy je možno ještě relativně snadno opravit
                        zjištěné netěsnosti.
                    </p>
                    <h3 className="text-hneda">Co Blower Door test obsahuje</h3>
                    <ul className="ml-4 list-disc space-y-1">
                        <li>příprava budovy</li>
                        <li>
                            případné utěsnění vzduchotechnických otvorů, odpadů
                            apod.
                        </li>
                        <li>
                            vlastní test provedený za podtlaku i přetlaku 20 až
                            75Pa
                        </li>
                        <li>
                            výstupem měření je protokol obsahující stanovení
                            hodnoty n50 pro měřený objekt (ukázka Protokolu
                            měření ke stažení{" "}
                            <a
                                className="border-b border-neutral-100 text-zelena hover:border-zelena"
                                href="https://www.zelenestaveni.cz/wp-content/uploads/2021/02/Protokol_blower-door_ukazka.pdf"
                                target="_blank"
                            >
                                ZDE
                            </a>
                            )
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
