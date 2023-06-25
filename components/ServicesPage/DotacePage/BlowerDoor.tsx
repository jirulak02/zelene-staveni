import Image from "next/image";

import Button from "@/components/ui/Button";
import ContainerBila from "@/components/layout/ContainerBila";

export default function BlowerDoor() {
	return (
		<ContainerBila>
			<h2 className="text-center text-zelena">
				Dotace na energetickou náročnost
			</h2>
			<div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2">
				<div className="flex flex-col justify-center space-y-5 text-center">
					<p>
						V rámci Blower Door testu vám dodáme potřebný protokol k
						získání dotace.
					</p>
					<div>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Image
						style={{ width: "200px" }}
						alt="Ukázka zapojení techniky k měření ve dveřích"
						width={200}
						height={250}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/8451747d-7e5c-493d-b3c1-023ac2d00b1e_blower2.png"
					/>
				</div>
			</div>
		</ContainerBila>
	);
}
