import Container from "@/components/layout/Container";
import Image from "next/image";

export default function SkladbaKorenovky() {
	return (
		<Container className="my-20">
			<h2 className="text-center text-zelena mb-10">
				SKLADBA KOŘENOVÉ ČISTÍRNY
			</h2>
			<div className="grid grid-cols-2 py-5">
				<div className="space-y-5">
					<h3 className="text-hneda">1. Odkalovací nádrž</h3>
					<p>
						Odkalovací nádrž slouží k prvotnímu usazení kalu a
						mechanickému předčištění černé odpadní vody, tedy vody z
						WC. U šedých odpadních vod (z umyvadel, dřezů, vany,
						sprchy, myčky a pračky) odkalovací nádrž být nemusí a
						mohou jít přímo do kořenového pole. Odkalovací nádrž je
						realizována jako tříkomorový plastový septik.
					</p>
				</div>
				<Image
					style={{ width: "200px" }}
					className="m-auto"
					alt="TODO"
					width="200"
					height="200"
					src="/square.jpeg"
				/>
			</div>
			<div className="grid grid-cols-2 py-5">
				<div className="space-y-5">
					<h3 className="text-hneda">2. Pulzní šachta</h3>
					<p>
						V posledních letech se začaly prosazovat kořenová pole s
						vertikálním průtokem filtrem oproti dříve používaným
						horizontálním filtrům. Vertikální filtr potřebuje
						dávkovat odpadní vody s jistým rázem tak, aby se rozlily
						po celé ploše pole a ne jen v přední části. K tomuto
						slouží pulzní šachta.
					</p>
				</div>
				<Image
					style={{ width: "200px" }}
					className="m-auto"
					alt="TODO"
					width="200"
					height="200"
					src="/square.jpeg"
				/>
			</div>
			<div className="grid grid-cols-2 py-5">
				<div className="space-y-5">
					<h3 className="text-hneda">3. Kořenový filtr</h3>
					<p>
						Z pulzní šachty proudí odpadní voda potrubím do
						kořenového filtračního pole. Je to stavebně mělká zemní
						nádrž, 80 cm hluboká. Dno se sklonem 1% a boky nádrže
						jsou kryty hydroizolační fólií. Plocha filtru se
						dimenzuje tak, aby na každého obyvatele připadalo
						alespoň 5 m2. Filtr je tvořen oblázky různých frakcí.
						Nádrž je naplněna vodou cca 10 cm pod povrchem filtru.
						Je tak vyloučeno, že se v nádrži budou líhnout komáři. V
						kořenovém poli jsou osázeny mokřadní rostliny jako
						například: kosatec žlutý, kosatec sibiřský, tužebník
						jilmový, sítina rozkladitá, skřípina lesní. Na kořenech
						rostlin žijí bakterie, které aerobním procesem
						rozkládají nečistoty.
					</p>
				</div>
				<Image
					style={{ width: "200px" }}
					className="m-auto"
					alt="TODO"
					width="200"
					height="200"
					src="/square.jpeg"
				/>
			</div>
			<div className="grid grid-cols-2 py-5">
				<div className="space-y-5">
					<h3 className="text-hneda">4. Kontrolní šachta</h3>
					<p>
						V kontrolní šachtě je možno jednoduchým způsobem
						regulovat výšku hladiny v kořenovém poli a odebírat
						vzorky pro kontrolní měření účinnosti čištění. Kontrolní
						šachta je umístěna za kořenovým polem.
					</p>
				</div>
				<Image
					style={{ width: "200px" }}
					className="m-auto"
					alt="TODO"
					width="200"
					height="200"
					src="/square.jpeg"
				/>
			</div>
			<div className="grid grid-cols-2 py-5">
				<div className="space-y-5">
					<h3 className="text-hneda">
						5. Zahradní jezírko (vsakovací objekt)
					</h3>
					<p>
						Zahradní jezírko je posledním stupněm kořenové čistírny.
						Slouží k zachycení a dočištění odpadní vody z kořenového
						filtru. Voda z jezírka může být využívána k zálivce
						zahrady. Zahradní jezírko je možno někdy nahradit
						vsakovací jímkou. Je třeba se informovat na stavebním
						úřadě, zda je v dané lokalitě možná. Případně zda je
						možné vypouštět odpadní vodu z kořenového pole do místní
						vodoteče.
					</p>
				</div>
				<Image
					style={{ width: "200px" }}
					className="m-auto"
					alt="TODO"
					width="200"
					height="200"
					src="/square.jpeg"
				/>
			</div>
		</Container>
	);
}
