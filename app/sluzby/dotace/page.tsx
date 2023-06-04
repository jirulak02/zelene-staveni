import ScrollUp from "@/components/layout/ScrollUp";
import BlowerDoor from "@/components/ServicesPage/DotacePage/BlowerDoor";
import Fungovani from "@/components/ServicesPage/DotacePage/Fungovani";
import Usnadneni from "@/components/ServicesPage/DotacePage/Usnadneni";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Dotace - Zelené stavění.cz",
	description:
		"DOTACE. Komplet Vám vyřídíme získání státní podpory na zelenou střechu. Email: dotace@zelenestaveni.cz telefon: 777 898 501.",
};

export default function Dotace() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Dotace"
				url="https://uploadthing.com/f/34e8344d-a7c9-4444-946e-6f843c8a657c_dotace_hero.jpg"
			/>
			<Usnadneni />
			<Fungovani />
			<BlowerDoor />
		</>
	);
}
