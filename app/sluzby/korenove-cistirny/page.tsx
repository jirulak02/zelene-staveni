import ScrollUp from "@/components/layout/ScrollUp";
import Realization from "@/components/ServicesPage/Korenovky/Realization";
import Composition from "@/components/ServicesPage/Korenovky/Composition";
import Details from "@/components/ServicesPage/Korenovky/Details";
import ServicesImage from "@/components/ServicesPage/ServicesImage";

export const metadata = {
  title: "Kořenové čistírny - Zelené stavění.cz",
  description:
    "KOŘENOVÉ ČISTÍRNY. Uděláme plnou realizaci kořenové čističky. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Korenovky() {
  return (
    <>
      <ScrollUp />
      <ServicesImage
        name="Kořenové čistírny"
        url="https://utfs.io/f/adeba4cf-aea7-4929-96f3-1d0fc91ba9b5_korenovky_hero.jpg"
      />
      <Details />
      <Realization />
      <Composition />
    </>
  );
}
