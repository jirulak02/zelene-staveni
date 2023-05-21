import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Zjistime() {
	return (
		<Container className="my-20">
			<h2 className="text-zelena mb-6">Co lze měřením zjistit</h2>
			<div className="grid grid-cols-2 gap-2">
				<ul className="list-disc pl-4 space-y-1">
					<li>
						Nedostatky v zateplení budovy, špatné provedení izolací
					</li>
					<li>Špatné utěsnění oken nebo dveří</li>
					<li>Tepelné mosty</li>
					<li>Skryté netěsnosti v plášti budovy</li>
					<li>Kontrola provedení stavebních prací</li>
					<li>Závady v podlahovém vytápění</li>
					<li>
						Závady v elektroinstalacích - přehřívání rozvaděčů,
						kabelů, jističů, motorů
					</li>
					<li>Závady ve fotovoltaických i termických panelech</li>
					<li>Chyby v izolacích topných rozvodů a zásobníků</li>
					<li>Problémy v komínovém systému</li>
				</ul>

				<div>
					<Image
						style={{ width: "400px" }}
						className="m-auto"
						alt="Ukázka měření termokamerou"
						width="800"
						height="600"
						src="https://uploadthing.com/f/f94bf8dc-61c3-4574-ae59-b95ca908cdfd_budova_velka.png"
					/>
				</div>
			</div>
		</Container>
	);
}
