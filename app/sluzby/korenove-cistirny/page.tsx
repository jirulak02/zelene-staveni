import Showcase from "@/components/HomePage/Showcase";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Realizace from "@/components/ServicesPage/Korenovky/Realizace";
import Rostliny from "@/components/ServicesPage/Korenovky/Rostliny";
import SkladbaKorenovky from "@/components/ServicesPage/Korenovky/SkladbaKorenovky";
import Zajistime from "@/components/ServicesPage/Korenovky/Zajistime";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Kořenové čistírny",
	description: "TODO SEO",
};

export default function Korenovky() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Kořenové čistírny"
				url="https://uploadthing.com/f/adeba4cf-aea7-4929-96f3-1d0fc91ba9b5_korenovky_hero.jpg"
			/>
			<Container className="my-20">
				<h2 className="text-zelena text-center">
					Kořenové čístírny odpadních vod
				</h2>
				<div className="max-w-xl m-auto space-y-4 mt-10">
					<p>
						Kořenová čistírna odpadních vod je vlastně takový malý
						přírodní mokřad.
					</p>
					<p>
						Slouží k čištění odpadních vod z domácnosti. Podle
						dosavadních zkušeností od nás i ze zahraničí je tato
						technologie svou účinností plně srovnatelná s ostatními
						běžně používanými technologiemi. Výhodou jsou minimální
						náklady na provoz. Není potřeba žádná elektrická energie
						na pohon čerpadla a podobně. Účinnost čištění není
						závislá na rovnoměrném přísunu odpadních vod.
					</p>
					<p>
						Zvládne i občasné nárazové zatížení i výpadek produkce
						odpadu. Kořenová čistírna vytváří na pozemku zajímavou
						dominantu a pomáhá udržovat příznivé klima ve svém
						okolí.
					</p>
				</div>
			</Container>
			<Zajistime />
			<SkladbaKorenovky />
			<Realizace />
			<Rostliny />
		</>
	);
}
