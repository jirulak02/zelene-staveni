"use client";

import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("Footer.Copyright");

  return (
    <p className="text-xs">
      Copyright © 2010-{new Date().getFullYear()} Zelené stavění | {t("rights")}.
    </p>
  );
}
