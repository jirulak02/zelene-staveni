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
						width="400"
						height="532"
						src="https://uploadthing.com/f/e75f622d-f3e4-4aae-aaa3-d6f4a5e57e87_blower2.png"
					/>
				</div>
			</div>
		</ContainerBila>
	);
}
