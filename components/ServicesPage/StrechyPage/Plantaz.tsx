import Image from "next/image";

import Container from "@/components/layout/Container";

const array1 = Array(5).fill(0);

export default function Plantaz() {
	return (
		<Container className="bg-bezova py-20">
			<div className="flex flex-col space-y-5">
				<div
					className="flex m-auto items-center justify-center bg-neutral-100 rounded-full"
					style={{ width: "120px", height: "120px" }}
				>
					<Image
						style={{ width: "50px" }}
						className="m-2"
						alt="TODO"
						width="100"
						height="100"
						src="/icons/flowers.png"
					/>
				</div>
				<h3 className="text-center text-hneda">Máme vlastní plantáž</h3>
				<div className="grid grid-cols-auto">
					{array1.map((item) => (
						<Image
							key={Math.random().toString()}
							style={{ width: "150px" }}
							className="m-auto"
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
