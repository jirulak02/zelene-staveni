import Achievments from "@/components/HomePage/Achievments";
import Hero from "@/components/HomePage/Hero";
import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";

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
			<Showcase />
			<div className="mb-20"></div>
		</>
	);
}
