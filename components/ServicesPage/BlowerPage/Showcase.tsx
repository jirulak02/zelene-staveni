import Image from "next/image";

import { dataRealizace } from "@/components/data/SluzbyBlowerdoor";
import ContainerBila from "@/components/layout/ContainerBila";

export default function Showcase() {
	return (
		<ContainerBila>
			<div className="space-y-4 md:space-y-5">
				<h2 className="text-center text-zelena">
					Kde všude provádíme test
				</h2>
				<p className="mx-auto max-w-xl text-center">
					Měření provádíme i v bytových domech nebo průmyslových
					objektech, kde je potřeba použít více měřících souprav.
				</p>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
					{dataRealizace.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							className="mx-auto sm:mx-0"
							alt={item.name}
							width="400"
							height="532"
							src={item.url}
						/>
					))}
				</div>
			</div>
		</ContainerBila>
	);
}
