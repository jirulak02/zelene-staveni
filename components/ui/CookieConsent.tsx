"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [hideConsent, setHideConsent] = useState(true);

  useEffect(() => {
    const checkConsent = async () => {
      const consent = await (hasCookie("localConsent") as boolean | Promise<boolean>);
      setHideConsent(consent);
    };
    void checkConsent();
  }, []);

  const acceptCookie = () => {
    setHideConsent(true);
    setCookie("localConsent", "true", {});
  };

  return (
    <div
      className={`fixed bottom-0 z-50 w-full items-center justify-center bg-neutral-600 p-4 pr-10 text-center ${
        hideConsent ? "hidden" : "flex flex-col gap-2"
      }`}
    >
      <p className="text-sm text-neutral-100">
        Užíváme cookies, abychom vám zajistili co možná nejsnadnější použití našich webových
        stránek. Pokud budete nadále prohlížet naše stránky předpokládáme, že s použitím cookies
        souhlasíte.
      </p>
      <div>
        <button
          onClick={acceptCookie}
          className="rounded-md border-2 border-neutral-100 p-2 text-sm text-neutral-100 hover:border-zelena hover:bg-zelena"
        >
          Souhlasím
        </button>
      </div>
      <button
        className="absolute right-1 top-1 p-2"
        onClick={() => {
          setHideConsent(true);
        }}
        aria-label="Zavřít cookies"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15">
          <line x1="0" y1="0" x2="15" y2="15" stroke="rgb(245, 245, 245)" strokeWidth="2" />
          <line x1="0" y1="15" x2="15" y2="0" stroke="rgb(245, 245, 245)" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
