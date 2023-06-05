import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Fungovani() {
	return (
		<ContainerBezova>
			<h3 className="text-center text-hneda">Jak to funguje</h3>
			<div className="mx-auto mt-4 max-w-xl space-y-4 md:mt-8 md:space-y-4">
				<p>
					Náš tým odborníků v oblasti stavebnictví a dotací se postará
					o kompletní administrativní proces. Připravíme a podáme
					žádost o dotaci, předložíme potřebnou dokumentaci a
					zajistíme veškeré formality spojené s procesem získávání
					státní podpory.
				</p>
				<p>
					S naším know-how a zkušenostmi se vyhnete zbytečnému stresu
					a minimalizujete papírování.
				</p>
				<p>
					Celý proces i se schválením dotace od úřadů trvá shruba tři
					měsíce od dokončení stavby střechy.
				</p>
				<p>
					V případě dotazů ohledně dotace pište na email{" "}
					<a
						className="border-b border-bezova text-zelena hover:border-zelena"
						href="mailto:dotace@zelenestaveni.cz"
						target="_blank"
					>
						dotace@zelenestaveni.cz
					</a>
					.
				</p>
			</div>
		</ContainerBezova>
	);
}
