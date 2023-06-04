import Achievments from "@/components/HomePage/Achievments";
import Hero from "@/components/HomePage/Hero";
import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";
import { data } from "@/components/data/HomePage";

export const metadata = {
	title: "Zelené stavění.cz - trochu jiné stavění",
	description:
		"Už víc jak 20 let jsme tady pro Vás a Vaše sny o zelenějším bydlení. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Home() {
	return (
		<>
			<ScrollUp />
			<Hero />
			<Achievments />
			<Showcase title="Ukázka realizací" data={data} />
		</>
	);
}
