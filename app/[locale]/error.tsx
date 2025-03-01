"use client";

import { useLogger } from "next-axiom";
import { useTranslations } from "next-intl";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("Error");
  const log = useLogger();

  log.error("Error caught in app/error.tsx", error);

  return (
    <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-center text-center bg-neutral-100 p-3">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">{t("title")}</h2>
        <button
          className="m-auto rounded-3xl bg-zelena px-4 py-2 text-neutral-100 hover:bg-neutral-800 md:px-5 md:py-3"
          onClick={reset}
        >
          {t("button.label")}
        </button>
        <p>{t("message")}</p>
      </div>
    </div>
  );
}
