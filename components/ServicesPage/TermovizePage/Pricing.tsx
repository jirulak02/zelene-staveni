import ContainerBila from "@/components/layout/ContainerBila";

export default function Pricing() {
	return (
		<ContainerBila>
			<div className="md:grid md:grid-cols-5 md:gap-3">
				<div className="mb-6 md:col-span-1">
					<h2 className="text-center text-zelena">Ceník</h2>
				</div>
				<div className="space-y-3 md:col-span-4">
					<div className="grid grid-cols-2 gap-3">
						<h4 className="text-hneda">Položka</h4>
						<h4 className="text-hneda">Cena</h4>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>
							Rodinný dům (cca 30 až 60 snímků podle potřeby,
							protokol v PDF)
						</p>
						<p>2000 Kč</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Jiné objekty, bytové domy, provozovny</p>
						<p>dohodou</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Analýza problémů, doporučení oprav a pod</p>
						<p>400 Kč/hod</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Doprava</p>
						<p>7 Kč/km, minimálně 200 Kč</p>
					</div>
				</div>
			</div>
		</ContainerBila>
	);
}
