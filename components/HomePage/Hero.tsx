import Image from "next/image";

import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
	return (
		<div className="-mt-image pb-12">
			<div className="relative" style={{ height: "700px" }}>
				<div
					style={{
						position: "relative",
						overflow: "hidden",
						height: "700px",
					}}
				>
					<Image
						src="https://uploadthing.com/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
						alt="Ukázka realizace"
						fill={true}
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-shadow text-neutral-100">
					<h1 className="text-7xl">ZELENÉ</h1>
					<h1 className="text-7xl">STAVĚNÍ</h1>
					<h3 className="mt-3 font-normal">
						... trochu jiné stavění
					</h3>
				</div>
			</div>
			<Container className="relative z-10 -mt-24">
				<Image
					style={{ width: "1280px" }}
					alt="Zkrášlovací prvek trávy"
					width="1440"
					height="20"
					src="https://uploadthing.com/f/9cf7d25b-ef5b-4d2c-af1e-bff3321a4813_grass.png"
				/>
				<div className="-mt-1 grid grid-cols-4 bg-neutral-100 shadow-lg shadow-neutral-400">
					<div className="my-10 flex flex-col items-center space-y-3 border-r-2 border-neutral-300 bg-neutral-100 px-10 text-center">
						<Image
							style={{ width: "50px" }}
							alt="Ikona skalničky"
							width="100"
							height="100"
							src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
						/>
						<h3 className="text-hneda">ZELENÉ STŘECHY</h3>
						<p>Ukládají vodu, vážou prach a nezahřívají se.</p>
						<Button href="/sluzby/zelene-strechy">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="my-10 flex flex-col items-center space-y-3 border-r-2 border-neutral-300 bg-neutral-100 px-10 text-center">
						<Image
							style={{ width: "50px" }}
							alt="Ikona recyklace kytek"
							width="100"
							height="100"
							src="https://uploadthing.com/f/5f71b8bc-4212-4b3e-b49e-f8a01fcc8b68_compost.png"
						/>
						<h3 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h3>
						<p>Přírodní čistírna odpadních vod domácností.</p>
						<Button href="/sluzby/korenove-cistirny">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="my-10 flex flex-col items-center space-y-3 border-r-2 border-neutral-300 bg-neutral-100 px-10 text-center">
						<Image
							style={{ width: "50px" }}
							alt="Ikona fénu"
							width="100"
							height="100"
							src="https://uploadthing.com/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
						/>
						<h3 className="text-hneda">BLOWER DOOR TEST</h3>
						<p>Test vzduchotěsnosti obálky budov a bytů.</p>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="my-10 flex flex-col items-center space-y-3 bg-neutral-100 px-10 text-center">
						<Image
							style={{ width: "50px" }}
							alt="Ikona kamery v domě"
							width="100"
							height="100"
							src="https://uploadthing.com/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
						/>
						<h3 className="text-hneda">MĚŘENÍ ÚNIKU TEPLA</h3>
						<p>
							Měření úniku tepla kvalitní termokamerou Fluke Ti10.
						</p>
						<Button href="/sluzby/termovize">ZJISTIT VÍCE</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
