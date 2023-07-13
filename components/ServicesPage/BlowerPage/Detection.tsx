import Image from "next/image";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Detection() {
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
						className="mb:mx-0 mx-auto"
						alt="Měření pomocí vyvíječe kouře"
						width="200"
						height="250"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/e6837ebd-9046-4dfe-a127-c9312e347c33_kour.png"
					/>
					<Image
						className="mb:mx-0 mx-auto"
						alt="Kontrola těsnosti vzduchotechnických rozvodů"
						width="200"
						height="250"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/b823821f-e8d9-42ea-87b6-ec3410f31e89_duct2.png"
					/>
					<Image
						className="mb:mx-0 mx-auto"
						alt="Měření pomocí anemometru"
						width="200"
						height="140"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/25eb9e20-6e2f-4b6f-86c5-c87d86327d3b_anemometr.png"
					/>
					<Image
						className="mb:mx-0 mx-auto"
						alt="Měření pomocí termovize"
						width="200"
						height="140"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/ed38ffe1-a3dd-4811-bdf3-86ae7e4e6259_infra.png"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2">
					<div className="mt-10 flex flex-col items-center space-y-4">
						<Image
							alt="Ikona úspěchu"
							width="50"
							height="50"
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
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
							alt="Ikona nářadí"
							width="50"
							height="50"
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
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
