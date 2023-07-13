import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Pricing from "@/components/ServicesPage/TermovizePage/Pricing";
import WhenToMeasure from "@/components/ServicesPage/TermovizePage/WhenToMeasure";
import Showcase from "@/components/ServicesPage/TermovizePage/Showcase";
import HeatLoss from "@/components/ServicesPage/TermovizePage/HeatLoss";
import Findings from "@/components/ServicesPage/TermovizePage/Findings";

export const metadata = {
	title: "Termovize - Zelené stavění.cz",
	description:
		"TERMOVIZE. Provádíme zjišťování úniků tepla termovizí. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Termovize() {
	return (
		<>
			<ScrollUp />
			<ServicesImage
				name="Termovize"
				url="https://uploadthing.com/f/49406b25-42ad-40bc-9177-48716c0c5bd2_termovize_hero.jpeg"
			/>
			<HeatLoss />
			<WhenToMeasure />
			<Findings />
			<Showcase />
			<Pricing />
		</>
	);
}
