import Image from "next/image";

export default function Employees() {
	return (
		<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			<div className="grid grid-cols-1 gap-3 text-center">
				<div>
					<p>Mgr. Petr Šimeček - jednatel</p>
					<p>
						Tel:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420608974908"
							target="_blank"
							rel="noopener noreferrer"
						>
							+420 608 974 908
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="mailto:simecek@zelenestaveni.cz"
							target="_blank"
							rel="noopener noreferrer"
						>
							simecek@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					className="row-start-1 m-auto mt-4 items-center rounded-full lg:row-start-auto"
					alt="Petr Šimeček"
					width={250}
					height={250}
					quality={100}
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src="https://uploadthing.com/f/e279f5dd-aeaa-46f8-abd9-6e17f52f35c3_petr.png"
				/>
			</div>
			<div className="grid grid-cols-1 gap-3 text-center">
				<div>
					<p>Simona Krausová - fakturace</p>
					<p>
						Tel:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420773225535"
							target="_blank"
							rel="noopener noreferrer"
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
							rel="noopener noreferrer"
						>
							krausova@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					className="row-start-1 m-auto mt-4 items-center rounded-full lg:row-start-auto"
					alt="Simona Krausová"
					width={250}
					height={250}
					quality={100}
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src="https://uploadthing.com/f/1197a86b-3f7e-400d-a8a3-135f5cc29731_simona.png"
				/>
			</div>
			<div className="grid grid-cols-1 gap-3 text-center">
				<div>
					<p>Jiří Šimeček - dotace a webovky</p>
					<p>
						Tel:{" "}
						<a
							className="border-b border-neutral-100 hover:border-neutral-800"
							href="tel:+420777898501"
							target="_blank"
							rel="noopener noreferrer"
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
							rel="noopener noreferrer"
						>
							dotace@zelenestaveni.cz
						</a>
					</p>
				</div>
				<Image
					className="row-start-1 m-auto mt-4 items-center rounded-full lg:row-start-auto"
					alt="Jiří Šimeček"
					width={250}
					height={250}
					quality={100}
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src="https://uploadthing.com/f/44fc68f8-9525-4ee2-b973-97adb6346b5f_jirka.png"
				/>
			</div>
		</div>
	);
}
