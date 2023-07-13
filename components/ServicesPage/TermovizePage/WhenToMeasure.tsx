import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function WhenToMeasure() {
	return (
		<ContainerBezova>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
				<div>
					<Image
						className="m-auto rounded-full md:w-[350px]"
						alt="Ukázka měření termokamerou"
						width={350}
						height={350}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/34ba025e-b2d3-4b44-beac-fbba8da75f9b_ir11circle.png"
					/>
				</div>
				<div className="space-y-6 md:col-span-2">
					<div className="space-y-4">
						<h3 className="text-hneda">Kdy provádět měření</h3>
						<p>
							Závady v zateplení budov či v topných systémech je
							možno zjišťovat v topné sezóně, tedy v zimním
							období. Měření termokamerou je možno provádět i za
							tmy. Rozdíl teplot mezi vnějškem a vnitřkem by měl
							být alespoň cca 15°C. Závady v elektroinstalacích,
							fotovoltaických panelech a podobně, je možno
							zjišťovat celoročně.
						</p>
					</div>
					<div className="space-y-4">
						<h3 className="text-hneda">
							Co zahrnuje měření termovizí
						</h3>
						<ul className="list-disc space-y-1 pl-4">
							<li>
								Snímky vnějšku i vnitřku budovy, případně
								požadovaných zařízení ve viditelném i
								infračerveném spektru
							</li>
							<li>
								Analýza snímků (vyznačení nejteplejších a
								nejstudenějších míst či teplot v jakémkoliv bodě
								snímku)
							</li>
							<li>Vypracování protokolu ve formátu PDF</li>
						</ul>
					</div>
				</div>
			</div>
		</ContainerBezova>
	);
}
