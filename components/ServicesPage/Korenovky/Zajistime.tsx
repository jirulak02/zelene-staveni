import Image from "next/image";

import Container from "@/components/layout/Container";
import { dataZajistime } from "@/components/data/SluzbyKorenovky";

export default function Zajistime() {
	return (
		<Container className="bg-bezova py-20">
			<h3 className="text-center text-hneda">
				Co všechno pro vás zajistíme
			</h3>
			<div className="grid grid-cols-auto">
				{dataZajistime.map((item) => (
					<div
						key={item.id}
						className="flex flex-col text-center items-center space-y-8 my-10"
					>
						<Image
							style={{ width: "50px" }}
							alt="Ikony na podporu vysvětlení"
							width="100"
							height="100"
							src={item.url}
						/>
						<h5>{item.name}</h5>
					</div>
				))}
			</div>
		</Container>
	);
}
