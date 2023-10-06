"use client";

import Link from "next/link";
import { Form, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

export type ContactFormData = {
  name: string;
  email: string;
  tel: string;
  town: string;
  address: string;
  postal: string;
  select: string;
  message: string;
  checkbox: boolean;
};

export default function ContactForm() {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  return (
    <Form
      action={"/api/form"}
      encType="application/json"
      control={control}
      onSuccess={() => {
        toast.success("Formulář byl úspěšně odeslán.");
      }}
      onError={() => {
        toast.error("Formulář se nepodařilo odeslat.");
      }}
      className="flex flex-col"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className={`flex flex-col sm:mr-2 ${!errors.name && "mb-5"}`}>
          <label htmlFor="name" className="ml-4">
            <span className="text-red-500">*</span>Jméno a příjmení:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.name
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="text"
            placeholder="Petr Šimeček"
            autoComplete="name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">Jméno nemůže být prázdné.</p>
          )}
        </div>
        <div className={`flex flex-col sm:ml-2 ${!errors.email && "mb-5"}`}>
          <label htmlFor="email" className="ml-4">
            <span className="text-red-500">*</span>Email:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.email
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="email"
            placeholder="simecek@zelenestaveni.cz"
            autoComplete="email"
            {...register("email", { required: true, pattern: /(.*)+@+(.*)/ })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">Email nemůže být prázdný.</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="pl-6 text-sm text-red-500">Email musí obsahovat @.</p>
          )}
        </div>
        <div className={`flex flex-col sm:mr-2 ${!errors.tel && "mb-5"}`}>
          <label htmlFor="tel" className="ml-4">
            <span className="text-red-500">*</span>Telefon:
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.tel
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="tel"
            placeholder="608974908"
            autoComplete="tel"
            {...register("tel", { required: true, minLength: 9 })}
            aria-invalid={errors.tel ? "true" : "false"}
          />
          {errors.tel?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">Telefon nemůže být prázdný.</p>
          )}
          {errors.tel?.type === "minLength" && (
            <p className="pl-6 text-sm text-red-500">Telefon musí mít alespoň 9 číslic.</p>
          )}
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="town" className="ml-5">
            Obec:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="text"
            placeholder="Tehov"
            autoComplete="address-level2"
            {...register("town")}
          />
        </div>
        <div className="mb-5 flex flex-col sm:mr-2">
          <label htmlFor="address" className="ml-6">
            Adresa:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="text"
            placeholder="Panská 212"
            autoComplete="address-line1"
            {...register("address")}
          />
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="postal" className="ml-5">
            PSČ:
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="number"
            min={0}
            max={99999}
            placeholder="25101"
            autoComplete="postal-code"
            {...register("postal")}
          />
        </div>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="select" className="ml-4">
          <span className="text-red-500">*</span>Ohledně čeho píšete:
        </label>
        <select
          className="w-full rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
          {...register("select")}
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
          placeholder="Doplňte co potřebujete"
          id="message"
          rows={6}
          {...register("message")}
        />
      </div>
      <div className={`mx-1 flex space-x-3 ${!errors.checkbox && "pb-5"}`}>
        <input
          type="checkbox"
          {...register("checkbox", { required: true })}
          aria-invalid={errors.checkbox ? "true" : "false"}
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
      {errors.checkbox?.type === "required" && (
        <p className="text-sm text-red-500">Souhlas s podmínkami je povinný.</p>
      )}
      <div className={`flex ${!isSubmitting && "py-[9px] "}`}>
        <button type="submit" {...(isSubmitting && { disabled: true })} className="text-left">
          <span
            className={`rounded-3xl px-5 py-3 text-base ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400 text-gray-300"
                : "bg-zelena text-neutral-100 hover:bg-neutral-800"
            }`}
          >
            {isSubmitting ? "ODESÍLÁ SE" : "ODESLAT ZPRÁVU"}
          </span>
        </button>
        {isSubmitting && <div className="loader ml-2 flex"></div>}
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 border-2 border-zelena",
          },
          error: {
            duration: 3000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}
