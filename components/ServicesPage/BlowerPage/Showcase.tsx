import Image from "next/image";

import Container from "@/components/layout/Container";

const array1 = Array(10).fill(0);

export default function Showcase() {
	return (
		<Container className="my-20">
			<div className="space-y-5">
				<h2 className="text-zelena text-center">
					Kde všude provádíme test
				</h2>
				<p className="text-center max-w-xl mx-auto">
					Měření provádíme i v bytových domech nebo průmyslových
					objektech, kde je potřeba použít více měřících souprav.
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
			</div>
		</Container>
	);
}
