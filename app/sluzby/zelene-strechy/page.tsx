import Showcase from "@/components/HomePage/Showcase";
import ScrollUp from "@/components/layout/ScrollUp";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import Considerations from "@/components/ServicesPage/StrechyPage/Considerations";
import Weather from "@/components/ServicesPage/StrechyPage/Weather";
import Grants from "@/components/ServicesPage/StrechyPage/Grants";
import OurServices from "@/components/ServicesPage/StrechyPage/OurServices";
import Plants from "@/components/ServicesPage/StrechyPage/Plants";
import Composition from "@/components/ServicesPage/StrechyPage/Composition";
import Types from "@/components/ServicesPage/StrechyPage/Types";
import { dataRoofs } from "@/components/data/ServicesStrechy";

export const metadata = {
  title: "Zelené střechy - Zelené stavění.cz",
  description:
    "ZELENÉ STŘECHY. Realizujeme zelené střechy od A do Z. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function ZeleneStrechy() {
  return (
    <>
      <ScrollUp />
      <ServicesImage
        name="Zelené střechy"
        url="https://uploadthing.com/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
      />
      <Considerations />
      <Composition />
      <OurServices />
      <Weather />
      <Types />
      <Showcase title="Již více než 100 úspěšných realizací!" data={dataRoofs} />
      <Plants />
      <Grants />
    </>
  );
}
