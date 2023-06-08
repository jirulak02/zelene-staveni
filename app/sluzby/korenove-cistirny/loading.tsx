import Container from "@/components/layout/Container";
import ContainerBila from "@/components/layout/ContainerBila";
import ImageLoader from "@/components/ui/ImageLoader";

export default function loading() {
	return (
		<>
			<div className="relative -mt-image h-[280px] overflow-hidden pb-12 md:h-[440px]">
				<ImageLoader className="h-full w-full" />
				<Container className="absolute h-full w-full bg-shadow">
					<h1 className="absolute flex h-full w-full flex-col justify-center px-3 text-center text-neutral-100 md:text-left">
						Kořenové čistírny
					</h1>
				</Container>
			</div>
			<ContainerBila>
				<h2 className="text-center text-zelena">
					Kořenové čístírny odpadních vod
				</h2>
				<div className="m-auto mt-6 max-w-xl space-y-4 md:mt-10">
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
			</ContainerBila>
		</>
	);
}
