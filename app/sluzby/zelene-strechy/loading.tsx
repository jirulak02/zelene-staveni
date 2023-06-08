import Container from "@/components/layout/Container";
import ContainerBezova from "@/components/layout/ContainerBezova";
import ImageLoader from "@/components/ui/ImageLoader";

export default function loading() {
	return (
		<>
			<div className="relative -mt-image h-[280px] overflow-hidden pb-12 md:h-[440px]">
				<ImageLoader className="h-full w-full" />
				<Container className="absolute h-full w-full bg-shadow">
					<h1 className="absolute flex h-full w-full flex-col justify-center px-3 text-center text-neutral-100 md:text-left">
						Zelené střechy
					</h1>
				</Container>
			</div>
			<ContainerBezova>
				<h2 className="mb-6 text-center text-zelena md:mb-10">
					Realizujeme zelené střechy od A do Z
				</h2>
				<h3 className="text-center text-hneda">
					Na co myslet před realizací zelené střechy?
				</h3>
				<h3 className="text-center text-hneda">
					Ujasněte si tyto základní body:
				</h3>
				<div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
					<div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
						<div
							className="flex items-center justify-center rounded-full bg-neutral-100"
							style={{ width: "120px", height: "120px" }}
						>
							<ImageLoader className="h-[50px] w-[50px]" />
						</div>
						<h5>Jaký styl se Vám líbí</h5>
					</div>
					<div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
						<div
							className="flex items-center justify-center rounded-full bg-neutral-100"
							style={{ width: "120px", height: "120px" }}
						>
							<ImageLoader className="h-[50px] w-[50px]" />
						</div>
						<h5>Kolik chcete investovat</h5>
					</div>
					<div className="flex flex-col items-center space-y-3 p-2 text-center sm:p-4">
						<div
							className="flex items-center justify-center rounded-full bg-neutral-100"
							style={{ width: "120px", height: "120px" }}
						>
							<ImageLoader className="h-[50px] w-[50px]" />
						</div>
						<h5>Možné zatížení střešní konstrukce</h5>
					</div>
				</div>
			</ContainerBezova>
		</>
	);
}
