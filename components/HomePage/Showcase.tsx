import ContainerBila from "../layout/ContainerBila";
import Images from "../layout/Images";
import Button from "../ui/Button";

type ShowCaseProps = {
  title: string;
  data: {
    id: string;
    name: string;
    alt: string;
    url: string;
  }[];
};

export default function Showcase({ title, data }: ShowCaseProps) {
  return (
    <ContainerBila>
      <div className="space-y-6 md:space-y-10">
        <h2 className="text-center text-zelena">{title}</h2>
        <Images data={data} width={200} height={150} />
        <Button href="/reference#galerie-zelene-strechy">ZOBRAZIT VŠECHNY REALIZACE</Button>
      </div>
    </ContainerBila>
  );
}
