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
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420608974908"
							target="_blank"
						>
							+420 608 974 908
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="mailto:info@zelenestaveni.cz"
							target="_blank"
						>
							info@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					style={{ width: "250px" }}
					className="items-center m-2 mt-4 rounded-full"
					alt="Petr Šimeček"
					width="500"
					height="500"
					src="https://uploadthing.com/f/501c7f3e-f1d9-4381-b93a-5e898a2dc19c_petr.png"
				/>
			</div>
			<div className="flex flex-col items-center">
				<div>
					<p>Simona Krausová - fakturace</p>
					<p>
						Tel:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420773225535"
							target="_blank"
						>
							+420 773 225 535
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="mailto:krausova@zelenestaveni.cz"
							target="_blank"
						>
							krausova@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
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
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420777898501"
							target="_blank"
						>
							+420 777 898 501
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="mailto:dotace@zelenestaveni.cz"
							target="_blank"
						>
							dotace@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
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
