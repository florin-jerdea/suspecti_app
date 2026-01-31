"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/dictionaries";

interface NavbarProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Navbar({ locale, dictionary }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionary.nav;

  const navItems = [
    { href: `/${locale}/app/about`, label: t.about },
    { href: `/${locale}/app/experiences`, label: t.experiences },
    { href: `/${locale}/app/calendar`, label: t.calendar },
    { href: `/${locale}/app/corporate`, label: t.corporate },
    { href: `/${locale}/app/shop`, label: t.shop },
    { href: `/${locale}/app/testimonials`, label: t.testimonials },
    { href: `/${locale}/app/newsletter`, label: t.newsletter },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}/app`} className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">SUSPECȚI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={`/${locale}/app/calendar`}
              className="px-4 py-2 text-sm font-medium text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              {t.buyTicket}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/app/calendar`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 mt-4 text-center font-medium text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              {t.buyTicket}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
