import Container from "@/components/layout/Container";

export default function Cenik() {
	return (
		<Container className="my-20">
			<div className="grid grid-cols-5">
				<div className="col-span-1">
					<h2 className="text-center text-zelena">Ceník</h2>
				</div>
				<div className="col-span-2 space-y-3">
					<h4 className="text-hneda">Položka</h4>
					<p>
						Rodinný dům (cca 30 až 60 snímků podle potřeby, protokol
						v PDF, vše na CD)
					</p>
					<p>Jiné objekty, bytové domy, provozovny</p>
					<p>Analýza problémů, doporučení oprav a pod</p>
					<p>Doprava</p>
				</div>
				<div className="col-span-2 space-y-3">
					<h4 className="text-hneda">Cena</h4>
					<p>2000 Kč</p>
					<p>dohodou</p>
					<p>400 Kč/hod</p>
					<p>7 Kč/km, minimálně 200 Kč</p>
				</div>
			</div>
		</Container>
	);
}
