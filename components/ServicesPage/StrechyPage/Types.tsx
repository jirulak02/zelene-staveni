"use client";

import { useReducer } from "react";

import Container from "@/components/layout/Container";

type TypesState = {
    vegetace: boolean;
    zatizeni: boolean;
    sklon: boolean;
    cena: boolean;
    narocnost: boolean;
};

type TypesAction = {
    type: string;
};

function reducer(state: TypesState, action: TypesAction) {
    switch (action.type) {
        case "VEGETACE":
            return { ...initialState, vegetace: !state.vegetace };
        case "ZATIZENI":
            return { ...initialState, zatizeni: !state.zatizeni };
        case "SKLON":
            return { ...initialState, sklon: !state.sklon };
        case "CENA":
            return { ...initialState, cena: !state.cena };
        case "NAROCNOST":
            return { ...initialState, narocnost: !state.narocnost };
        default:
            return { ...initialState };
    }
}

const initialState = {
    vegetace: false,
    zatizeni: false,
    sklon: false,
    cena: false,
    narocnost: false,
};

function Types() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container className="bg-bezova py-20">
            <h2 className="pb-5 text-center text-zelena">
                Typy zelených střech
            </h2>
            <p className="my-4">
                Zelené střechy ukládají přirozeným způsobem vodu, vážou prach a
                ani při extrémních teplotách se téměř nezahřívají. Chrání
                izolaci střechy před působením životního prostředí ještě lépe
                než štěrkový násyp a prodlužují její životnost. Díky snížení
                poplatků za odvod dešťových vod lze v mnoha obcích, které mají
                poplatky rozdělené na vodné a stočné, ušetřit. Územní plány
                stále více ozelenění střech podporují nebo alespoň uznávají jako
                kompenzační opatření. Vznikají tak cenné biotopy.
            </p>
            <p>
                S každou vegetační střechou vzniká nový životní prostor.
                Intenzivní ozelenění s oblastmi trávníků a rostlin, plochami pro
                cesty a odpočinek lze utvářet a používat jako zahradu. Naproti
                tomu extenzivní ozeleňování je vytvářeno rostlinami nenáročnými
                a převážně nízkého vzrůstu, a pochozí jsou pouze za účelem
                kontroly a ošetřování. Obě formy ozeleňování tvoří cenné a
                zajímavé náhradní biotopy pro rostliny a mikroorganizmy.
                Navracejí přírodě nazpět něco z toho, co bylo ztraceno zástavbou
                půdy.
            </p>
            <button
                id="typ1"
                onClick={() => {
                    dispatch({ type: "VEGETACE" });
                    window.location.href = "/sluzby/zelene-strechy#typ1";
                }}
                className={`mt-10 w-full border-t border-neutral-300 bg-99center bg-no-repeat py-5 text-left text-base font-normal text-zelena  ${
                    state.vegetace ? "bg-close" : "bg-plus"
                }`}
            >
                Podle typu vegetace: extenzivní, intenzivní
            </button>
            {state.vegetace && (
                <div className="space-y-3 pb-5">
                    <h4>Extenzivní zelené střechy</h4>
                    <p>
                        Cílem extenzivního ozelenění je přírodně založená
                        vegetace s nízkým zatížením plochy a minimální potřebou
                        ošetřování. Jako rostliny vytvářející porost se často
                        uplatňují druhy rozchodníků (Sedum). Doplněna suchu
                        odolnými bylinami. Extenzivní ozelenění vyžaduje
                        minimální péči. V prvním roce až dvou, než rostliny
                        pokryjí celou plochu střechy, je třeba čas od času
                        vytrhat případný náletový plevel. Občas také přihnojit
                        pomalu rozpustným hnojivem, záleží na druhu použitého
                        substrátu. Někdy je třeba doplnit uhynulé rostliny po
                        zimě apod.
                    </p>
                    <h4>Intenzivní zelené střechy</h4>
                    <p>
                        Intenzivní ozelenění poskytuje rozmanité možnosti
                        utváření a může být, pokud je vhodně provedeno,
                        využíváno jako zahrada na střeše. Je možné vytvářet
                        rekreační loučky i vysazovat stromy. Při správném
                        dimenzování vegetační nosné vrstvy, dostatečném
                        zavlažování a zásobováním živinami jsou podmínky pro
                        růst rostlin na střeše téměř stejně dobré jako v půdě.
                        Je třeba přihlížet např. ke stabilitě dřevin a možným
                        negativním vlivům budovy, jako jsou sálající fasády.
                        Projektování intenzivního ozelenění a zvláště výběr
                        rostlin podle objektu vyžaduje příslušné odborné
                        znalosti. Pro dimenzování nosné vegetační vrstvy lze u
                        dřevin používat jednoduchého vzorce, a to „výška
                        vzrůstu/10 = tloušťka vrstvy substrátu“. Trávník a
                        půdopokryvné rostliny potřebují nejméně 20 cm substrátu.
                        I přes velkou vodní kapacitu substrátů musí být
                        intenzivní ozelenění a především také trávníky v období
                        sucha pravidelně zavlažovány. Jako u každé zahrádky u
                        domu existuje také na střeše bezprostřední souvislost
                        mezi stavem vegetace a péčí o ni.
                    </p>
                </div>
            )}
            <button
                id="typ2"
                onClick={() => {
                    dispatch({ type: "ZATIZENI" });
                    window.location.href = "/sluzby/zelene-strechy#typ2";
                }}
                className={`w-full border-t border-neutral-300 bg-99center bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
                    state.zatizeni ? "bg-close" : "bg-plus"
                }`}
            >
                Podle zatížení: lehké, středně těžké, těžké
            </button>
            {state.zatizeni && (
                <div className="space-y-3 pb-5">
                    <h4>Statika - nosnost střešní konstrukce</h4>
                    <p>
                        Nosnost střešní konstrukce je jedním z klíčových
                        kritérií pro ozelenění. Pro intenzivní ozeleňování by
                        mělo být počítáno min. 300 kg/m² plošné hmotnosti dle
                        navržené tloušťky substrátu. U extenzivních střech je
                        zatížení cca 150 kg/m² ve stavu nasycení vodou. Toto se
                        týká při použití substrátu. Dnes lze použít i minerální
                        rohože, které významně sníží zatížení na cca 50kg/m². K
                        tomuto zatížení je třeba vždy připočítat zatížení
                        sněhovou pokrývkou pro danou lokalitu.
                    </p>
                </div>
            )}
            <button
                id="typ3"
                onClick={() => {
                    dispatch({ type: "SKLON" });
                    window.location.href = "/sluzby/zelene-strechy#typ3";
                }}
                className={`w-full border-t border-neutral-300 bg-99center bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
                    state.sklon ? "bg-close" : "bg-plus"
                }`}
            >
                Podle sklonu: mírný sklon, šikmé střechy, strmé střechy
            </button>
            {state.sklon && (
                <div className="space-y-3 pb-5">
                    <h4>Sklon střechy</h4>
                    <p>
                        Dá se říci, že dnes již lze ozelenit jakýkoliv sklon
                        střechy. Samozřejmě, že čím větší sklon, tím je řešení
                        složitější a dražší. Sklony do 15° není většinou nutné
                        zajišťovat proti sesuvu. U větších sklonů je třeba
                        zajistit substrát proti sjíždění. Čím větší sklon, tím
                        více fixačních prvků musí být použito. Toto je třeba
                        řešit pro každou střechu individuálně. Fixace se v
                        zásadě provádí buď s využitím spodní hrany střechy,
                        fixace přes hřeben střechy, fixace v ploše střechy a
                        nebo kombinací těchto typů.
                    </p>
                </div>
            )}
            <button
                id="typ4"
                onClick={() => {
                    dispatch({ type: "CENA" });
                    window.location.href = "/sluzby/zelene-strechy#typ4";
                }}
                className={`w-full border-t border-neutral-300 bg-99center bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
                    state.cena ? "bg-close" : "bg-plus"
                }`}
            >
                Podle ceny: úsporné, ostatní
            </button>
            {state.cena && (
                <div className="space-y-3 pb-5">
                    <h4>Finanční náročnost</h4>
                    <p>
                        Celkovou cenu realizace zelené střechy je třeba vždy
                        stanovit pro konkrétní střechu individuálně. Pro
                        extenzivní střechy se sklonem do 15° a nejobvyklejší
                        skladbu se ceny pohybují v těchto relacích:
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                        <li>Celá skladba bez hydroizolace: 1100 Kč/m²</li>
                        <li>
                            Pokládka hydroizolační fólie včetně oplechování: 600
                            Kč/m²
                        </li>
                        <li>
                            Pokládka drenážní a akumulační vrstvy: 250 Kč/m²
                        </li>
                        <li>
                            Pokládka filtrační a ochranné textílie: 125 Kč/m²
                        </li>
                        <li>Substrát a jeho uložení na střechu: 350 Kč/m²</li>
                        <li>Osázení rostlinami: 350 Kč/m²</li>
                    </ul>
                    <p>
                        Ceny jsou uvedeny bez DPH. V ceně není zahrnuta doprava
                        na stavbu.
                    </p>
                    <p>
                        Osázení rostlinami je počítáno sazenicemi rozchodníků
                        25ks/m². Levnější variantou je použití osiva, nebo
                        řízků. Naopak podstatně dražší variantou je
                        rozchodníkový koberec.
                    </p>
                    <p>
                        Existuje i jednodušší jednovrstvá skladba s vynecháním
                        drenážní vrstvy.
                    </p>
                    <p>
                        Pokud je již na střeše hydroizolace, ale není odolná
                        prorůstání, lze na ni položit speciální tenkou membránu
                        proti prorůstání, kterou není nutné ani svařovat.
                    </p>
                    <p>
                        Jako hydroizolační fólii používáme standardně PVC
                        svařované fólie, ojediněle lepené EPDM fólie nebo
                        asfaltové pásy.
                    </p>
                </div>
            )}
            <button
                id="typ5"
                onClick={() => {
                    dispatch({ type: "NAROCNOST" });
                    window.location.href = "/sluzby/zelene-strechy#typ5";
                }}
                className={`w-full border-neutral-300 bg-99center bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
                    state.narocnost ? "border-t bg-close" : "border-y bg-plus"
                }`}
            >
                Údržba zelených střech
            </button>
            {state.narocnost && (
                <div
                    className={`space-y-3 pb-5 ${
                        state.narocnost ? "border-b border-neutral-300" : ""
                    }`}
                >
                    <h4>Sklon střechy</h4>
                    <p>
                        Extenzivní zelené střechy se často nazývají také
                        bezúdržbové. Je to pravda jen do určité míry. Jakmile
                        skalničky pokryjí celou střechu, není potřeba se o
                        střechu příliš starat. Pokud ale chceme , aby střecha
                        také pěkně vypadala, je dobré alespoň jednou za rok na
                        ni vylézt a vytrhat plevel, doplnit prořídlá místa,
                        rozhodit pomalu rozpustné hnojivo, zkontrolovat a
                        případně vyčistit svody.
                    </p>
                    <p>
                        U intenzivních střech je údržba stejně náročná jako na
                        zahradě nebo v parku. Záleží opět na tom, jak pěkně
                        chceme aby střecha vypadala.
                    </p>
                </div>
            )}
        </Container>
    );
}

export default Types;
