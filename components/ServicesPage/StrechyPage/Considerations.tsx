import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Considerations() {
	return (
		<Container className="bg-bezova py-20">
			<h2 className="text-center text-zelena mb-10">
				Realizujeme zelené střechy od A do Z
			</h2>
			<h3 className="text-center text-hneda">
				Na co myslet před realizací zelené střechy?
			</h3>
			<h3 className="text-center text-hneda">
				Ujasněte si tyto základní body:
			</h3>
			<div className="grid grid-cols-3 mt-5">
				<div className="flex flex-col text-center items-center p-4 space-y-3">
					<div
						className="flex items-center justify-center bg-neutral-100 rounded-full"
						style={{ width: "120px", height: "120px" }}
					>
						<Image
							style={{ width: "50px" }}
							className="m-2"
							alt="TODO"
							width="100"
							height="100"
							src="/icons/compare.png"
						/>
					</div>
					<h5>Jaký styl se Vám líbí</h5>
				</div>
				<div className="flex flex-col text-center items-center p-4 space-y-3">
					<div
						className="flex items-center justify-center bg-neutral-100 rounded-full"
						style={{ width: "120px", height: "120px" }}
					>
						<Image
							style={{ width: "50px" }}
							className="m-2"
							alt="TODO"
							width="100"
							height="100"
							src="/icons/savings.png"
						/>
					</div>
					<h5>Kolik chcete investovat</h5>
				</div>
				<div className="flex flex-col text-center items-center p-4 space-y-3">
					<div
						className="flex items-center justify-center bg-neutral-100 rounded-full"
						style={{ width: "120px", height: "120px" }}
					>
						<Image
							style={{ width: "50px" }}
							className="m-2"
							alt="TODO"
							width="100"
							height="100"
							src="/icons/foundation.png"
						/>
					</div>
					<h5>Možné zatížení střešní konstrukce</h5>
				</div>
			</div>
		</Container>
	);
}
