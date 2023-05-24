import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataKytky } from "@/components/data/SluzbyStrechy";

export default function Plantaz() {
	return (
		<Container className="bg-bezova py-20">
			<div className="flex flex-col space-y-5">
				<div
					className="m-auto flex items-center justify-center rounded-full bg-neutral-100"
					style={{ width: "120px", height: "120px" }}
				>
					<Image
						style={{ width: "50px" }}
						alt="Ikona skalničky"
						width="100"
						height="100"
						src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
					/>
				</div>
				<h3 className="text-center text-hneda">Máme vlastní plantáž</h3>
				<div className="grid grid-cols-auto gap-2">
					{dataKytky.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt="Ukázka našich překrásných suchomilných rostlin"
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
