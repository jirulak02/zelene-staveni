import Container from "@/components/layout/Container";

export default function Potrebujeme() {
	return (
		<Container className="bg-bezova py-20">
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-5">
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
				<div className="space-y-5">
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
								href="https://www.zelenestaveni.cz/wp-content/uploads/2021/03/Upresneni-pravidel-pro-mereni-pruvdzusnosti-budovy-RD-vystavba-rekuperace.pdf"
								target="_blank"
							>
								Více viz kapitola 6.3 Metodického pokynu zde
							</a>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	);
}
