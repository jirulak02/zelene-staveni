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
						Termovize
					</h1>
				</Container>
			</div>
			<ContainerBila>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
					<div className="space-y-4 md:col-span-2 md:space-y-6">
						<h2 className="text-zelena">Měření úniku tepla</h2>
						<p>
							Nabízíme měření úniku tepla kvalitní termokamerou
							Fluke Ti10 amerického výrobce.
						</p>
						<p>
							Kromě infračerveného snímku současně zaznamenává
							také obraz digitální a tyto obrazy umožňuje splynout
							dohromady, čímž výrazně zjednodušuje analýzu
							infračervených snímků. Teplotní citlivost 0.1°C.
							Rozsah měřených teplot -20°C až 250°C.
						</p>
					</div>
					<div>
						<ImageLoader className="m-auto h-[210px] w-[280px] md:h-[300px] md:w-[400px]" />
					</div>
				</div>
			</ContainerBila>
		</>
	);
}
