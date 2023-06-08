import Container from "@/components/layout/Container";
import ContainerBezova from "@/components/layout/ContainerBezova";
import ImageLoader from "@/components/ui/ImageLoader";

const data = new Array(16);

export default function loading() {
	return (
		<>
			<Container>
				<h1 className="mb-6 mt-10 text-zelena md:mb-10">Reference</h1>
				<p>Prohlédněte si fotografie našich prací.</p>
				<div className="mb-10 mt-4 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-4">
					<div className="text-center">
						<div className="inline-block cursor-pointer rounded-3xl">
							<div className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
								ZELENÉ STŘECHY
							</div>
						</div>
					</div>
					<div className="text-center">
						<div className="inline-block cursor-pointer rounded-3xl">
							<div className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
								KOŘENOVÉ ČISTÍRNY
							</div>
						</div>
					</div>
					<div className="text-center">
						<div className="inline-block cursor-pointer rounded-3xl">
							<div className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
								BLOWER DOOR TEST
							</div>
						</div>
					</div>
					<div className="text-center">
						<div className="inline-block cursor-pointer rounded-3xl">
							<div className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
								TERMOVIZE
							</div>
						</div>
					</div>
				</div>
			</Container>
			<ContainerBezova>
				<h2
					id="galerie-zelene-strechy"
					className="pb-6 text-center text-zelena md:pb-10"
				>
					Zelené střechy
				</h2>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
					{data.map((item) => (
						<ImageLoader
							key={item.id}
							className="m-auto h-[150px] w-[200px] sm:m-0"
						/>
					))}
				</div>
			</ContainerBezova>
		</>
	);
}
