import Button from "@/components/ui/Button";
import { data } from "@/components/data/ServicesTermovize";
import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Showcase() {
  return (
    <ContainerBezova>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">Ukázky snímků</h2>
        <Images data={data} width={200} height={140} />
        <Button href="/reference#galerie-termovize">ZOBRAZIT VŠECHNY UKÁZKY</Button>
      </div>
    </ContainerBezova>
  );
}
