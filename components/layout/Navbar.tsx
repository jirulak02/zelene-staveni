import NavItem from "./NavItem";

const navLinks: MyLink[] = [
	{ path: "/", name: "Úvod" },
	{
		path: "/sluzby",
		name: "Služby",
		submenu: [
			{ path: "/zelene-strechy", name: "Zelené střechy" },
			{ path: "/korenove-cistirny", name: "Kořenové čistírny" },
			{ path: "/blower-door-test", name: "Blower Door test" },
			{ path: "/termovize", name: "Termovize" },
			{ path: "/dotace", name: "Dotace" },
		],
	},
	{ path: "/reference", name: "Reference" },
	{ path: "/kontakt", name: "Kontakt" },
];

export type MyLink = {
	path: string;
	name: string;
	submenu?: MyLink[];
};

function Navbar() {
	return (
		<div className="flex items-center space-x-2">
			{navLinks.map((link) => (
				<NavItem key={link.path} items={link} />
			))}
		</div>
	);
}

export default Navbar;
