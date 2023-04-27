import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
	return (
		<div className="bg-neutral-200 pb-12">
			<div className="relative" style={{ height: "700px" }}>
				<Image
					style={{ height: "700px" }}
					alt="TODO"
					width="2000"
					height="700"
					src="/main.jpeg"
				/>
				<div className="absolute flex flex-col top-0 h-full w-full justify-center items-center text-neutral-100">
					<h1 className="text-7xl">ZELENÉ</h1>
					<h1 className="text-7xl">STAVĚNÍ</h1>
					<h2 className="font-normal">... trochu jiné stavění</h2>
				</div>
			</div>
			<Container className=" -mt-24 relative z-10">
				<Image
					style={{ width: "1280px" }}
					alt="TODO"
					width="1440"
					height="20"
					src="/grass.png"
				/>
				<div className="grid grid-cols-4 bg-neutral-100 -mt-1">
					<div className="flex flex-col text-center items-center px-10 my-10 space-y-3 bg-neutral-100 border-r-2 border-neutral-300">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="50"
							height="50"
							src="/square.jpeg"
						/>
						<h3 className="text-hneda">ZELENÉ STŘECHY</h3>
						<p>Ukládají vodu, vážou prach a nezahřívají se.</p>
						<Button href="/sluzby/zelene-strechy">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col text-center items-center px-10 my-10 space-y-3 bg-neutral-100 border-r-2 border-neutral-300">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="50"
							height="50"
							src="/square.jpeg"
						/>
						<h3 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h3>
						<p>Přírodní čistírna odpadních vod domácností.</p>
						<Button href="/sluzby/korenove-cistirny">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col text-center items-center px-10 my-10 space-y-3 bg-neutral-100 border-r-2 border-neutral-300">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="50"
							height="50"
							src="/square.jpeg"
						/>
						<h3 className="text-hneda">BLOWER DOOR TEST</h3>
						<p>Test vzduchotěsnosti obálky budov a bytů.</p>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col text-center items-center px-10 my-10 space-y-3 bg-neutral-100">
						<Image
							style={{ width: "50px" }}
							alt="TODO"
							width="50"
							height="50"
							src="/square.jpeg"
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
