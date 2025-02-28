import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="absolute top-0 flex h-full w-full flex-col justify-center space-y-3 bg-neutral-100 p-3 text-center">
      <h2 className="font-semibold">{t("title")}</h2>
      <p>{t("message")}</p>
    </div>
  );
}
