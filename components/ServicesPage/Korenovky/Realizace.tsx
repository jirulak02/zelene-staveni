import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataRealizace } from "@/components/data/SluzbyKorenovky";

export default function Realizace() {
	return (
		<Container className="bg-bezova py-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">Realizace</h2>
				<div className="grid grid-cols-auto gap-2">
					{dataRealizace.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt="Ukázka reliazací kořenových čistíren"
							width="400"
							height="300"
							src={item.url}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
