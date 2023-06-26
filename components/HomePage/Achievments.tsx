import Image from "next/image";

import Button from "../ui/Button";
import ContainerBezova from "../layout/ContainerBezova";
import Counter from "../animations/Counter";

export default function Achievments() {
	return (
		<ContainerBezova>
			<div className="space-y-4 text-center md:space-y-6">
				<h2 className="text-hneda">
					Více než 100 úspěšných realizací!
				</h2>
				<p>
					Už víc jak 20 let jsme tady pro Vás a Vaše sny o zelenějším
					bydlení.
				</p>
				<Button href="/kontakt">ZEPTEJTE SE NÁS</Button>
			</div>
			<div className="mt-8 grid grid-cols-1 gap-2 text-center sm:grid-cols-auto md:mt-16">
				<div className="space-y-2 px-3 sm:space-y-3">
					<Counter
						countTo={20}
						className="text-6xl text-zelena sm:text-7xl"
					/>
					<h3 className="text-zelena">LET V OBORU</h3>
					<p>Nezávazná konzultace vhodných řešení zdarma.</p>
				</div>
				<div className="hidden items-center justify-center lg:flex">
					<Image
						alt="Ikona bílého domečku"
						width={150}
						height={150}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/a67365c2-4723-49c2-9514-cee5a7fa8d6c_house%20logo.png"
					/>
				</div>
				<div className="space-y-2 px-3 text-center sm:space-y-3">
					<Counter
						countTo={100}
						className="text-6xl text-zelena sm:text-7xl"
					/>
					<h3 className="text-zelena">REALIZACÍ</h3>
					<p>Cenovou nabídku vypracujeme zdarma.</p>
				</div>
				<div className="hidden items-center justify-center text-center lg:flex">
					<Image
						alt="Ikona bílého domečku"
						width={150}
						height={150}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/a67365c2-4723-49c2-9514-cee5a7fa8d6c_house%20logo.png"
					/>
				</div>
				<div className="space-y-2 px-3 text-center sm:space-y-3">
					<Counter
						countTo={200}
						className="text-6xl text-zelena sm:text-7xl"
					/>
					<h3 className="text-zelena">PROJEKTŮ NZÚ</h3>
					<p>Vyřídíme celý proces získání dotace za Vás.</p>
				</div>
			</div>
		</ContainerBezova>
	);
}
