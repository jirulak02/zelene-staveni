import { useTranslations } from "next-intl";
import Image from "next/image";

import Copyright from "../ui/Copyright";
import ContainerBezova from "./ContainerBezova";
import { Link } from "@/i18n";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <ContainerBezova>
      <div className="flex w-full flex-col items-center space-y-3">
        <Image
          className="w-[300px] pb-2 md:w-[420px]"
          alt={t("image.alt")}
          width="420"
          height="60"
          quality={100}
          src="https://utfs.io/f/88dc353c-e7e5-4caa-a27c-5f228c000a41_logo.png"
        />
        <div className="text-center">
          <p>
            Tel:{" "}
            <a
              className="border-b border-bezova hover:border-neutral-800"
              href="tel:+420608974908"
              target="_blank"
              rel="noopener noreferrer"
            >
              +420 608 974 908
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="border-b border-bezova hover:border-neutral-800"
              href="mailto:info@zelenestaveni.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@zelenestaveni.cz
            </a>
          </p>
        </div>
        <div className="text-center">
          <Copyright />
          <Link
            href="/ochrana-osobnich-udaju"
            className="border-b border-bezova text-xs hover:border-neutral-800"
          >
            {t("link.label")}
          </Link>
        </div>
      </div>
    </ContainerBezova>
  );
}
