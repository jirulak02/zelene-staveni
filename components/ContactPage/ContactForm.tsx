"use client";

import Link from "next/link";
import { useState } from "react";

import useInput from "@/hooks/use-input";

export default function ContactForm() {
	const {
		value: jmeno,
		isValid: jmenoIsValid,
		hasError: jmenoHasError,
		valueChangeHandler: jmenoChangeHandler,
		inputBlurHandler: jmenoBlurHandler,
		reset: jmenoReset,
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
	const [obec, setObec] = useState("");
	const [adresa, setAdresa] = useState("");
	const [psc, setPsc] = useState("");
	const [select, setSelect] = useState("zelene-strechy");
	const [zprava, setZprava] = useState("");
	const [checkbox, setCheckbox] = useState(false);

	let formIsValid = false;

	if (jmenoIsValid && emailIsValid && telIsValid && checkbox) {
		formIsValid = true;
	}

	function obecChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setObec(event.target.value);
	}

	function adresaChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setAdresa(event.target.value);
	}

	function pscChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setPsc(event.target.value);
	}

	function selectChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelect(event.target.value);
	}

	function zpravaChangeHandler(
		event: React.ChangeEvent<HTMLTextAreaElement>
	) {
		setZprava(event.target.value);
	}

	function checkboxChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setCheckbox(event.target.checked);
	}

	function onFormSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(
			jmeno,
			email,
			tel,
			obec,
			adresa,
			psc,
			select,
			zprava,
			checkbox
		);

		jmenoReset();
		emailReset();
		telReset();
		setObec("");
		setAdresa("");
		setPsc("");
		setSelect("zelene-strechy");
		setZprava("");
		setCheckbox(false);
	}

	return (
		<>
			<form
				className="flex flex-col space-y-2"
				onSubmit={onFormSubmitHandler}
			>
				<div className="grid grid-cols-2">
					<div className="my-1 mr-2 flex flex-col">
						<label htmlFor="jmeno" className="ml-4">
							<span className="text-red-500">*</span>Jméno a
							příjmení:
						</label>
						<input
							className={`rounded-3xl border-2 px-5 py-3 ${
								jmenoHasError
									? "border-red-500 hover:border-red-500 focus:border-red-500"
									: "hover:border-zelena focus:border-zelena"
							}`}
							value={jmeno}
							onChange={jmenoChangeHandler}
							onBlur={jmenoBlurHandler}
							type="text"
							id="jmeno"
							name="jmeno"
							placeholder="Petr Šimeček"
							autoComplete="name"
						/>
					</div>
					<div className="my-1 ml-2 flex flex-col">
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
							placeholder="info@zelenestaveni.cz"
							autoComplete="email"
						/>
					</div>
					<div className="my-1 mr-2 flex flex-col">
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
					</div>
					<div className="my-1 ml-2 flex flex-col">
						<label htmlFor="obec" className="ml-5">
							Obec:
						</label>
						<input
							className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
							value={obec}
							onChange={obecChangeHandler}
							type="text"
							id="obec"
							name="obec"
							placeholder="Tehov"
							autoComplete="address-level2"
						/>
					</div>
					<div className="my-1 mr-2 flex flex-col">
						<label htmlFor="adresa" className="ml-5">
							Adresa:
						</label>
						<input
							className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
							value={adresa}
							onChange={adresaChangeHandler}
							type="text"
							id="adresa"
							name="adresa"
							placeholder="Panská 212"
							autoComplete="address-line1"
						/>
					</div>
					<div className="my-1 ml-2 flex flex-col">
						<label htmlFor="psc" className="ml-5">
							PSČ:
						</label>
						<input
							className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
							value={psc}
							onChange={pscChangeHandler}
							type="number"
							min={0}
							max={99999}
							id="psc"
							name="psc"
							placeholder="25101"
							autoComplete="postal-code"
						/>
					</div>
				</div>
				<div className="my-2 flex flex-col">
					<label htmlFor="select" className="ml-4">
						<span className="text-red-500">*</span>Ohledně čeho
						píšete:
					</label>
					{/* Je tohle nutny? */}
					<div className="relative">
						<select
							className="w-full rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
							value={select}
							onChange={selectChangeHandler}
							id="select"
							name="select"
						>
							<option value="zelene-strechy">
								Zelené střechy
							</option>
							<option value="korenove-cistirny">
								Kořenové čistírny
							</option>
							<option value="blower-door-test">
								Blower Door test
							</option>
							<option value="termovize">Termovize</option>
							<option value="dotace">Dotace</option>
							<option value="jine">Jiné</option>
						</select>
					</div>
				</div>
				<div className="my-2 flex flex-col">
					<label htmlFor="zprava" className="ml-5">
						Vaše zpráva:
					</label>
					<textarea
						className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
						value={zprava}
						onChange={zpravaChangeHandler}
						placeholder="Doplňte co potřebujete"
						id="zprava"
						rows={6}
					/>
				</div>
				<div className="mx-1 flex space-x-3 py-2">
					<input
						checked={checkbox}
						onChange={checkboxChangeHandler}
						type="checkbox"
						id="souhlas"
						name="souhlas"
					/>
					<p>
						<span className="text-red-500">*</span>Souhlasím s{" "}
						<Link
							href="/ochrana-osobnich-udaju"
							className="border-b border-neutral-100 text-zelena hover:border-zelena"
						>
							podmínkami zpracování osobních údajů
						</Link>
					</p>
				</div>
				<div>
					<button type="submit" className="my-2 text-left">
						<span className="rounded-3xl bg-zelena px-5 py-3 text-base text-neutral-100 hover:bg-neutral-800">
							ODESLAT ZPRÁVU
						</span>
					</button>
				</div>
			</form>
		</>
	);
}
