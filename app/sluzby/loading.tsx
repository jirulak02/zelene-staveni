import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ImageLoader from "@/components/ui/ImageLoader";

export default function loading() {
	return (
		<Container>
			<h1 className="my-10 text-zelena">Služby</h1>
			<div className="grid grid-cols-1">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative h-[280px] overflow-hidden lg:h-[480px]">
						<ImageLoader className="h-full w-full" />
					</div>
					<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h2 className="text-hneda">ZELENÉ STŘECHY</h2>
						<p>
							Zelené střechy ukládají vodu, vážou prach a
							nezahřívají se. Realizujeme zelené střechy od A do
							Z. Vyřídíme i dotaci Nová zelená úsporám.
						</p>
						<Button href="/sluzby/zelene-strechy">
							ZJISTIT VÍCE
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h2 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h2>
						<p>
							Kořenová čistírna odpadních vod je vlastně takový
							malý přírodní mokřad. Slouží k čištění odpadních vod
							z domácnosti.
						</p>
						<Button href="/sluzby/korenove-cistirny">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
						<ImageLoader className="h-full w-full" />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative row-start-1 h-[280px] overflow-hidden lg:h-[480px]">
						<ImageLoader className="h-full w-full" />
					</div>
					<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h2 className="text-hneda">BLOWER DOOR TEST</h2>
						<p>
							Test Blower Door je vyžadován především u pasivních
							a nízkoenergetických domů. Test je vhodné provést
							již v průběhu výstavby domu po zabudování oken a
							venkovních dveří, kdy je možno ještě relativně
							snadno opravit zjištěné netěsnosti.
						</p>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h2 className="text-hneda">TERMOVIZE</h2>
						<p>
							Závady v zateplení budov či v topných systémech je
							možno zjišťovat v topné sezóně, tedy v zimním
							období. Měření termokamerou je možno provádět i za
							tmy.
						</p>
						<Button href="/sluzby/termovize">ZJISTIT VÍCE</Button>
					</div>
					<div className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
						<ImageLoader className="h-full w-full" />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative h-[280px] overflow-hidden lg:h-[480px]">
						<ImageLoader className="h-full w-full" />
					</div>
					<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h2 className="text-hneda">Dotace</h2>
						<p>
							Nechte si usnadnit cestu k získání finanční podpory
							na vaši střechu. Dotaci k programu Nová zelená
							úsporám Vám bezstarostně komplet vyřídíme.
						</p>
						<Button href="/sluzby/dotace">ZJISTIT VÍCE</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
