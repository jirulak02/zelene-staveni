import Image from "next/image";

import Container from "@/components/layout/Container";
import {
	dataStrechy,
	dataKorenovky,
	dataTermovize,
	dataBlowerdoor,
} from "@/components/data/ReferencesPage";
import ScrollButton from "@/components/ui/ScrollButton";
import ContainerBezova from "@/components/layout/ContainerBezova";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export const metadata = {
	title: "Reference - Zelené stavění.cz",
	description:
		"Prohlédněte si naše předchozí realizace, ať víte, jakou kvalitu můžete očekávat. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Reference() {
	return (
		<>
			<Container>
				<h1 className="mb-6 mt-10 text-zelena md:mb-10">Reference</h1>
				<p>Prohlédněte si fotografie našich prací.</p>
				<div className="mb-10 mt-4 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-4">
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
			<ContainerBezova>
				<h2
					id="galerie-zelene-strechy"
					className="pb-6 text-center text-zelena md:pb-10"
				>
					Zelené střechy
				</h2>
				<Images data={dataStrechy} />
			</ContainerBezova>
			<ContainerBila>
				<h2
					id="galerie-korenove-cistirny"
					className="pb-6 text-center text-zelena md:pb-10"
				>
					Kořenové čistírny
				</h2>
				<Images data={dataKorenovky} />
			</ContainerBila>
			<ContainerBezova>
				<h2
					id="galerie-blower-door-test"
					className="pb-6 text-center text-zelena md:pb-10"
				>
					Blower Door test
				</h2>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
					{dataBlowerdoor.map((item) => (
						<Image
							key={item.id}
							className="m-auto w-[200px] sm:m-0"
							alt={item.name}
							width="400"
							height="532"
							src={item.url}
						/>
					))}
				</div>
			</ContainerBezova>
			<ContainerBila>
				<h2
					id="galerie-termovize"
					className="pb-6 text-center text-zelena md:pb-10"
				>
					Termovize
				</h2>
				<Images data={dataTermovize} />
			</ContainerBila>
		</>
	);
}
