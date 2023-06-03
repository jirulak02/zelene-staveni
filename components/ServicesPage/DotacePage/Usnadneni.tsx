import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Usnadneni() {
	return (
		<Container className="my-20">
			<h2 className="text-center text-zelena">
				Dotace na zelenou střechu
			</h2>
			<h3 className="mx-auto mt-8 max-w-xl text-center text-hneda">
				Nechte si usnadnit cestu k získání finanční podpory na vaši
				střechu
			</h3>
			<div className="mt-8 grid grid-cols-2 gap-2">
				<div className="space-y-5">
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
					width="800"
					height="400"
					src="https://uploadthing.com/f/d2e86f21-10f0-478b-bc11-861adcaa8604_nzu.png"
				/>
			</div>
		</Container>
	);
}
