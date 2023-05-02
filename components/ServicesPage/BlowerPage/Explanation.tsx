import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Explanation() {
	return (
		<Container className="my-20">
			<div className="grid grid-cols-2">
				<div className="space-y-5">
					<h2 className="text-zelena">
						Test průvzdušnosti obálky budov
					</h2>
					<p>
						Provádíme test vzduchotěsnosti obálky budov a bytů tzv.
						Blower Door test. Měření provádíme v souladu s normou
						ČSN EN ISO 9972. Jsme registrováni v seznamu odborných
						dodavatelů projektu{" "}
						<a
							href="#"
							className="text-zelena border-b border-neutral-100 hover:border-zelena"
						>
							Nová zelená úsporám
						</a>
						.
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						style={{ width: "400px" }}
						alt="TODO"
						width="800"
						height="400"
						src="/dotace/nzu.png"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 mt-20">
				<div className="flex justify-center items-center">
					<Image
						className="rounded-full"
						style={{ width: "320px" }}
						alt="TODO"
						width="320"
						height="320"
						src="/square.jpeg"
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
					<ul className="list-disc ml-3">
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
								href="#"
								className="text-zelena border-b border-neutral-100 hover:border-zelena"
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
