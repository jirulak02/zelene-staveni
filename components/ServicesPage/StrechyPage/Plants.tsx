import Image from "next/image";

import { dataPlants } from "@/components/data/ServicesStrechy";
import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Plants() {
	return (
		<ContainerBezova>
			<div className="flex flex-col space-y-3 md:space-y-5">
				<div
					className="m-auto flex items-center justify-center rounded-full bg-neutral-100"
					style={{ width: "120px", height: "120px" }}
				>
					<Image
						alt="Ikona skalničky"
						width={50}
						height={50}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
					/>
				</div>
				<h3 className="text-center text-hneda">Máme vlastní plantáž</h3>
				<Images data={dataPlants} width={200} height={150} />
			</div>
		</ContainerBezova>
	);
}
