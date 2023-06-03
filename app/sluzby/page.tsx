import Image from "next/image";

import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Button from "@/components/ui/Button";

export const metadata = {
	title: "Služby",
	description: "TODO SEO",
};

export default function Sluzby() {
	return (
		<>
			<ScrollUp />
			<Container>
				<h1 className="my-10 text-zelena">Služby</h1>
				<div className="grid grid-cols-1">
					<div className="grid grid-cols-2">
						<Image
							style={{ width: "800px" }}
							alt="Ukázka realizace zelené střechy"
							width="800"
							height="600"
							priority
							src="https://uploadthing.com/f/b6b46bf0-3b24-41e4-b15c-a2427e5a35fb_klokocna.png"
						/>
						<div className="m-12 flex flex-col items-center justify-center space-y-5 text-center">
							<Image
								style={{ width: "50px" }}
								alt="Ikona skalničky"
								width="100"
								height="100"
								src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
							/>
							<h2 className="text-hneda">ZELENÉ STŘECHY</h2>
							<p>
								Zelené střechy ukládají vodu, vážou prach a
								nezahřívají se. Realizujeme zelené střechy od A
								do Z. Zajistíme i dotaci Nová zelená úsporám.
							</p>
							<Button href="/sluzby/zelene-strechy">
								ZJISTIT VÍCE
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="m-12 flex flex-col items-center justify-center space-y-5 text-center">
							<Image
								style={{ width: "50px" }}
								alt="Ikona recyklace kytek"
								width="100"
								height="100"
								src="https://uploadthing.com/f/5f71b8bc-4212-4b3e-b49e-f8a01fcc8b68_compost.png"
							/>
							<h2 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h2>
							<p>
								Kořenová čistírna odpadních vod je vlastně
								takový malý přírodní mokřad. Slouží k čištění
								odpadních vod z domácnosti.
							</p>
							<Button href="/sluzby/korenove-cistirny">
								ZJISTIT VÍCE
							</Button>
						</div>
						<Image
							style={{ width: "800px" }}
							alt="Ukázka realizace kořenové čistírny"
							width="800"
							height="600"
							src="https://uploadthing.com/f/cb34b41a-adb9-4205-b398-a7f052a86422_rko5.png"
						/>
					</div>
					<div className="grid grid-cols-2">
						<Image
							style={{ width: "800px" }}
							alt="Ukázka měření blower door testu"
							width="800"
							height="600"
							src="https://uploadthing.com/f/952afa6a-d900-459d-b39e-b619267a3070_bytovy_dum_velky.png"
						/>
						<div className="m-12 flex flex-col items-center justify-center space-y-5 text-center">
							<Image
								style={{ width: "50px" }}
								alt="Ikona fénu"
								width="100"
								height="100"
								src="https://uploadthing.com/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
							/>
							<h2 className="text-hneda">BLOWER DOOR TEST</h2>
							<p>
								Test Blower Door je vyžadován především u
								pasivních a nízkoenergetických domů. Test je
								vhodné provést již v průběhu výstavby domu po
								zabudování oken a venkovních dveří, kdy je možno
								ještě relativně snadno opravit zjištěné
								netěsnosti.
							</p>
							<Button href="/sluzby/blower-door-test">
								ZJISTIT VÍCE
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="m-12 flex flex-col items-center justify-center space-y-5 text-center">
							<Image
								style={{ width: "50px" }}
								alt="Ikona kamery v domě"
								width="100"
								height="100"
								src="https://uploadthing.com/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
							/>
							<h2 className="text-hneda">TERMOVIZE</h2>
							<p>
								Závady v zateplení budov či v topných systémech
								je možno zjišťovat v topné sezóně, tedy v zimním
								období. Měření termokamerou je možno provádět i
								za tmy.
							</p>
							<Button href="/sluzby/termovize">
								ZJISTIT VÍCE
							</Button>
						</div>
						<Image
							style={{ width: "800px" }}
							alt="Ukázka měření temovizí"
							width="800"
							height="600"
							src="https://uploadthing.com/f/f94bf8dc-61c3-4574-ae59-b95ca908cdfd_budova_velka.png"
						/>
					</div>
				</div>
			</Container>
		</>
	);
}
