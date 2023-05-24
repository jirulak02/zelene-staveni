import Image from "next/image";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
	dataStrechy,
	dataKorenovky,
	dataTermovize,
	dataBlowerdoor,
} from "@/components/data/ReferencesPage";

export const metadata = {
	title: "Reference",
	description: "TODO SEO",
};

export default function Reference() {
	return (
		<>
			<Container>
				<h1 className="my-10 text-zelena">Reference</h1>
				<p>Prohlédněte si fotografie našich prací</p>
				<div className="my-10 grid grid-cols-4">
					<Button href="/reference/#galerie-zelene-strechy">
						ZELENÉ STŘECHY
					</Button>
					<Button href="/reference/#galerie-korenove-cistirny">
						KOŘENOVÉ ČISTÍRNY
					</Button>
					<Button href="/reference/#galerie-blower-door-test">
						BLOWER DOOR TEST
					</Button>
					<Button href="/reference/#galerie-termovize">
						TERMOVIZE
					</Button>
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
