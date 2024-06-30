import { dataRealization } from "@/components/data/ServicesJezirka";
import ContainerBila from "@/components/layout/ContainerBila";
import Images from "@/components/layout/Images";

export default function Realization() {
  return (
    <ContainerBila>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">Realizace</h2>
        <Images data={dataRealization} width={200} height={150} />
      </div>
    </ContainerBila>
  );
}
