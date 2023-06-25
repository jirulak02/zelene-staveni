import { dataRealizace } from "@/components/data/SluzbyBlowerdoor";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

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
				<Images data={dataRealizace} width={200} height={250} />
			</div>
		</ContainerBila>
	);
}
