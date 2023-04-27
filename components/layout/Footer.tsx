import Image from "next/image";

import Container from "./Container";

export default function Footer() {
	return (
		<Container className="bg-bezova py-10">
			<div className="flex flex-col items-center w-full space-y-3">
				<Image
					style={{ width: "425px" }}
					className="pb-2"
					alt="Zelené stavění logo"
					width="425"
					height="60"
					src="/logo.png"
				/>
				<div>
					<p>Tel: +420 608 974 908</p>
					<p>Email: info@zelenestaveni.cz</p>
				</div>
				<p>
					Copyright © {new Date().getFullYear()} Zelené stavění |
					Všechna práva vyhrazena.
				</p>
			</div>
		</Container>
	);
}
