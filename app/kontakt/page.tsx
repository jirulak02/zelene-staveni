import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Employees from "@/components/ContactPage/Employees";
import ContactForm from "@/components/ContactPage/ContactForm";

export const metadata = {
	title: "Kontakt",
	description: "TODO SEO",
};

export default function Kontakt() {
	return (
		<>
			<ScrollUp />
			<Container>
				<h1 className="text-zelena my-10">Kontakt</h1>
				<div className="my-10">
					<p>Zelené stavění PS s.r.o.</p>
					<p>Panská 212, Tehov, 251 01</p>
					<p>IČ: 05749565</p>
					<p>DIČ: CZ05749565</p>
				</div>
				<Employees />
				<h2 className="text-zelena mt-10 mb-5">Napište nám</h2>
				<div className="grid grid-cols-2 mb-20">
					<ContactForm />
				</div>
			</Container>
		</>
	);
}
