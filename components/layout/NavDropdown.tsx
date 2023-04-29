"use client";

import { MyLink } from "./Navbar";

type NavDropdownProps = {
	subItems: MyLink[];
	changeHandler: (newUrl: string) => void;
};

function NavDropdown({ subItems, changeHandler }: NavDropdownProps) {
	return (
		<div className="flex flex-col absolute z-40 top-8 -left-3 min-w-max text-neutral-800 bg-neutral-100 border border-neutral-800 rounded-xl">
			{subItems.map((subItem) => (
				<div
					key={subItem.path}
					className="px-3 py-2 hover:bg-neutral-200 rounded-xl"
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
