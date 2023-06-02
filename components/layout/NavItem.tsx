"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavDropdown from "./NavDropdown";
import { MyLink } from "./Navbar";
import { paths } from "./Header";

export type NavItemProps = {
	items: MyLink;
};

function NavItem({ items }: NavItemProps) {
	const [dropdown, setDropdown] = useState(false);
	const [url, setUrl] = useState("");
	const [white, setWhite] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setWhite(paths.includes(pathname));
	}, [pathname]);

	function changeUrlHandler(newUrl: string) {
		setUrl(newUrl);
	}

	return (
		<>
			{items.submenu ? (
				<Link
					href={"/sluzby" + url}
					className={`px-3 py-4 ${white && "text-neutral-100"}`}
					onMouseEnter={() => {
						setDropdown(true);
					}}
					onMouseLeave={() => {
						setDropdown(false);
						setUrl("");
					}}
				>
					<div className="relative">
						{items.name}
						{dropdown && (
							<NavDropdown
								subItems={items.submenu}
								changeHandler={changeUrlHandler}
							/>
						)}
					</div>
				</Link>
			) : (
				<Link
					href={items.path}
					className={`px-3 py-4 ${white && "text-neutral-100"}`}
				>
					{items.name}
				</Link>
			)}
		</>
	);
}

export default NavItem;
