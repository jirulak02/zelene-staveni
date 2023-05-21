import Image from "next/image";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { data } from "@/components/data/SluzbyTermovize";

export default function Ukazka() {
	return (
		<Container className="bg-bezova py-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">Ukázky snímků</h2>
				<div className="grid grid-cols-auto gap-2">
					{data.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt="Ukázka měření termovizí"
							width="400"
							height="300"
							src={item.url}
						/>
					))}
				</div>
				<Button href="/reference#galerie-termovize">
					ZOBRAZIT VŠECHNY UKÁZKY
				</Button>
			</div>
		</Container>
	);
}
