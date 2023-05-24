import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Unik() {
	return (
		<Container>
			<div className="my-20 grid grid-cols-3 gap-2">
				<div className="col-span-2 space-y-6">
					<h2 className="text-zelena">Měření úniku tepla</h2>
					<p>
						Nabízíme měření úniku tepla kvalitní termokamerou Fluke
						Ti10 amerického výrobce.
					</p>
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
						style={{ width: "400px" }}
						className="m-auto"
						alt="Termokamera Fluke Ti10"
						width="800"
						height="600"
						src="https://uploadthing.com/f/20fec890-7b8e-4ae2-a8f2-6265998f3027_kamera.png"
					/>
				</div>
			</div>
		</Container>
	);
}
