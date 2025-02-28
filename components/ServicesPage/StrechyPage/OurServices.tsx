"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import ContainerBezova from "@/components/layout/ContainerBezova";

export default function OurServices() {
  const t = useTranslations("StrechyPage.OurServices");
  const data = useTranslations("data.strechy");

  const keys = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const dataMessages = keys.map((key) => ({
    id: `strechy_messages_${key}`,
    title: data(`messages.${key}.title`),
    name: data(`messages.${key}.name`),
  }));

  const [message, setMessage] = useState(dataMessages[0].name);
  const [clicked, setClicked] = useState(dataMessages[0].title);

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
        <h2 className="text-zelena">{t("title")}</h2>
        <div className="w-full">
          <div className="overflow-y-hidden whitespace-nowrap">
            {dataMessages.map((button) => (
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
        <p className="max-w-xl">{t("text1")}</p>
        <p>
          {t.rich("text2", {
            link: () => (
              <a
                className="border-b border-bezova text-zelena hover:border-zelena"
                href="https://utfs.io/f/ab8783bf-6134-4c7d-8b2b-cc7eda10b400_zelene_strachy_standardy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("link.label")}
              </a>
            ),
          })}
        </p>
      </div>
    </ContainerBezova>
  );
}
