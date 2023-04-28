import Image from "next/image";

import Container from "../layout/Container";
import Button from "../ui/Button";

const array1 = Array(10).fill(0);

export default function Showcase() {
	return (
		<Container className="my-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">UKÁZKA REALIZACÍ</h2>
				<div className="grid grid-cols-auto">
					{array1.map((item) => (
						<Image
							key={Math.random().toString()}
							style={{ width: "150px" }}
							className="items-center m-2"
							alt="TODO"
							width="150"
							height="150"
							src="/square.jpeg"
						/>
					))}
				</div>
				<Button href="/reference">ZOBRAZIT VŠECHNY REALIZACE</Button>
			</div>
		</Container>
	);
}
