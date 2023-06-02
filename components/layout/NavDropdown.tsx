"use client";

import { MyLink } from "./Navbar";

type NavDropdownProps = {
	subItems: MyLink[];
	changeHandler: (newUrl: string) => void;
};

function NavDropdown({ subItems, changeHandler }: NavDropdownProps) {
	return (
		<div className="absolute -left-3 top-8 z-40 flex min-w-max flex-col rounded-xl border border-neutral-800 bg-neutral-100 text-neutral-800">
			{subItems.map((subItem) => (
				<div
					key={subItem.path}
					className="rounded-xl px-3 py-2 hover:bg-neutral-200"
					onMouseEnter={() => {
						changeHandler(subItem.path);
					}}
				>
					{subItem.name}
				</div>
			))}
		</div>
	);
}

export default NavDropdown;
