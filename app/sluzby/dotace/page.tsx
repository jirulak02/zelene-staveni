import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Dotace",
	description: "TODO SEO",
};

export default function Dotace() {
	return (
		<>
			<ScrollUp />
			<ServicesImage name="Dotace" />
			{/* <Container></Container> */}
		</>
	);
}
