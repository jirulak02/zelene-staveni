import Container from "@/components/layout/Container";
import ImageLoader from "@/components/ui/ImageLoader";

export default function Loading() {
	return (
		<Container>
			<h1 className="mb-6 mt-10 text-zelena md:mb-10">Kontakt</h1>
			<div className="mb-6 md:mb-10">
				<p>Zelené stavění PS s.r.o.</p>
				<p>Panská 212, Tehov, 251 01</p>
				<p>IČ: 05749565</p>
				<p>DIČ: CZ05749565</p>
			</div>
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
					<ImageLoader className="row-start-1 m-auto mt-4 h-[250px] w-[250px] items-center rounded-full lg:row-start-auto" />
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
					<ImageLoader className="row-start-1 m-auto mt-4 h-[250px] w-[250px] items-center rounded-full lg:row-start-auto" />
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
					<ImageLoader className="row-start-1 m-auto mt-4 h-[250px] w-[250px] items-center rounded-full lg:row-start-auto" />
				</div>
			</div>
			<h2 className="mb-5 mt-10 text-zelena">Napište nám</h2>
		</Container>
	);
}
