import Image from "next/image";

import { dataPocasi } from "@/components/data/SluzbyStrechy";
import ContainerBila from "@/components/layout/ContainerBila";

export default function Cukr() {
	return (
		<ContainerBila>
			<h3 className="my-5 text-center text-hneda">
				"Nejsme z cukru. Děláme tak, jak je potřeba."
			</h3>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-auto">
				{dataPocasi.map((item) => (
					<div
						key={item.id}
						className="flex flex-col items-center space-y-3 text-center"
					>
						<Image
							style={{ width: "400px" }}
							alt="Ukázka toho jak nás žádné počasí nezastaví"
							width="800"
							height="500"
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							src={item.url}
						/>
						<h4 className="text-zelena">{item.name}</h4>
					</div>
				))}
			</div>
		</ContainerBila>
	);
}
