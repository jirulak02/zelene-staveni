import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Unik() {
	return (
		<ContainerBila>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
				<div className="space-y-4 md:col-span-2 md:space-y-6">
					<h2 className="text-zelena">Měření úniku tepla</h2>
					<p>Nabízíme měření úniku tepla termokamerou.</p>
					<p>
						Kromě infračerveného snímku současně zaznamenává také
						obraz digitální a tyto obrazy umožňuje splynout
						dohromady, čímž výrazně zjednodušuje analýzu
						infračervených snímků. Teplotní citlivost 0.1°C. Rozsah
						měřených teplot -20°C až 250°C.
					</p>
				</div>
				<div>
					<Image
						className="m-auto w-[280px] md:w-[400px]"
						alt="Termokamera Fluke Ti10"
						width={400}
						height={300}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/03004a01-28c0-4013-b5d0-4be51d56d11c_kamera.png"
					/>
				</div>
			</div>
		</ContainerBila>
	);
}
