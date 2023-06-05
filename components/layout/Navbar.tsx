"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Container from "./Container";

const paths = [
	"/",
	"/sluzby/zelene-strechy",
	"/sluzby/korenove-cistirny",
	"/sluzby/blower-door-test",
	"/sluzby/termovize",
	"/sluzby/dotace",
];

function Navbar() {
	const [openBurger, setOpenBurger] = useState(false);
	const [openSluzby, setOpenSluzby] = useState(false);
	const [white, setWhite] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setWhite(paths.includes(pathname));
	}, [pathname]);

	function toggleHandler() {
		setOpenBurger((prevState) => !prevState);
	}

	function closeHandler() {
		setOpenBurger(false);
	}

	return (
		<Container className="border-b border-neutral-100">
			<div className="relative flex h-20 items-center justify-between">
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
				<button
					className="translate-x-4 cursor-pointer p-5 sm:hidden"
					onClick={toggleHandler}
				>
					<svg
						width="28"
						height="20"
						viewBox="0 0 28 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="28"
							height="4"
							rx="2"
							fill={`${
								white
									? "rgb(var(--background-rgb))"
									: "rgb(var(--foreground-rgb))"
							}`}
						/>
						<rect
							y="8"
							width="28"
							height="4"
							rx="2"
							fill={`${
								white
									? "rgb(var(--background-rgb))"
									: "rgb(var(--foreground-rgb))"
							}`}
						/>
						<rect
							y="16"
							width="28"
							height="4"
							rx="2"
							fill={`${
								white
									? "rgb(var(--background-rgb))"
									: "rgb(var(--foreground-rgb))"
							}`}
						/>
					</svg>
				</button>
				<nav
					className={`sm:flex sm:items-center sm:space-x-2 ${
						openBurger
							? "absolute top-16 z-20 flex w-full flex-col rounded-xl border border-neutral-800 bg-neutral-100"
							: "hidden"
					}`}
				>
					<button>
						<Link
							href="/"
							onClick={closeHandler}
							className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
								white && "sm:text-neutral-100"
							}`}
						>
							Úvod
						</Link>
					</button>
					<div className="relative ml-0">
						<button
							onFocus={() => setOpenSluzby(true)}
							onBlur={async () =>
								await setTimeout(
									() => setOpenSluzby(false),
									100
								)
							}
							className={`block w-full rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
								white && "sm:text-neutral-100"
							}`}
						>
							{openSluzby ? (
								<Link
									href="/sluzby"
									className="block"
									onClick={closeHandler}
								>
									Služby
								</Link>
							) : (
								<div>Služby</div>
							)}
						</button>
						<ul
							className={`absolute left-28 top-3 flex min-w-max list-none flex-col rounded-xl border border-neutral-800 bg-neutral-100 text-neutral-800 transition-all duration-300 sm:left-0 sm:top-12 ${
								!openSluzby &&
								"pointer-events-none -translate-y-3 opacity-0"
							}`}
						>
							<li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
								<Link
									href="/sluzby/zelene-strechy"
									onClick={closeHandler}
								>
									<div className="px-3 py-1.5">
										Zelené střechy
									</div>
								</Link>
							</li>
							<li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
								<Link
									href="/sluzby/korenove-cistirny"
									onClick={closeHandler}
								>
									<div className="px-3 py-1.5">
										Kořenové čistírny
									</div>
								</Link>
							</li>
							<li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
								<Link
									href="/sluzby/blower-door-test"
									onClick={closeHandler}
								>
									<div className="px-3 py-1.5">
										Blower Door test
									</div>
								</Link>
							</li>
							<li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
								<Link
									href="/sluzby/termovize"
									onClick={closeHandler}
								>
									<div className="px-3 py-1.5">Termovize</div>
								</Link>
							</li>
							<li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
								<Link
									href="/sluzby/dotace"
									onClick={closeHandler}
								>
									<div className="px-3 py-1.5">Dotace</div>
								</Link>
							</li>
						</ul>
					</div>
					<button>
						<Link
							href="/reference"
							className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
								white && "sm:text-neutral-100"
							}`}
							onClick={closeHandler}
						>
							Reference
						</Link>
					</button>
					<button>
						<Link
							href="/kontakt"
							className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
								white && "sm:text-neutral-100"
							}`}
							onClick={closeHandler}
						>
							Kontakt
						</Link>
					</button>
				</nav>
			</div>
		</Container>
	);
}

export default Navbar;
