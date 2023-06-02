import Image from "next/image";

import Container from "../layout/Container";
import Button from "../ui/Button";

type ShowCaseProps = {
	title: string;
	data: {
		id: string;
		name: string;
		url: string;
	}[];
};

export default function Showcase({ title, data }: ShowCaseProps) {
	return (
		<Container className="my-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">{title}</h2>
				<div className="grid grid-cols-auto gap-2">
					{data.map((item) => (
						<Image
							key={item.id}
							style={{ width: "200px" }}
							alt={`Ukázka realizace v lokalitě ${item.name}`}
							width="400"
							height="300"
							src={item.url}
						/>
					))}
				</div>
				<Button href="/reference">ZOBRAZIT VŠECHNY REALIZACE</Button>
			</div>
		</Container>
	);
}
