"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Optimistic placeholder — replace with real action when wired up
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-6 py-8"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-2xl text-stone-900 mb-3">Thank you.</h4>
          <p className="text-stone-600 text-[15px] leading-relaxed max-w-sm">
            We&apos;ve received your message and will reply within one working day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[11px] tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 transition-colors mt-2"
        >
          Send another
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="space-y-7" onSubmit={onSubmit} aria-busy={submitting}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-first" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
            {t("firstName")}
          </label>
          <input
            id="contact-first"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            disabled={submitting}
            className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="contact-last" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
            {t("lastName")}
          </label>
          <input
            id="contact-last"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            disabled={submitting}
            className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
          {t("email")}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={submitting}
          className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          disabled={submitting}
          className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-stone-900 border-b border-stone-400 pb-2 hover:border-stone-900 transition-all duration-500 mt-4 min-h-[44px] disabled:opacity-60 disabled:cursor-wait"
      >
        {submitting ? "Sending…" : t("send")}
        <ArrowRight
          className={`w-3.5 h-3.5 hover-arrow transition-transform ${submitting ? "translate-x-1" : ""}`}
        />
      </button>
    </form>
  );
}
