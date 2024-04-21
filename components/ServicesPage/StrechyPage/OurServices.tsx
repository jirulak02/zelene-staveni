"use client";

import { useState } from "react";

import { messages } from "@/components/data/ServicesStrechy";
import ContainerBezova from "@/components/layout/ContainerBezova";

export default function OurServices() {
  const [message, setMessage] = useState(messages[0].name);
  const [clicked, setClicked] = useState("Nezávazná konzultace");

  const messageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLInputElement;
    const newMessage = target.name;
    const innerHTML = target.innerHTML;

    setClicked(innerHTML);
    setMessage(newMessage);
  };

  return (
    <ContainerBezova>
      <div className="flex flex-col items-center space-y-6 text-center">
        <h2 className="text-zelena">Naše služby</h2>
        <div className="w-full">
          <div className="overflow-y-hidden whitespace-nowrap">
            {messages.map((button) => (
              <button
                key={button.title}
                name={button.name}
                onClick={messageHandler}
                className={`px-3 py-2 font-semibold text-hneda hover:text-neutral-800 ${
                  clicked === button.title
                    ? "border-2 border-b-0 border-zelena bg-neutral-100 text-neutral-800"
                    : ""
                }`}
              >
                {button.title}
              </button>
            ))}
          </div>
          <div className="-mt-0.5 w-full border-2 border-zelena bg-neutral-100 px-6 py-4 text-left">
            {message}
          </div>
        </div>
        <p className="max-w-xl">
          Pošlete nám výkres střechy, lokalitu a Vaši představu. Obratem Vám vypracujeme nabídku.
          Věříme, že spolu dojdeme k řešení, které Vás uspokojí nejen esteticky, ale i finančně.
        </p>
        <p>
          Dodržujeme{" "}
          <a
            className="border-b border-bezova text-zelena hover:border-zelena"
            href="https://utfs.io/f/ab8783bf-6134-4c7d-8b2b-cc7eda10b400_zelene_strachy_standardy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            standardy Zelených střech
          </a>
          .
        </p>
      </div>
    </ContainerBezova>
  );
}
