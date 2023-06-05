import ContainerBila from "@/components/layout/ContainerBila";

export default function Cenik() {
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
						<p>Blower Door test včetně protokolu pro NZÚ</p>
						<p>4400 Kč/objekt</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Blower Door test bez protokolu</p>
						<p>2900 Kč/objekt</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>
							Blower Door test u větších objektů a bytových domů
						</p>
						<p>cena individuální dle rozsahu měření</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Kontrola vzduchotechnických rozvodů</p>
						<p>
							5000 Kč/objekt typu RD, větší objekty individuálně
							dle rozsahu vzduchotechniky
						</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Detekce netěsností nad základ 2 hodin</p>

						<p>400 Kč/h</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Konzultace nad projektem, oprava netěsností apod</p>

						<p>400 Kč/h</p>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<p>Doprava</p>
						<p>7 Kč/km, minimálně 400Kč</p>
					</div>
				</div>
			</div>
		</ContainerBila>
	);
}
