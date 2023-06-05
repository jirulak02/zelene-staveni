import Image from "next/image";
import Link from "next/link";

import ContainerBezova from "./ContainerBezova";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<ContainerBezova>
			<div className="flex w-full flex-col items-center space-y-3">
				<Image
					className="w-[300px] pb-2 md:w-[425px]"
					alt="Zelené stavění logo"
					width="425"
					height="60"
					src="https://uploadthing.com/f/326f6103-6c38-49a4-9615-3b1846a1a9f2_logo.png"
				/>
				<div className="text-center">
					<p>
						Tel:{" "}
						<a
							className="border-b border-bezova hover:border-neutral-800"
							href="tel:+420608974908"
							target="_blank"
						>
							+420 608 974 908
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="border-b border-bezova hover:border-neutral-800"
							href="mailto:info@zelenestaveni.cz"
							target="_blank"
						>
							info@zelenestaveni.cz
						</a>
					</p>
				</div>
				<div className="text-center">
					<p className="text-xs">
						Copyright © {year} Zelené stavění | Všechna práva
						vyhrazena.
					</p>
					<Link
						href="/ochrana-osobnich-udaju"
						className="border-b border-bezova text-xs hover:border-neutral-800"
					>
						Zásady ochrany osobních údajů
					</Link>
				</div>
			</div>
		</ContainerBezova>
	);
}
