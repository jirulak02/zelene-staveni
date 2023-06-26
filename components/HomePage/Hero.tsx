import Image from "next/image";

import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
	return (
		<div className="-mt-image pb-12">
			<div className="relative h-[400px] md:h-[700px]">
				<div className="relative h-[400px] overflow-hidden md:h-[700px]">
					<Image
						src="https://uploadthing.com/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
						alt="Ukázka realizace"
						fill={true}
						quality={100}
						priority
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-shadow text-neutral-100">
					<h1 className="md:text-7xl">ZELENÉ</h1>
					<h1 className="md:text-7xl">STAVĚNÍ</h1>
					<h3 className="mt-3 font-normal">
						... trochu jiné stavění
					</h3>
				</div>
			</div>
			<Container className="relative z-10 -mt-16 md:-mt-24">
				<Image
					style={{ width: "1280px" }}
					alt="Zkrášlovací prvek trávy"
					width={1280}
					height={18}
					priority
					src="https://uploadthing.com/f/9f519bb7-eb54-4d37-b958-b7da531941df_grass.png"
				/>
				<div className="-mt-1 grid grid-cols-1 bg-neutral-100 shadow-lg shadow-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 sm:border-r-2 lg:my-10 lg:border-b-0 lg:px-10">
						<Image
							alt="Ikona skalničky"
							width={50}
							height={50}
							quality={100}
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
						/>
						<h3 className="text-hneda">ZELENÉ STŘECHY</h3>
						<p>Ukládají vodu, vážou prach a nezahřívají se.</p>
						<Button href="/sluzby/zelene-strechy">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 lg:my-10 lg:border-b-0 lg:border-r-2 lg:px-10">
						<Image
							alt="Ikona recyklace kytek"
							width={50}
							height={50}
							quality={100}
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							src="https://uploadthing.com/f/5f71b8bc-4212-4b3e-b49e-f8a01fcc8b68_compost.png"
						/>
						<h3 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h3>
						<p>Přírodní čistírna odpadních vod domácností.</p>
						<Button href="/sluzby/korenove-cistirny">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 sm:border-b-0 sm:border-r-2 lg:my-10 lg:px-10">
						<Image
							alt="Ikona fénu"
							width={50}
							height={50}
							quality={100}
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							src="https://uploadthing.com/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
						/>
						<h3 className="text-hneda">BLOWER DOOR TEST</h3>
						<p>Test vzduchotěsnosti obálky budov a bytů.</p>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 lg:my-10 lg:px-10">
						<Image
							alt="Ikona kamery v domě"
							width={50}
							height={50}
							quality={100}
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							src="https://uploadthing.com/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
						/>
						<h3 className="text-hneda">MĚŘENÍ ÚNIKU TEPLA</h3>
						<p>Měření úniku tepla kvalitní termokamerou.</p>
						<Button href="/sluzby/termovize">ZJISTIT VÍCE</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
