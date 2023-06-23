import Image from "next/image";

import { dataRealizace } from "@/components/data/SluzbyBlowerdoor";
import ContainerBila from "@/components/layout/ContainerBila";
import ImagesVertical from "@/components/layout/ImagesVertical";

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
				<ImagesVertical data={dataRealizace} />
			</div>
		</ContainerBila>
	);
}
