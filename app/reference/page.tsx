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
				<h1 className="text-zelena my-10">Reference</h1>
				<p>Prohlédněte si fotografie našich prací</p>
				<div className="grid grid-cols-4 my-10">
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
					className="text-center text-zelena py-10"
				>
					Zelené střechy
				</h2>
				<div className="grid grid-cols-auto gap-2 mb-10">
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
					className="text-center text-zelena py-10"
				>
					Kořenové čistírny
				</h2>
				<div className="grid grid-cols-auto gap-2 mb-10">
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
					className="text-center text-zelena py-10"
				>
					Blower Door test
				</h2>
				<div className="grid grid-cols-auto gap-2 mb-10">
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
					className="text-center text-zelena py-10"
				>
					Termovize
				</h2>
				<div className="grid grid-cols-auto gap-2 mb-10">
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
