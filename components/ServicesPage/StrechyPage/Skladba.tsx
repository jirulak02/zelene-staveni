import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataPrace } from "@/components/data/SluzbyStrechy";

export default function Skladba() {
	return (
		<Container className="my-20">
			<h2 className="text-zelena text-center">
				Dokážeme udělat celou skladbu střechy
			</h2>
			<h3 className="text-hneda text-center my-8">
				Ručíme Vám tak za celou střechu
			</h3>
			<div className="grid grid-cols-auto gap-2 mb-10">
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

			<div className="grid grid-cols-2 items-center">
				<div className="ml-auto -mt-3">
					<h4 className="text-hneda my-8">Skladba zelené střechy</h4>
					<p>✓ Rostliny</p>
					<p>✓ Substrát</p>
					<p>✓ Filtrační vrstva</p>
					<p>✓ Drenážní + hydroakumulační vrstva</p>
					<p>✓ Ochranná vrstva</p>
					<p>✓ Hydroizolace odolná prorůstání</p>
				</div>
				<Image
					style={{ width: "300px" }}
					className="items-center ml-5"
					alt="TODO"
					width="400"
					height="466"
					src="https://uploadthing.com/f/3b435311-a6dc-4481-8de2-89e4cadeccd3_skladba.png"
				/>
			</div>
		</Container>
	);
}
