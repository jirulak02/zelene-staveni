import Image from "next/image";

import Container from "@/components/layout/Container";

const array1 = Array(10).fill(0);

export default function Netesnost() {
	return (
		<Container className="py-20 bg-bezova">
			<div className="space-y-5">
				<h2 className="text-zelena text-center">Detekce netěsnosti</h2>
				<p className="max-w-xl mx-auto">
					Současně s provedením testu nabízíme detekci netěsností.
					Netěsnosti je možno zjistit pomocí různých pomůcek. Kromě
					prvotního zjištění pomocí dlaně používáme detekci pomocí
					anemometru, vyvíječe kouře a termovize.
				</p>
				<div className="grid grid-cols-auto mx-auto">
					{array1.map((item) => (
						<Image
							key={Math.random().toString()}
							style={{ width: "150px" }}
							className="items-center m-2"
							alt="TODO"
							width="150"
							height="150"
							src="/square.jpeg"
						/>
					))}
				</div>
				<div className="grid grid-cols-2">
					<div className="flex flex-col items-center space-y-4 mt-10">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="100"
							height="100"
							src="/icons/done.png"
						/>
						<p className="px-4">
							Pro správné fungování vzduchotechniky je důležitá
							její správná instalace. Měření provedené k tomu
							speciálně určeným přístrojem Minneapolis DuctBlaster
							prověří kvalitu provedení Vašich vzduchotechnických
							rozvodů.
						</p>
					</div>
					<div className="flex flex-col items-center space-y-4 mt-10">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="100"
							height="100"
							src="/icons/fix.png"
						/>
						<p className="px-4">
							Poradíme, jak netěsnosti opravit a utěsnit.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
}
