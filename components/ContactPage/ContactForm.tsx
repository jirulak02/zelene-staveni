import Link from "next/link";

export default function ContactForm() {
	return (
		<>
			<form className="flex flex-col space-y-2">
				<div className="grid grid-cols-2">
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="fname" className="ml-4">
							<span className="text-red-500">*</span>Jméno a
							příjmení:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="text"
							// value={}
							id="fname"
							name="fname"
							placeholder="Petr Šimeček"
							autoComplete="name"
						/>
					</div>
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="email" className="ml-4">
							<span className="text-red-500">*</span>Email:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="email"
							// value={}
							id="email"
							name="email"
							placeholder="info@zelenestaveni.cz"
							autoComplete="email"
						/>
					</div>
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="phone" className="ml-4">
							<span className="text-red-500">*</span>Telefon:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="tel"
							// value={}
							id="phone"
							name="phone"
							placeholder="608974908"
							autoComplete="tel"
						/>
					</div>
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="mesto" className="ml-5">
							Obec:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="text"
							// value={}
							id="mesto"
							name="mesto"
							placeholder="Tehov"
							autoComplete="address-level2"
						/>
					</div>
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="address" className="ml-5">
							Adresa:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="text"
							// value={}
							id="address"
							name="address"
							placeholder="Panská 212"
							autoComplete="address-line1"
						/>
					</div>
					<div className="flex flex-col mx-2 my-1">
						<label htmlFor="psc" className="ml-5">
							PSČ:
						</label>
						<input
							className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
							type="number"
							min={0}
							max={99999}
							// value={}
							id="psc"
							name="psc"
							placeholder="25101"
							autoComplete="postal-code"
						/>
					</div>
				</div>
				<div className="flex flex-col m-2">
					<label htmlFor="select" className="ml-4">
						<span className="text-red-500">*</span>Ohledně čeho
						píšete:
					</label>
					<div className="relative">
						<select
							id="select"
							defaultValue="zelene-strechy"
							className="w-full px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
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
							<option value="jine">Jiné</option>
						</select>
					</div>
				</div>
				<div className="flex flex-col m-2">
					<label htmlFor="zprava" className="ml-5">
						Vaše zpráva:
					</label>
					<textarea
						className="px-5 py-3 rounded-3xl border-2 hover:border-zelena focus:border-zelena"
						placeholder="Doplňte co potřebujete"
						id="zprava"
						rows={6}
					/>
				</div>
				<div className="flex space-x-3 mx-3 py-2">
					<input
						type="checkbox"
						// value={}
						id="souhlas"
						name="souhlas"
					/>
					<p>
						<span className="text-red-500">*</span>Souhlasím s{" "}
						<Link
							href="/ochrana-osobnich-udaju"
							className="text-zelena border-b border-neutral-100 hover:border-zelena"
						>
							podmínkami zpracování osobních údajů
						</Link>
					</p>
				</div>
				<div>
					<button type="submit" className="text-left m-2">
						<span className="text-base py-3 px-5 rounded-3xl bg-zelena text-neutral-100 hover:bg-neutral-800">
							ODESLAT ZPRÁVU
						</span>
					</button>
				</div>
			</form>
		</>
	);
}
