import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataRostliny } from "@/components/data/SluzbyKorenovky";

export default function Rostliny() {
	return (
		<Container className="my-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">NAŠE ROSTLINY</h2>
				<div className="grid grid-cols-auto gap-2">
					{dataRostliny.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt={`Ukázka rostliny ${item.name}`}
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
