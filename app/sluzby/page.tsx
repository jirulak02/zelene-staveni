import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
	title: "Služby",
	description: "TODO SEO",
};

export default function Sluzby() {
	return (
		<>
			<ScrollUp />
			<Container className="mb-20">
				<h1 className="text-zelena my-10">Služby</h1>
				<div className="grid grid-cols-1">
					<div className="grid grid-cols-2">
						<Image
							style={{ height: "600px" }}
							alt="TODO"
							width="800"
							height="600"
							src="/square.jpeg"
						/>
						<div className="flex flex-col items-center justify-center text-center m-20 space-y-5">
							<Image
								style={{ width: "50px" }}
								alt="TODO"
								width="100"
								height="100"
								src="/icons/flowers.png"
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
						<div className="flex flex-col items-center justify-center text-center m-20 space-y-5">
							<Image
								style={{ width: "50px" }}
								alt="TODO"
								width="100"
								height="100"
								src="/icons/compost.png"
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
							style={{ height: "600px" }}
							alt="TODO"
							width="800"
							height="600"
							src="/square.jpeg"
						/>
					</div>
					<div className="grid grid-cols-2">
						<Image
							style={{ height: "600px" }}
							alt="TODO"
							width="800"
							height="600"
							src="/square.jpeg"
						/>
						<div className="flex flex-col items-center justify-center text-center m-20 space-y-5">
							<Image
								style={{ width: "50px" }}
								alt="TODO"
								width="100"
								height="100"
								src="/icons/fan+.png"
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
						<div className="flex flex-col items-center justify-center text-center m-20 space-y-5">
							<Image
								style={{ width: "50px" }}
								alt="TODO"
								width="100"
								height="100"
								src="/icons/camera.png"
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
							style={{ height: "600px" }}
							alt="TODO"
							width="800"
							height="600"
							src="/square.jpeg"
						/>
					</div>
				</div>
			</Container>
		</>
	);
}
