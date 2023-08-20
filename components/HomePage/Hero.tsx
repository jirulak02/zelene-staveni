import Image from "next/image";

import Container from "../layout/Container";
import InfoCard from "./InfoCard";

export default function Hero() {
  return (
    <div className="-mt-image pb-12">
      <div className="relative h-[400px] md:h-[700px]">
        <div className="relative h-[400px] overflow-hidden md:h-[700px]">
          <Image
            src="https://uploadthing.com/f/8e0d18f4-fe62-45f8-ab70-0ba16909ab8e_strechy_hero.jpg"
            alt="Ukázka realizace"
            fill={true}
            quality={100}
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-shadow text-neutral-100">
          <h1 className="md:text-7xl">ZELENÉ</h1>
          <h1 className="md:text-7xl">STAVĚNÍ</h1>
          <h3 className="mt-3 font-normal">... trochu jiné stavění</h3>
        </div>
      </div>
      <Container className="relative z-10 -mt-16 md:-mt-24">
        <Image
          style={{ width: "1280px" }}
          alt="Zkrášlovací prvek trávy"
          width={1280}
          height={18}
          priority
          src="https://uploadthing.com/f/9f519bb7-eb54-4d37-b958-b7da531941df_grass.png"
        />
        <div className="-mt-1 grid grid-cols-1 bg-neutral-100 shadow-lg shadow-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            className="border-b-2 border-neutral-300 sm:border-r-2 lg:border-b-0"
            alt="Ikona skalničky"
            img="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
            heading="ZELENÉ STŘECHY"
            text="Ukládají vodu, vážou prach a nezahřívají se."
            href="/sluzby/zelene-strechy"
          />
          <InfoCard
            className="border-b-2 border-neutral-300 lg:border-b-0 lg:border-r-2"
            alt="Ikona recyklace kytek"
            img="https://uploadthing.com/f/5f71b8bc-4212-4b3e-b49e-f8a01fcc8b68_compost.png"
            heading="KOŘENOVÉ ČISTÍRNY"
            text="Přírodní čistírna odpadních vod domácností."
            href="/sluzby/korenove-cistirny"
          />
          <InfoCard
            className="border-b-2 border-neutral-300 sm:border-r-2 lg:border-b-0"
            alt="Ikona fénu"
            img="https://uploadthing.com/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
            heading="BLOWER DOOR TEST"
            text="Test vzduchotěsnosti obálky budov a bytů."
            href="/sluzby/blower-door-test"
          />
          <InfoCard
            alt="Ikona kamery v domě"
            img="https://uploadthing.com/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
            heading="MĚŘENÍ ÚNIKU TEPLA"
            text="Měření úniku tepla kvalitní termokamerou."
            href="/sluzby/termovize"
          />
        </div>
      </Container>
    </div>
  );
}
