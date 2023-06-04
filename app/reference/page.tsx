import Image from "next/image";

import Container from "@/components/layout/Container";
import {
	dataStrechy,
	dataKorenovky,
	dataTermovize,
	dataBlowerdoor,
} from "@/components/data/ReferencesPage";
import ScrollButton from "@/components/ui/ScrollButton";

export const metadata = {
	title: "Reference - Zelené stavění.cz",
	description:
		"Prohlédněte si naše předchozí realizace, ať víte, jakou kvalitu můžete očekávat. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Reference() {
	return (
		<>
			<Container>
				<h1 className="my-10 text-zelena">Reference</h1>
				<p>Prohlédněte si fotografie našich prací.</p>
				<div className="my-10 grid grid-cols-4">
					<ScrollButton id="galerie-zelene-strechy">
						ZELENÉ STŘECHY
					</ScrollButton>
					<ScrollButton id="galerie-korenove-cistirny">
						KOŘENOVÉ ČISTÍRNY
					</ScrollButton>
					<ScrollButton id="galerie-blower-door-test">
						BLOWER DOOR TEST
					</ScrollButton>
					<ScrollButton id="galerie-termovize">
						TERMOVIZE
					</ScrollButton>
				</div>
			</Container>
			<Container className="bg-bezova py-10">
				<h2
					id="galerie-zelene-strechy"
					className="py-10 text-center text-zelena"
				>
					Zelené střechy
				</h2>
				<div className="mb-10 grid grid-cols-auto gap-2">
					{dataStrechy.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt={`Ukázka realizace v lokalitě ${item.name}`}
							width="400"
							height="300"
							src={item.url}
						/>
					))}
				</div>
			</Container>
			<Container className="py-10">
				<h2
					id="galerie-korenove-cistirny"
					className="py-10 text-center text-zelena"
				>
					Kořenové čistírny
				</h2>
				<div className="mb-10 grid grid-cols-auto gap-2">
					{dataKorenovky.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt="Ukázka realizace kořenové čističky"
							width="400"
							height="300"
							src={item.url}
						/>
					))}
				</div>
			</Container>
			<Container className="bg-bezova py-10">
				<h2
					id="galerie-blower-door-test"
					className="py-10 text-center text-zelena"
				>
					Blower Door test
				</h2>
				<div className="mb-10 grid grid-cols-auto gap-2">
					{dataBlowerdoor.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt={item.name}
							width="400"
							height="532"
							src={item.url}
						/>
					))}
				</div>
			</Container>
			<Container className="py-10">
				<h2
					id="galerie-termovize"
					className="py-10 text-center text-zelena"
				>
					Termovize
				</h2>
				<div className="mb-10 grid grid-cols-auto gap-2">
					{dataTermovize.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt="Ukázka udělaného měření termokamerou"
							width="400"
							height="281"
							src={item.url}
						/>
					))}
				</div>
			</Container>
		</>
	);
}
