import Image from "next/image";

export default function Employees() {
	return (
		<div className="grid grid-cols-auto w-full">
			<div className="flex flex-col items-center">
				<div>
					<p>Mgr. Petr Šimeček - jednatel</p>
					<p>
						Tel:{" "}
						<a
							href="tel:+420608974908"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							+420 608 974 908
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:info@zelenestaveni.cz"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							info@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					key={Math.random().toString()}
					style={{ width: "250px" }}
					className="items-center m-2 mt-4 rounded-full"
					alt="TODO"
					width="250"
					height="250"
					src="/square.jpeg"
				/>
			</div>
			<div className="flex flex-col items-center">
				<div>
					<p>Simona Krausová - fakturace</p>
					<p>
						Tel:{" "}
						<a
							href="tel:+420773225535"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							+420 773 225 535
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:krausova@zelenestaveni.cz"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							krausova@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					key={Math.random().toString()}
					style={{ width: "250px" }}
					className="items-center m-2 mt-4 rounded-full"
					alt="TODO"
					width="250"
					height="250"
					src="/square.jpeg"
				/>
			</div>
			<div className="flex flex-col items-center">
				<div>
					<p>Jiří Šimeček - dotace a webovky</p>
					<p>
						Tel:{" "}
						<a
							href="tel:+420777898501"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							+420 777 898 501
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:dotace@zelenestaveni.cz"
							className="border-b border-neutral-100 hover:border-neutral-800"
						>
							dotace@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					key={Math.random().toString()}
					style={{ width: "250px" }}
					className="items-center m-2 mt-4 rounded-full"
					alt="TODO"
					width="250"
					height="250"
					src="/square.jpeg"
				/>
			</div>
		</div>
	);
}
