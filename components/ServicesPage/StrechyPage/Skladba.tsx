import Image from "next/image";

import { dataPrace } from "@/components/data/SluzbyStrechy";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Skladba() {
	return (
		<ContainerBila>
			<h2 className="text-center text-zelena">
				Dokážeme udělat celou skladbu střechy
			</h2>
			<h3 className="my-8 text-center text-hneda">
				Ručíme Vám tak za celou střechu
			</h3>
			<Images data={dataPrace} />
			<div className="mt-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
				<div className="mx-auto md:mx-0 md:ml-auto">
					<h4 className="mb-4 text-hneda md:mb-8">
						Skladba zelené střechy
					</h4>
					<ul className="space-y-1">
						<li>✓ Rostliny</li>
						<li>✓ Substrát</li>
						<li>✓ Filtrační vrstva</li>
						<li>✓ Drenážní + hydroakumulační vrstva</li>
						<li>✓ Ochranná vrstva</li>
						<li>✓ Hydroizolace odolná prorůstání</li>
					</ul>
				</div>
				<Image
					style={{ width: "300px" }}
					className="md:mx0 mx-auto items-center md:ml-5"
					alt="Rozbor jednotlivých částí skladby zelené střechy"
					width="400"
					height="466"
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src="https://uploadthing.com/f/3b435311-a6dc-4481-8de2-89e4cadeccd3_skladba.png"
				/>
			</div>
		</ContainerBila>
	);
}
