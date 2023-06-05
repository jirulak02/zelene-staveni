import { dataRostliny } from "@/components/data/SluzbyKorenovky";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Rostliny() {
	return (
		<ContainerBila>
			<div className="space-y-6 md:space-y-10">
				<h2 className="text-center text-zelena">Naše rostliny</h2>
				<Images data={dataRostliny} />
			</div>
		</ContainerBila>
	);
}
