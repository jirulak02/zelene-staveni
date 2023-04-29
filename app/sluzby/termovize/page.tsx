import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
	title: "Blower Door test",
	description: "TODO SEO",
};

export default function BlowerDoor() {
	return (
		<>
			<ScrollUp />
			<ServicesImage name="Blower Door test" />
			{/* <Container></Container> */}
		</>
	);
}
