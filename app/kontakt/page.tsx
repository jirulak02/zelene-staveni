import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Employees from "@/components/ContactPage/Employees";
import ContactForm from "@/components/ContactPage/ContactForm";
import Reveal from "@/components/animations/Reveal";

export const metadata = {
  title: "Kontakt - Zelené stavění.cz",
  description: "Zkontaktujte nás na telefonu 608 974 908 nebo mailem na info@zelenestaveni.cz.",
};

export default function Kontakt() {
  return (
    <>
      <ScrollUp />
      <Container>
        <h1 className="mb-6 mt-10 text-zelena md:mb-10">Kontakt</h1>
        <div className="mb-6 md:mb-10">
          <p>Zelené stavění PS s.r.o.</p>
          <p>Panská 212, Tehov, 251 01</p>
          <p>IČ: 05749565</p>
          <p>DIČ: CZ05749565</p>
        </div>
        <Employees />
        <Reveal>
          <h2 className="mb-5 mt-10 text-zelena">Napište nám</h2>
        </Reveal>
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="h-80 rounded-3xl border-2 border-neutral-200 lg:h-full">
            <iframe
              width="100%"
              height="100%"
              className="rounded-3xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRVGxxwuJC0cRLZls-GrzDTI&zoom=15&key=${process.env.GOOGLE_API}`}
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}
