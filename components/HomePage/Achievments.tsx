import Image from "next/image";

import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Achievments() {
	return (
		<Container className="bg-bezova py-20 text-center">
			<div className="space-y-8">
				<h2 className="text-hneda">
					Více než 100 úspěšných realizací!
				</h2>
				<p>
					Už víc jak 20 let jsme tady pro Vás a Vaše sny o zelenějším
					bydlení.
				</p>
				<Button href="/kontakt">ZEPTEJTE SE NÁS</Button>
			</div>
			<div className="grid grid-cols-auto gap-2 mt-16">
				<div className="space-y-3">
					<div className="text-7xl text-zelena">20</div>
					<h3 className="text-zelena">LET V OBORU</h3>
					<p>Nezávazná konzultace vhodných řešení zdarma.</p>
				</div>
				<div className="flex justify-center items-center">
					<Image
						style={{ width: "150px" }}
						alt="Ikona bílého domečku"
						width="150"
						height="150"
						src="https://uploadthing.com/f/a67365c2-4723-49c2-9514-cee5a7fa8d6c_house%20logo.png"
					/>
				</div>
				<div className="space-y-3">
					<div className="text-7xl text-zelena">100</div>
					<h3 className="text-zelena">REALIZACÍ</h3>
					<p>Cenovou nabídku vypracujeme zdarma.</p>
				</div>
				<div className="flex justify-center items-center">
					<Image
						style={{ width: "150px" }}
						alt="Ikona bílého domečku"
						width="150"
						height="150"
						src="https://uploadthing.com/f/a67365c2-4723-49c2-9514-cee5a7fa8d6c_house%20logo.png"
					/>
				</div>
				<div className="space-y-3">
					<div className="text-7xl text-zelena">200</div>
					<h3 className="text-zelena">PROJEKTŮ NZÚ</h3>
					<p>Dodáme vše potřebné pro získání dotace.</p>
				</div>
			</div>
		</Container>
	);
}
