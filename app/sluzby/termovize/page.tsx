import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Findings from "@/components/ServicesPage/TermovizePage/Findings";
import HeatLoss from "@/components/ServicesPage/TermovizePage/HeatLoss";
import Pricing from "@/components/ServicesPage/TermovizePage/Pricing";
import Showcase from "@/components/ServicesPage/TermovizePage/Showcase";
import WhenToMeasure from "@/components/ServicesPage/TermovizePage/WhenToMeasure";
import ScrollUp from "@/components/layout/ScrollUp";

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
        url="https://utfs.io/f/49406b25-42ad-40bc-9177-48716c0c5bd2_termovize_hero.jpeg"
      />
      <HeatLoss />
      <WhenToMeasure />
      <Findings />
      <Showcase />
      <Pricing />
    </>
  );
}
