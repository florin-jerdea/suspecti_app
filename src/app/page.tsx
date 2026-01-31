"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = getDictionary(locale).landing;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-400/3 blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur-sm">
          <button
            onClick={() => setLocale("ro")}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
              locale === "ro"
                ? "bg-amber-400 text-zinc-900"
                : "text-white/70 hover:text-white"
            }`}
          >
            RO
          </button>
          <button
            onClick={() => setLocale("en")}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
              locale === "en"
                ? "bg-amber-400 text-zinc-900"
                : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Brand Logo */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            SUSPECȚI
          </h1>
          <p className="mt-2 text-amber-400/80 text-sm sm:text-base tracking-widest uppercase">
            Interactive Social Experiences
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-8" />

        {/* Under Construction Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-amber-400 text-sm font-medium">{t.underConstruction}</span>
        </div>

        {/* Message */}
        <p className="mb-10 text-lg sm:text-xl text-zinc-400 leading-relaxed">
          {t.comingSoon}
        </p>

        {/* CTA Button */}
        <Link
          href={`/${locale}/app`}
          className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-zinc-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
        >
          {t.enterApp}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        {/* Footer */}
        <p className="mt-16 text-sm text-zinc-600">
          {t.copyright}
        </p>
      </main>
    </div>
  );
}
