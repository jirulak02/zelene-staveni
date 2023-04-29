import Image from "next/image";

import Container from "@/components/layout/Container";

const array1 = Array(10).fill(0);

export default function Realizace() {
	return (
		<Container className="bg-bezova py-20">
			<div className="space-y-10">
				<h2 className="text-center text-zelena">REALIZACE</h2>
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
			</div>
		</Container>
	);
}
