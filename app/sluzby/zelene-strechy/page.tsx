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

export const metadata = {
	title: "Zelené střechy",
	description: "TODO SEO",
};

export default function ZeleneStrechy() {
	return (
		<>
			<ScrollUp />
			<ServicesImage name="Zelené střechy" />
			<Considerations />
			<Skladba />
			<OurServices />
			<Cukr />
			<Types />
			<Showcase title="Již více než 100 úspěšných realizací!" />
			<Plantaz />
			<Dotace />
		</>
	);
}
