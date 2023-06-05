import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Netesnost() {
	return (
		<ContainerBezova>
			<div className="space-y-5">
				<h2 className="text-center text-zelena">Detekce netěsnosti</h2>
				<p className="mx-auto max-w-xl">
					Současně s provedením testu nabízíme detekci netěsností.
					Netěsnosti je možno zjistit pomocí různých pomůcek. Kromě
					prvotního zjištění pomocí dlaně používáme detekci pomocí
					anemometru, vyvíječe kouře a termovize.
				</p>
				<div className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-auto">
					<Image
						className="mb:mx-0 mx-auto w-[200px]"
						alt="Měření pomocí vyvíječe kouře"
						width="400"
						height="532"
						src="https://uploadthing.com/f/3abab34b-5fc0-43bd-b5d9-e40d4c362c22_kour.png"
					/>
					<Image
						className="mb:mx-0 mx-auto w-[200px]"
						alt="Kontrola těsnosti vzduchotechnických rozvodů"
						width="400"
						height="532"
						src="https://uploadthing.com/f/ac4ea7eb-861e-47f6-ba60-3c48dc9dd3f8_duct2.png"
					/>
					<Image
						className="mb:mx-0 mx-auto w-[200px]"
						alt="Měření pomocí anemometru"
						width="400"
						height="281"
						src="https://uploadthing.com/f/b376f13a-8eba-4b98-973f-91054366db1b_anemometr.png"
					/>
					<Image
						className="mb:mx-0 mx-auto w-[200px]"
						alt="Měření pomocí termovize"
						width="400"
						height="281"
						src="https://uploadthing.com/f/65d3c4d3-6f9d-4aa8-94fd-a326bd83927c_infra.png"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2">
					<div className="mt-10 flex flex-col items-center space-y-4">
						<Image
							style={{ width: "50px" }}
							alt="Ikona úspěchu"
							width="100"
							height="100"
							src="https://uploadthing.com/f/e53ce9d3-e19d-4a66-9be2-dc0236dd032a_done.png"
						/>
						<p className="px-4">
							Pro správné fungování vzduchotechniky je důležitá
							její správná instalace. Měření provedené k tomu
							speciálně určeným přístrojem Minneapolis DuctBlaster
							prověří kvalitu provedení Vašich vzduchotechnických
							rozvodů.
						</p>
					</div>
					<div className="mt-10 flex flex-col items-center space-y-4">
						<Image
							style={{ width: "50px" }}
							alt="Ikona nářadí"
							width="100"
							height="100"
							src="https://uploadthing.com/f/6f631673-48aa-4c26-b785-2e18107f8861_fix.png"
						/>
						<p className="px-4">
							Poradíme, jak netěsnosti opravit a utěsnit.
						</p>
					</div>
				</div>
			</div>
		</ContainerBezova>
	);
}
