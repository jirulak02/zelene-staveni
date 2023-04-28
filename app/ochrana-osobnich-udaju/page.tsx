import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";

export const metadata = {
	title: "Zásady ochrany osobních údajů",
	description: "TODO SEO",
};

export default function ZasadyOsobnichUdaju() {
	return (
		<>
			<ScrollUp />
			<Container>
				<div className="flex flex-col space-y-10 mb-10">
					<h1 className="mt-10 text-zelena">
						Zásady ochrany osobních údajů
					</h1>
					<div>
						<p>
							1. Společnost Zelené stavění PS s.r.o., se sídlem
							Panská 212, Tehov, 251 01, IČ 05749565, zapsaná u
							Městského soudu v Praze, oddíl C, vložka 270063,
							jako správce osobních údajů podle čl. 26 Nařízení,
							zpracovává v případě vaší poptávky služeb ve smyslu
							nařízení Evropského parlamentu a Rady (EU) č.
							2016/679 o ochraně fyzických osob v souvislosti se
							zpracováním osobních údajů a o volném pohybu těchto
							údajů a o zrušení směrnice 95/46/ES (obecné nařízení
							o ochraně osobních údajů) (dříve i dále jen
							„Nařízení“), následující osobní údaje:
						</p>
						<p>- jméno a příjmení,</p>
						<p>- emailovou adresu,</p>
						<p>- telefon,</p>
						<p>- text zprávy</p>
					</div>
					<p>
						2. Jméno, příjmení, emailovou adresu a telefon je nutné
						zpracovat pro vytvoření nabídky služeb, jednání o této
						nabídce nebo za účelem odpovědi na Vámi vznesený dotaz.
						Takové zpracování umožňuje čl. 6. odst. 1 písm. b)
						Nařízení. Tyto osobní údaje budou společností Zelené
						stavění PS s.r.o. zpracovávány po dobu jednání o
						uzavření smlouvy mezi vámi a Zelené stavění PS s.r.o.,
						nejdéle 1 rok od vaší poptávky, pokud neudělíte souhlas
						k dalšímu zpracování.
					</p>
					<div>
						<p>
							3. Vezměte, prosíme, na vědomí, že podle zákona o
							ochraně osobních údajů máte právo:
						</p>
						<p>
							- požadovat po nás informaci, jaké vaše osobní údaje
							zpracováváme, případně žádat kopii těchto osobních
							údajů,
						</p>
						<p>
							- požadovat po nás vysvětlení ohledně zpracování
							osobních údajů,
						</p>
						<p>
							- vyžádat si u nás přístup k těmto údajům a tyto
							nechat aktualizovat nebo opravit,
						</p>
						<p>
							- požadovat po nás výmaz těchto osobních údajů -
							tento výmaz však bude mít za následek ukončení
							jednání o smlouvě a bude proveden jen v případě, že
							zájmy správce nepřevažují nad vaší ochranou
							soukromí,
						</p>
						<p>
							- v případě pochybností o dodržování povinností
							souvisejících se zpracováním osobních údajů obrátit
							se na nás nebo na Úřad pro ochranu osobních údajů,
							případně na soud.
						</p>
					</div>
				</div>
			</Container>
		</>
	);
}
