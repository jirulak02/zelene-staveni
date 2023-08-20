"use client";

import Link from "next/link";
import { useState } from "react";

import useInput from "@/hooks/use-input";
import { sendContactForm } from "@/lib/api";

export default function ContactForm() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: tel,
    isValid: telIsValid,
    hasError: telHasError,
    valueChangeHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
    reset: telReset,
  } = useInput((value) => value.trim().length > 8);
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [select, setSelect] = useState("zelene-strechy");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxHasError, setCheckboxHasError] = useState(false);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && telIsValid && checkbox) {
    formIsValid = true;
  }

  const obecChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTown(event.target.value);
  };

  const adresaChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const pscChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostal(event.target.value);
  };

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const zpravaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setCheckbox(value);
    if (value) {
      setCheckboxHasError(false);
    } else {
      setCheckboxHasError(true);
    }
  };

  const onFormSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) {
      nameBlurHandler();
      emailBlurHandler();
      telBlurHandler();
      if (!checkbox) {
        setCheckboxHasError(true);
      }
      return;
    }

    const data = {
      name,
      email,
      tel,
      town,
      address,
      postal,
      select,
      message,
    };

    setError(false);
    setSent(false);
    setIsSpinning(true);

    const status = await sendContactForm(data);
    if (status !== 200) {
      setError(true);
    } else {
      setSent(true);
    }

    setIsSpinning(false);
    nameReset();
    emailReset();
    telReset();
    setTown("");
    setAddress("");
    setPostal("");
    setSelect("zelene-strechy");
    setMessage("");
    setCheckbox(false);
    setCheckboxHasError(false);
  };

  return (
    <form className="flex flex-col" onSubmit={onFormSubmitHandler}>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className={`flex flex-col sm:mr-2 ${!nameHasError && "mb-5"}`}>
          <label htmlFor="name" className="ml-4">
            <span className="text-red-500">*</span>Jméno a příjmení:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              nameHasError
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
            name="name"
            placeholder="Petr Šimeček"
            autoComplete="name"
          />
          {nameHasError && <p className="pl-6 text-sm text-red-500">Jméno nemůže být prázdné.</p>}
        </div>
        <div className={`flex flex-col sm:ml-2 ${!emailHasError && "mb-5"}`}>
          <label htmlFor="email" className="ml-4">
            <span className="text-red-500">*</span>Email:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              emailHasError
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type="email"
            id="email"
            name="email"
            placeholder="simecek@zelenestaveni.cz"
            autoComplete="email"
          />
          {emailHasError && <p className="pl-6 text-sm text-red-500">Email musí obsahovat @.</p>}
        </div>
        <div className={`flex flex-col sm:mr-2 ${!telHasError && "mb-5"}`}>
          <label htmlFor="tel" className="ml-4">
            <span className="text-red-500">*</span>Telefon:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              telHasError
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            value={tel}
            onChange={telChangeHandler}
            onBlur={telBlurHandler}
            type="tel"
            id="tel"
            name="tel"
            placeholder="608974908"
            autoComplete="tel"
          />
          {telHasError && (
            <p className="pl-6 text-sm text-red-500">Telefon musí mít alespoň 9 číslic.</p>
          )}
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="town" className="ml-5">
            Obec:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            value={town}
            onChange={obecChangeHandler}
            type="text"
            id="town"
            name="town"
            placeholder="Tehov"
            autoComplete="address-level2"
          />
        </div>
        <div className="mb-5 flex flex-col sm:mr-2">
          <label htmlFor="address" className="ml-6">
            Adresa:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            value={address}
            onChange={adresaChangeHandler}
            type="text"
            id="address"
            name="address"
            placeholder="Panská 212"
            autoComplete="address-line1"
          />
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="postal" className="ml-5">
            PSČ:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            value={postal}
            onChange={pscChangeHandler}
            type="number"
            min={0}
            max={99999}
            id="postal"
            name="postal"
            placeholder="25101"
            autoComplete="postal-code"
          />
        </div>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="select" className="ml-4">
          <span className="text-red-500">*</span>Ohledně čeho píšete:
        </label>
        <select
          className="w-full rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
          value={select}
          onChange={selectChangeHandler}
          id="select"
          name="select"
        >
          <option value="zelene-strechy">Zelené střechy</option>
          <option value="korenove-cistirny">Kořenové čistírny</option>
          <option value="blower-door-test">Blower Door test</option>
          <option value="termovize">Termovize</option>
          <option value="dotace">Dotace</option>
          <option value="jine">Jiné</option>
        </select>
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="message" className="ml-5">
          Vaše zpráva:
        </label>
        <textarea
          className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
          value={message}
          onChange={zpravaChangeHandler}
          placeholder="Doplňte co potřebujete"
          id="message"
          rows={6}
        />
      </div>
      <div className={`mx-1 flex space-x-3 ${!checkboxHasError && "pb-5"}`}>
        <input
          checked={checkbox}
          onChange={checkboxChangeHandler}
          type="checkbox"
          id="souhlas"
          name="souhlas"
        />
        <p className="text-sm">
          <span className="text-sm text-red-500">*</span>Souhlasím s{" "}
          <Link
            href="/ochrana-osobnich-udaju"
            className="border-b border-neutral-100 text-sm text-zelena hover:border-zelena"
          >
            podmínkami zpracování osobních údajů
          </Link>
          .
        </p>
      </div>
      {checkboxHasError && <p className="text-sm text-red-500">Souhlas s podmínkami je povinný.</p>}
      <div className={`flex ${!isSpinning && "py-[9px]"}`}>
        <button type="submit" className="text-left">
          <span className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
            ODESLAT ZPRÁVU
          </span>
        </button>
        {isSpinning && <div className="loader ml-2 flex"></div>}
      </div>
      {error && <p className="text-sm text-red-500">Nepodařilo se formulář odeslat.</p>}
      {sent && <p className="text-sm text-zelena">Formulář byl odeslán.</p>}
    </form>
  );
}
