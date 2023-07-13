import { dataRealization } from "@/components/data/ServicesKorenovky";
import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Realization() {
	return (
		<ContainerBezova>
			<div className="space-y-6 md:space-y-10">
				<h2 className="text-center text-zelena">Realizace</h2>
				<Images data={dataRealization} width={200} height={150} />
			</div>
		</ContainerBezova>
	);
}
