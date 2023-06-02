import Achievments from "@/components/HomePage/Achievments";
import Hero from "@/components/HomePage/Hero";
import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";
import { data } from "@/components/data/HomePage";

export const metadata = {
	title: "Zelené stavění - trochu jiné stavění",
	description: "TODO SEO",
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
