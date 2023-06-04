import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Cenik from "@/components/ServicesPage/TermovizePage/Cenik";
import Vysvetleni from "@/components/ServicesPage/TermovizePage/Podrobnosti";
import Ukazka from "@/components/ServicesPage/TermovizePage/Ukazka";
import Unik from "@/components/ServicesPage/TermovizePage/Unik";
import Zjistime from "@/components/ServicesPage/TermovizePage/Zjistime";

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
			<Unik />
			<Vysvetleni />
			<Zjistime />
			<Ukazka />
			<Cenik />
		</>
	);
}
