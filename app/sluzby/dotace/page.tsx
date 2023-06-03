import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import BlowerDoor from "@/components/ServicesPage/DotacePage/BlowerDoor";
import Fungovani from "@/components/ServicesPage/DotacePage/Fungovani";
import Usnadneni from "@/components/ServicesPage/DotacePage/Usnadneni";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Dotace",
	description: "TODO SEO",
};

export default function Dotace() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Dotace"
				url="https://uploadthing.com/f/3ef65a29-2ac9-47da-bdd6-091130518e1e_dotace_hero.jpg"
			/>
			<Usnadneni />
			<Fungovani />
			<BlowerDoor />
		</>
	);
}
