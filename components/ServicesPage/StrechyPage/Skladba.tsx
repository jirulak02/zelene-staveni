import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataPrace } from "@/components/data/SluzbyStrechy";

export default function Skladba() {
	return (
		<Container className="my-20">
			<h2 className="text-center text-zelena">
				Dokážeme udělat celou skladbu střechy
			</h2>
			<h3 className="my-8 text-center text-hneda">
				Ručíme Vám tak za celou střechu
			</h3>
			<div className="mb-10 grid grid-cols-auto gap-2">
				{dataPrace.map((item) => (
					<Image
						key={item.id}
						style={{ width: "200px" }}
						alt="Ukázka toho jak na střechách makáme"
						width="400"
						height="300"
						src={item.url}
					/>
				))}
			</div>
			<div className="grid grid-cols-2 items-center gap-4">
				<div className="ml-auto">
					<h4 className="mb-8 text-hneda">Skladba zelené střechy</h4>
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
					className="ml-5 items-center"
					alt="Rozbor jednotlivých částí skladby zelené střechy"
					width="400"
					height="466"
					src="https://uploadthing.com/f/3b435311-a6dc-4481-8de2-89e4cadeccd3_skladba.png"
				/>
			</div>
		</Container>
	);
}
