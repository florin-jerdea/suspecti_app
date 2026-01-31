"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Replace the locale in the pathname
    const segments = pathname.split("/");
    if (segments[1] === "ro" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    return segments.join("/") || "/";
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
      <Link
        href={switchLocale("ro")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          currentLocale === "ro"
            ? "bg-white text-zinc-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        RO
      </Link>
      <Link
        href={switchLocale("en")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          currentLocale === "en"
            ? "bg-white text-zinc-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
