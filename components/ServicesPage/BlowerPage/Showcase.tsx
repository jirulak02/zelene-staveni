import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataRealizace } from "@/components/data/SluzbyBlowerdoor";

export default function Showcase() {
	return (
		<Container className="my-20">
			<div className="space-y-5">
				<h2 className="text-center text-zelena">
					Kde všude provádíme test
				</h2>
				<p className="mx-auto max-w-xl text-center">
					Měření provádíme i v bytových domech nebo průmyslových
					objektech, kde je potřeba použít více měřících souprav.
				</p>
				<div className="grid grid-cols-auto gap-2">
					{dataRealizace.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt={item.name}
							width="400"
							height="532"
							src={item.url}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
