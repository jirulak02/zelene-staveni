import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

export default function Footer() {
	return (
		<Container className="bg-bezova py-20">
			<div className="flex flex-col items-center w-full space-y-3">
				<Image
					style={{ width: "425px" }}
					className="pb-2"
					alt="Zelené stavění logo"
					width="425"
					height="60"
					src="/logo.png"
				/>
				<div className="text-center">
					<p>
						Tel:{" "}
						<a
							href="tel:+420608974908"
							className="border-b-2 border-bezova hover:border-neutral-800"
						>
							+420 608 974 908
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:info@zelenestaveni.cz"
							className="border-b-2 border-bezova hover:border-neutral-800"
						>
							info@zelenestaveni.cz
						</a>
					</p>
				</div>
				<div className="text-center">
					<p className="text-xs">
						Copyright © {new Date().getFullYear()} Zelené stavění |
						Všechna práva vyhrazena.
					</p>
					<Link
						href="/ochrana-osobnich-udaju"
						className="text-xs border-b-2 border-bezova hover:border-neutral-800"
					>
						Zásady ochrany osobních údajů
					</Link>
				</div>
			</div>
		</Container>
	);
}
