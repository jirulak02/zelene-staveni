import ContainerBezova from "@/components/layout/ContainerBezova";

export default function Potrebujeme() {
	return (
		<ContainerBezova>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="space-y-4 md:space-y-5">
					<h3 className="text-hneda">Co od Vás budeme potřebovat</h3>
					<p>
						Podklady pro{" "}
						<span className="font-semibold">
							určení vnitřního objemu a podlahové plochy budovy
						</span>
						, např. projektovou dokumentaci, protokol z předchozího
						testu apod. Pokud není ani jedno změříme si objem na
						místě.
					</p>
					<p>
						Informaci o{" "}
						<span className="font-semibold">
							přístupnosti nasávání a výfuku vzduchotechniky
						</span>
						, zda si např. máme přivézt žebřík a jak dlouhý. Potrubí
						vzduchotechniky musíme po dobu testu utěsnit.
					</p>
				</div>
				<div className="mt-4 space-y-4 md:mt-0 md:space-y-5">
					<h3 className="text-hneda">Připravenost budovy</h3>
					<ul className="ml-4 list-disc space-y-1">
						<li>
							Dokončená vzduchotěsnící vrstva, všechny výplně
							otvorů osazeny
						</li>
						<li>
							Pro finální test: osazení spotřebičů majících vliv
							na vzduchotěsnost (rekuperační jednotka, kamna,
							digestoř apod.)
						</li>
						<li>
							<a
								className="border-b border-bezova text-zelena hover:border-zelena"
								href="https://uploadthing.com/f/80ffe9a8-1dee-4efc-a55f-4d9a2198d4b3_blowerdoor_pravidla_rd.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Více viz kapitola 6.3 Metodického pokynu zde
							</a>
						</li>
					</ul>
				</div>
			</div>
		</ContainerBezova>
	);
}
