import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Considerations from "@/components/ServicesPage/StrechyPage/Considerations";
import Cukr from "@/components/ServicesPage/StrechyPage/Cukr";
import Dotace from "@/components/ServicesPage/StrechyPage/Dotace";
import OurServices from "@/components/ServicesPage/StrechyPage/OurServices";
import Plantaz from "@/components/ServicesPage/StrechyPage/Plantaz";
import Skladba from "@/components/ServicesPage/StrechyPage/Skladba";
import Types from "@/components/ServicesPage/StrechyPage/Types";
import { dataStrechy } from "@/components/data/SluzbyStrechy";

export const metadata = {
	title: "Zelené střechy - Zelené stavění.cz",
	description:
		"ZELENÉ STŘECHY. Realizujeme zelené střechy od A do Z. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function ZeleneStrechy() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Zelené střechy"
				url="https://uploadthing.com/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
			/>
			<Considerations />
			<Skladba />
			<OurServices />
			<Cukr />
			<Types />
			<Showcase
				title="Již více než 100 úspěšných realizací!"
				data={dataStrechy}
			/>
			<Plantaz />
			<Dotace />
		</>
	);
}
