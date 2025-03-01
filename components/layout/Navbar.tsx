"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import LanguageSwitcher from "../ui/LanguageSwitcher";
import Container from "./Container";
import { usePathname } from "@/i18n";
import { Link } from "@/i18n";

const paths = [
  "/",
  "/sluzby/zelene-strechy",
  "/sluzby/jezirka",
  "/sluzby/blower-door-test",
  "/sluzby/termovize",
  "/sluzby/dotace",
];

export default function Navbar() {
  const t = useTranslations("Header.Navbar");
  const [openBurger, setOpenBurger] = useState(false);
  const [openSluzby, setOpenSluzby] = useState(false);
  const [white, setWhite] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setWhite(paths.includes(pathname));
  }, [pathname]);

  const toggleHandler = () => {
    setOpenSluzby(false);
    setOpenBurger((prevState) => !prevState);
  };

  const closeHandler = () => {
    setOpenSluzby(false);
    setOpenBurger(false);
  };

  const openSluzbyHandler = () => {
    setOpenSluzby(true);
  };

  return (
    <Container className="border-b border-neutral-100">
      <div className="relative flex h-20 items-center justify-between">
        <Link href="/" className="pb-2">
          <Image
            alt={t("image.alt")}
            width={210}
            height={30}
            quality={100}
            src={`${
              white
                ? "https://utfs.io/f/cc3b54c3-8979-48e4-86be-9587543875cb-mlcvw4.png"
                : "https://utfs.io/f/88dc353c-e7e5-4caa-a27c-5f228c000a41_logo.png"
            }`}
          />
        </Link>
        <button
          className="translate-x-4 cursor-pointer p-5 sm:hidden"
          onClick={toggleHandler}
          aria-label="Menu"
        >
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="4"
              rx="2"
              fill={`${white ? "rgb(var(--background-rgb))" : "rgb(var(--foreground-rgb))"}`}
            />
            <rect
              y="8"
              width="28"
              height="4"
              rx="2"
              fill={`${white ? "rgb(var(--background-rgb))" : "rgb(var(--foreground-rgb))"}`}
            />
            <rect
              y="16"
              width="28"
              height="4"
              rx="2"
              fill={`${white ? "rgb(var(--background-rgb))" : "rgb(var(--foreground-rgb))"}`}
            />
          </svg>
        </button>
        <nav
          className={`sm:flex sm:items-center sm:space-x-2 ${
            openBurger
              ? "absolute top-16 z-20 flex w-full flex-col rounded-xl border border-neutral-800 bg-neutral-100"
              : "hidden"
          }`}
        >
          <button>
            <Link
              href="/"
              onClick={closeHandler}
              className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
                white && "sm:text-neutral-100"
              }`}
            >
              {t("home.label")}
            </Link>
          </button>
          <div className="relative ml-0">
            <button
              onBlur={async () => await setTimeout(() => setOpenSluzby(false), 500)}
              onMouseDown={() => {
                openSluzbyHandler();
              }}
              className={`block w-full rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
                white && "sm:text-neutral-100"
              }`}
            >
              {openSluzby ? (
                <Link href="/sluzby" className="block" onClick={closeHandler}>
                  {t("services.label")}
                </Link>
              ) : (
                <div>{t("services.label")}</div>
              )}
            </button>
            <ul
              className={`absolute left-28 top-3 flex min-w-max list-none flex-col rounded-xl border border-neutral-800 bg-neutral-100 text-neutral-800 transition-all duration-300 sm:left-0 sm:top-12 ${
                !openSluzby && "pointer-events-none -translate-y-3 opacity-0"
              }`}
            >
              <li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
                <Link href="/sluzby/zelene-strechy" onClick={closeHandler}>
                  <div className="px-3 py-1.5">{t("services.list.strechy")}</div>
                </Link>
              </li>
              <li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
                <Link href="/sluzby/jezirka" onClick={closeHandler}>
                  <div className="px-3 py-1.5">{t("services.list.jezirka")}</div>
                </Link>
              </li>
              <li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
                <Link href="/sluzby/blower-door-test" onClick={closeHandler}>
                  <div className="px-3 py-1.5">{t("services.list.blower")}</div>
                </Link>
              </li>
              <li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
                <Link href="/sluzby/termovize" onClick={closeHandler}>
                  <div className="px-3 py-1.5">{t("services.list.termo")}</div>
                </Link>
              </li>
              <li className="h-9 min-w-max rounded-xl hover:bg-neutral-200">
                <Link href="/sluzby/dotace" onClick={closeHandler}>
                  <div className="px-3 py-1.5">{t("services.list.dotace")}</div>
                </Link>
              </li>
            </ul>
          </div>
          <button>
            <Link
              href="/reference"
              className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
                white && "sm:text-neutral-100"
              }`}
              onClick={closeHandler}
            >
              {t("reference.label")}
            </Link>
          </button>
          <button>
            <Link
              href="/kontakt"
              className={`block rounded-xl px-3 py-4 text-left hover:bg-neutral-200 sm:rounded-none sm:hover:bg-transparent ${
                white && "sm:text-neutral-100"
              }`}
              onClick={closeHandler}
            >
              {t("contact.label")}
            </Link>
          </button>
          <LanguageSwitcher />
        </nav>
      </div>
    </Container>
  );
}
