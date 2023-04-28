"use client";

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

import Container from "./Container";

const links = [
	{ path: "/", name: "Úvod" },
	{ path: "/sluzby", name: "Služby" },
	{ path: "/reference", name: "Reference" },
	{ path: "/kontakt", name: "Kontakt" },
];

// const subLinks = [
// 	{ path: "/zelene-strechy", name: "Zelené střechy" },
// 	{ path: "/korenove-cistirny", name: "Kořenové čistírny" },
// 	{ path: "/blower-door-test", name: "Blower Door test" },
// 	{ path: "/termovize", name: "Termovize" },
// 	{ path: "/dotace", name: "Dotace" },
// ];

function Header() {
	// const pathname = usePathname();

	return (
		<header className="w-full sm:justify-right bg-neutral-100 border-b border-neutral-800">
			<Container className="border-b border-neutral-300">
				<div className="flex space-x-12 text-zelena h-12">
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							viewBox="0 96 960 960"
							width="16"
						>
							<path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" />
						</svg>
						<a
							href="tel:+420608974908"
							className="border-b-2 border-neutral-100 hover:border-zelena"
						>
							608 974 908
						</a>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							viewBox="0 96 960 960"
							width="16"
						>
							<path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
						</svg>
						<a
							href="mailto:info@zelenestaveni.cz"
							className="border-b-2 border-neutral-100 hover:border-zelena"
						>
							info@zelenestaveni.cz
						</a>
					</div>
				</div>
			</Container>
			<Container className="sm:border-b-2 sm:border-slate-100">
				<div className="h-20 flex items-center justify-between">
					<Link href="/">
						<Image
							style={{ width: "212px" }}
							className="pb-2"
							alt="Zelené stavění logo"
							width="425"
							height="60"
							src="/logo.png"
						/>
					</Link>
					<div className="flex items-center space-x-2">
						{links.map((link) => (
							<Link
								key={link.path}
								href={link.path}
								className="p-3 border-b-2 border-neutral-100 hover:border-neutral-800"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
