import Container from "@/components/layout/Container";
import ContainerBila from "@/components/layout/ContainerBila";
import ImageLoader from "@/components/ui/ImageLoader";

export default function loading() {
	return (
		<>
			<div className="relative -mt-image h-[280px] overflow-hidden pb-12 md:h-[440px]">
				<ImageLoader className="h-full w-full" />
				<Container className="absolute h-full w-full bg-shadow">
					<h1 className="absolute flex h-full w-full flex-col justify-center px-3 text-center text-neutral-100 md:text-left">
						Blower Door test
					</h1>
				</Container>
			</div>
			<ContainerBila>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="space-y-5">
						<h2 className="text-zelena">
							Test průvzdušnosti obálky budov
						</h2>
						<p>
							Provádíme test vzduchotěsnosti obálky budov a bytů
							tzv. Blower Door test. Měření provádíme v souladu s
							normou ČSN EN ISO 9972. Jsme registrováni v{" "}
							<a
								className="border-b border-neutral-100 text-zelena hover:border-zelena"
								href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
								target="_blank"
							>
								seznamu odborných dodavatelů
							</a>{" "}
							projektu Nová zelená úsporám.
						</p>
					</div>
					<div className="flex items-center justify-center">
						<ImageLoader className="h-[200px] w-[400px]" />
					</div>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2">
					<div className="flex items-center justify-center">
						<ImageLoader className="h-[320px] w-[320px] rounded-full" />
					</div>
					<div className="row-start-1 md:row-start-auto">
						<h3 className="mb-2 text-hneda">Kdy se test provádí</h3>
						<p>
							Test Blower Door je vyžadován především u pasivních
							a nízkoenergetických domů. Test je vhodné provést
							již v průběhu výstavby domu po zabudování oken a
							venkovních dveří, kdy je možno ještě relativně
							snadno opravit zjištěné netěsnosti.
						</p>
						<h3 className="mb-2 mt-5 text-hneda">
							Co Blower Door test obsahuje
						</h3>
						<ul className="ml-4 list-disc space-y-1">
							<li>příprava budovy</li>
							<li>
								případné utěsnění vzduchotechnických otvorů,
								odpadů apod.
							</li>
							<li>
								vlastní test provedený za podtlaku i přetlaku 20
								až 75Pa
							</li>
							<li>
								výstupem měření je protokol obsahující stanovení
								hodnoty n50 pro měřený objekt (ukázka Protokolu
								měření ke stažení{" "}
								<a
									className="border-b border-neutral-100 text-zelena hover:border-zelena"
									href="https://www.zelenestaveni.cz/wp-content/uploads/2021/02/Protokol_blower-door_ukazka.pdf"
									target="_blank"
								>
									ZDE
								</a>
								)
							</li>
						</ul>
					</div>
				</div>
			</ContainerBila>
		</>
	);
}
