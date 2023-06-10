import Image from "next/image";

import { dataSkladba } from "@/components/data/SluzbyKorenovky";
import ContainerBila from "@/components/layout/ContainerBila";

export default function SkladbaKorenovky() {
	return (
		<ContainerBila>
			<h2 className="text-center text-zelena md:mb-10">
				Skladba kořenové čistírny
			</h2>
			{dataSkladba.map((item) => (
				<div
					key={item.id}
					className="grid grid-cols-1 gap-2 py-5 md:grid-cols-2"
				>
					<div className="space-y-2 md:space-y-5">
						<h3 className="text-hneda">{item.name}</h3>
						<p>{item.description}</p>
					</div>
					<Image
						style={{ width: "300px" }}
						className="m-auto"
						alt="Ukázka jednotlivých částí kořenové čistírny"
						width="300"
						height="225"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src={item.url}
					/>
				</div>
			))}
		</ContainerBila>
	);
}
