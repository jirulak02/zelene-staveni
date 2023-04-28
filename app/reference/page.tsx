import Image from "next/image";

import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Button from "@/components/ui/Button";

export const metadata = {
	title: "Reference",
	description: "TODO SEO",
};

const array1 = Array(40).fill(0);
const array2 = Array(6).fill(0);
const array3 = Array(9).fill(0);
const array4 = Array(16).fill(0);

export default function Reference() {
	return (
		<>
			<ScrollUp />
			<Container>
				<h1 className="text-zelena my-10">Reference</h1>
				<p>Prohlédněte si fotografie našich prací</p>
				<div className="grid grid-cols-4 my-10">
					<Button href="/reference/#galerie-zelene-strechy">
						ZELENÉ STŘECHY
					</Button>
					<Button href="/reference/#galerie-korenove-cistirny">
						KOŘENOVÉ ČISTÍRNY
					</Button>
					<Button href="/reference/#galerie-blower-door-test">
						BLOWER DOOR TEST
					</Button>
					<Button href="/reference/#galerie-termovize">
						TERMOVIZE
					</Button>
				</div>
			</Container>
			<Container className="bg-bezova py-10">
				<h2
					id="galerie-zelene-strechy"
					className="text-center text-zelena py-10"
				>
					ZELENÉ STŘECHY
				</h2>
				<div className="grid grid-cols-auto mb-10">
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
			</Container>
			<Container className="py-10">
				<h2
					id="galerie-korenove-cistirny"
					className="text-center text-zelena py-10"
				>
					KOŘENOVÉ ČISTÍRNY
				</h2>
				<div className="grid grid-cols-auto mb-10">
					{array2.map((item) => (
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
			</Container>
			<Container className="bg-bezova py-10">
				<h2
					id="galerie-blower-door-test"
					className="text-center text-zelena py-10"
				>
					BLOWER DOOR TEST
				</h2>
				<div className="grid grid-cols-auto mb-10">
					{array3.map((item) => (
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
			</Container>
			<Container className="py-10">
				<h2
					id="galerie-termovize"
					className="text-center text-zelena py-10"
				>
					TERMOVIZE
				</h2>
				<div className="grid grid-cols-auto mb-10">
					{array4.map((item) => (
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
			</Container>
		</>
	);
}
