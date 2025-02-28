"use client";

import { useTranslations } from "next-intl";
import { useReducer } from "react";

import ContainerBezova from "@/components/layout/ContainerBezova";

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

export default function Types() {
  const t = useTranslations("StrechyPage.Types");
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContainerBezova>
      <h2 className="pb-2 text-center text-zelena md:pb-5">{t("title")}</h2>
      <p className="my-4">{t("text1")}</p>
      <p>{t("text2")}</p>
      <button
        id="typ1"
        onClick={() => {
          dispatch({ type: "VEGETACE" });
          document.getElementById("typ1")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`mt-10 w-full border-t border-neutral-300 bg-(position:--background-position-99center) bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
          state.vegetace ? "bg-close" : "bg-plus"
        }`}
      >
        {t("vegetace.button.label")}
      </button>
      {state.vegetace && (
        <div className="space-y-3 pb-5">
          <h4>{t("vegetace.title1")}</h4>
          <p>{t("vegetace.text1")}</p>
          <h4>{t("vegetace.title2")}</h4>
          <p>{t("vegetace.text2")}</p>
        </div>
      )}
      <button
        id="typ2"
        onClick={() => {
          dispatch({ type: "ZATIZENI" });
          document.getElementById("typ2")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`w-full border-t border-neutral-300 bg-(position:--background-position-99center) bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
          state.zatizeni ? "bg-close" : "bg-plus"
        }`}
      >
        {t("zatizeni.button.label")}
      </button>
      {state.zatizeni && (
        <div className="space-y-3 pb-5">
          <h4>{t("zatizeni.title")}</h4>
          <p>{t("zatizeni.text")}</p>
        </div>
      )}
      <button
        id="typ3"
        onClick={() => {
          dispatch({ type: "SKLON" });
          document.getElementById("typ3")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`w-full border-t border-neutral-300 bg-(position:--background-position-99center) bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
          state.sklon ? "bg-close" : "bg-plus"
        }`}
      >
        {t("sklon.button.label")}
      </button>
      {state.sklon && (
        <div className="space-y-3 pb-5">
          <h4>{t("sklon.title")}</h4>
          <p>{t("sklon.text")}</p>
        </div>
      )}
      <button
        id="typ4"
        onClick={() => {
          dispatch({ type: "CENA" });
          document.getElementById("typ4")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`w-full border-t border-neutral-300 bg-(position:--background-position-99center) bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
          state.cena ? "bg-close" : "bg-plus"
        }`}
      >
        {t("cena.button.label")}
      </button>
      {state.cena && (
        <div className="space-y-3 pb-5">
          <h4>{t("cena.title")}</h4>
          <p>{t("cena.text1")}</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>{t("cena.list.item1")}</li>
            <li>{t("cena.list.item2")}</li>
            <li>{t("cena.list.item3")}</li>
            <li>{t("cena.list.item4")}</li>
            <li>{t("cena.list.item5")}</li>
          </ul>
          <p>{t("cena.text2")}</p>
          <p>{t("cena.text3")}</p>
          <p>{t("cena.text4")}</p>
          <p>{t("cena.text5")}</p>
          <p>{t("cena.text6")}</p>
        </div>
      )}
      <button
        id="typ5"
        onClick={() => {
          dispatch({ type: "NAROCNOST" });
          document.getElementById("typ5")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`w-full border-neutral-300 bg-(position:--background-position-99center) bg-no-repeat py-5 text-left text-base font-normal text-zelena ${
          state.narocnost ? "border-t bg-close" : "border-y bg-plus"
        }`}
      >
        {t("narocnost.button.label")}
      </button>
      {state.narocnost && (
        <div className={`space-y-3 pb-5 ${state.narocnost ? "border-b border-neutral-300" : ""}`}>
          <h4>{t("narocnost.title")}</h4>
          <p>{t("narocnost.text1")}</p>
          <p>{t("narocnost.text2")}</p>
        </div>
      )}
    </ContainerBezova>
  );
}
