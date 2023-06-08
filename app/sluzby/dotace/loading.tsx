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
						Dotace
					</h1>
				</Container>
			</div>
			<ContainerBila>
				<h2 className="text-center text-zelena">
					Dotace na zelenou střechu
				</h2>
				<h3 className="mx-auto mt-6 max-w-xl text-center text-hneda md:mt-8">
					Nechte si usnadnit cestu k získání finanční podpory na vaši
					střechu
				</h3>
				<div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-2">
					<div className="space-y-4 md:space-y-5">
						<p>
							Od ledna 2017 je možno žádat o dotaci na realizaci
							zelené střechy, kterou Vám rádi jakožto{" "}
							<a
								className="border-b border-neutral-100 text-zelena hover:border-zelena"
								href="https://registrace.novazelenausporam.cz/vyhledavani/dodavatel/SOD7412/mgr-simecek-petr/"
								target="_blank"
							>
								registrováný odborný dodavatel
							</a>{" "}
							projektu Nová zelená úsporám komplet vyřídíme.
						</p>
						<p>
							Dotace činí{" "}
							<span className="font-semibold">
								700-1000 Kč/m²
							</span>{" "}
							zelené střechy s maximální výší dotace{" "}
							<span className="font-semibold">100 000 Kč</span>.
							Cena zelené střechy tedy nemusí být vysoká.
						</p>
						<p>
							Více o dotacích se dozvíte na stránkách{" "}
							<a
								className="border-b border-neutral-100 text-zelena hover:border-zelena"
								href="http://www.novazelenausporam.cz/"
								target="_blank"
							>
								Nová zelená úsporám
							</a>
							.
						</p>
					</div>
					<ImageLoader className="m-auto h-[200px] w-[400px]" />
				</div>
			</ContainerBila>
		</>
	);
}
