import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Vysvetleni() {
	return (
		<ContainerBezova>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
				<div>
					<Image
						className="m-auto w-[250px] rounded-full md:w-[350px]"
						alt="Ukázka měření termokamerou"
						width="450"
						height="450"
						src="https://uploadthing.com/f/e814bfc0-4853-4f4f-b2d9-800c3edc7fe3_ir11circle.png"
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
