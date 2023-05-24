import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataSkladba } from "@/components/data/SluzbyKorenovky";

export default function SkladbaKorenovky() {
	return (
		<Container className="my-20">
			<h2 className="mb-10 text-center text-zelena">
				Skladba kořenové čistírny
			</h2>
			{dataSkladba.map((item) => (
				<div key={item.id} className="grid grid-cols-2 gap-2 py-5">
					<div className="space-y-5">
						<h3 className="text-hneda">{item.name}</h3>
						<p>{item.description}</p>
					</div>
					<Image
						style={{ width: "300px" }}
						className="m-auto"
						alt="Ukázka jednotlivých částí kořenové čistírny"
						width="300"
						height="225"
						src={item.url}
					/>
				</div>
			))}
		</Container>
	);
}
