import Image from "next/image";

import ContainerBila from "@/components/layout/ContainerBila";

export default function Usnadneni() {
	return (
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
						<span className="font-semibold">700-1000 Kč/m²</span>{" "}
						zelené střechy s maximální výší dotace{" "}
						<span className="font-semibold">100 000 Kč</span>. Cena
						zelené střechy tedy nemusí být vysoká.
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
				<Image
					style={{ width: "400px" }}
					className="m-auto"
					alt="Logo programu Nová zelená úsporám"
					width={400}
					height={200}
					quality={100}
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src="https://uploadthing.com/f/c7234a1b-6321-4eda-9ff2-178cc9c27355_nzu.png"
				/>
			</div>
		</ContainerBila>
	);
}
