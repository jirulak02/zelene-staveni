import Image from "next/image";

import { dataZajistime } from "@/components/data/SluzbyKorenovky";
import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Zajistime() {
	return (
		<ContainerBezova>
			<h3 className="text-center text-hneda">
				Co všechno pro vás zajistíme
			</h3>
			<div className="grid grid-cols-auto">
				{dataZajistime.map((item) => (
					<div
						key={item.id}
						className="my-4 flex flex-col items-center space-y-4 text-center md:my-10 md:space-y-8"
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
		</ContainerBezova>
	);
}
