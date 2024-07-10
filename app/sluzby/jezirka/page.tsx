import Details from "@/components/ServicesPage/JezirkaPage/Details";
import OurServices from "@/components/ServicesPage/JezirkaPage/OurServices";
import Realization from "@/components/ServicesPage/JezirkaPage/Realization";
import ServicesImage from "@/components/ServicesPage/ServicesImage";
import ScrollUp from "@/components/layout/ScrollUp";

export const metadata = {
  title: "Jezírka - Zelené stavění.cz",
  description:
    "JEZÍRKA. Uděláme plnou realizaci zahradního jezírka. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Korenovky() {
  return (
    <>
      <ScrollUp />
      <ServicesImage
        name="Jezírka"
        url="https://utfs.io/f/e6420bff-af76-4c61-ac3e-3708b71d232e-dyfkmz.jpg"
      />
      <Details />
      <OurServices />
      <Realization />
    </>
  );
}
