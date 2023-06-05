import { dataRealizace } from "@/components/data/SluzbyKorenovky";
import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Realizace() {
	return (
		<ContainerBezova>
			<div className="space-y-6 md:space-y-10">
				<h2 className="text-center text-zelena">Realizace</h2>
				<Images data={dataRealizace} />
			</div>
		</ContainerBezova>
	);
}
