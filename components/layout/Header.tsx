"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "./Container";
import Navbar from "./Navbar";

export const paths = [
	"/",
	"/sluzby/zelene-strechy",
	"/sluzby/korenove-cistirny",
	"/sluzby/blower-door-test",
	"/sluzby/termovize",
	"/sluzby/dotace",
];

function Header() {
	const pathname = usePathname();
	let white = paths.includes(pathname);

	return (
		<header className="justify-right relative z-30 w-full border-b border-neutral-800">
			<Container className="border-b border-neutral-300 bg-neutral-100">
				<div className="flex h-12 space-x-12 text-zelena">
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
							className="border-b border-neutral-100 hover:border-zelena"
							href="tel:+420608974908"
							target="_blank"
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
							className="border-b border-neutral-100 hover:border-zelena"
							href="mailto:info@zelenestaveni.cz"
							target="_blank"
						>
							info@zelenestaveni.cz
						</a>
					</div>
				</div>
			</Container>
			<Container className="border-b border-neutral-100">
				<div className="flex h-20 items-center justify-between">
					<Link href="/">
						<Image
							style={{ width: "212px" }}
							className="pb-2"
							alt="Zelené stavění logo"
							width="425"
							height="60"
							src={`${
								white
									? "https://uploadthing.com/f/060f0ca7-f91e-48e4-b29e-7bcda594aa70_logo%20white.png"
									: "https://uploadthing.com/f/326f6103-6c38-49a4-9615-3b1846a1a9f2_logo.png"
							}`}
						/>
					</Link>
					<Navbar />
				</div>
			</Container>
		</header>
	);
}

export default Header;
