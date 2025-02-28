"use client";

import { useTranslations } from "next-intl";
import { Form, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

import { Link } from "@/i18n";

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
  const t = useTranslations("ContactPage.ContactForm");
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
        toast.success(t("success"));
      }}
      onError={() => {
        toast.error(t("error"));
      }}
      className="flex flex-col"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className={`flex flex-col sm:mr-2 ${!errors.name && "mb-5"}`}>
          <label htmlFor="name" className="ml-4">
            <span className="text-red-500">*</span>
            {t("name.label")}
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.name
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="text"
            id="name"
            placeholder={t("name.placeholder")}
            autoComplete="name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">{t("name.errors.required")}</p>
          )}
        </div>
        <div className={`flex flex-col sm:ml-2 ${!errors.email && "mb-5"}`}>
          <label htmlFor="email" className="ml-4">
            <span className="text-red-500">*</span>
            {t("email.label")}
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.email
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="email"
            id="email"
            placeholder={t("email.placeholder")}
            autoComplete="email"
            {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">{t("email.errors.required")}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="pl-6 text-sm text-red-500">{t("email.errors.pattern")}</p>
          )}
        </div>
        <div className={`flex flex-col sm:mr-2 ${!errors.tel && "mb-5"}`}>
          <label htmlFor="tel" className="ml-4">
            <span className="text-red-500">*</span>
            {t("tel.label")}
          </label>
          <input
            className={`rounded-3xl border-2 px-5 py-3 ${
              errors.tel
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : "hover:border-zelena focus:border-zelena"
            }`}
            type="tel"
            id="tel"
            placeholder={t("tel.placeholder")}
            autoComplete="tel"
            {...register("tel", { required: true, minLength: 9 })}
            aria-invalid={errors.tel ? "true" : "false"}
          />
          {errors.tel?.type === "required" && (
            <p className="pl-6 text-sm text-red-500">{t("tel.errors.required")}</p>
          )}
          {errors.tel?.type === "minLength" && (
            <p className="pl-6 text-sm text-red-500">{t("tel.errors.minLength")}</p>
          )}
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="town" className="ml-5">
            {t("town.label")}
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="text"
            id="town"
            placeholder={t("town.placeholder")}
            autoComplete="address-level2"
            {...register("town")}
          />
        </div>
        <div className="mb-5 flex flex-col sm:mr-2">
          <label htmlFor="address" className="ml-6">
            {t("address.label")}
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="text"
            id="address"
            placeholder={t("address.placeholder")}
            autoComplete="address-line1"
            {...register("address")}
          />
        </div>
        <div className="mb-5 flex flex-col sm:ml-2">
          <label htmlFor="postal" className="ml-5">
            {t("postal.label")}
          </label>
          <input
            className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
            type="number"
            id="postal"
            min={0}
            placeholder={t("postal.placeholder")}
            autoComplete="postal-code"
            {...register("postal")}
          />
        </div>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="select" className="ml-4">
          <span className="text-red-500">*</span>
          {t("select.label")}
        </label>
        <select
          className="w-full rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
          id="select"
          {...register("select")}
        >
          <option value="zelene-strechy">{t("select.options.strechy")}</option>
          <option value="jezirka">{t("select.options.jezirka")}</option>
          <option value="blower-door-test">{t("select.options.blower")}</option>
          <option value="termovize">{t("select.options.termovize")}</option>
          <option value="dotace">{t("select.options.dotace")}</option>
          <option value="jine">{t("select.options.jine")}</option>
        </select>
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="message" className="ml-5">
          {t("message.label")}
        </label>
        <textarea
          className="rounded-3xl border-2 px-5 py-3 hover:border-zelena focus:border-zelena"
          id="message"
          placeholder={t("message.placeholder")}
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
          <span className="text-sm text-red-500">*</span>
          {t("consent.label")}
          {""}
          <Link
            href="/ochrana-osobnich-udaju"
            className="border-b border-neutral-100 text-sm text-zelena hover:border-zelena"
          >
            {t("consent.link.label")}
          </Link>
          .
        </p>
      </div>
      {errors.checkbox?.type === "required" && (
        <p className="text-sm text-red-500">{t("consent.errors.required")}</p>
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
            {isSubmitting ? t("button.loading") : t("button.label")}
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
            duration: 8000,
            position: "bottom-center",
            className: "text-lg font-semibold h-16 border-2 border-red-500",
          },
        }}
      />
    </Form>
  );
}
