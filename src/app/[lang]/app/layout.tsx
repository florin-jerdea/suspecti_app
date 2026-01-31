import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function AppLayout({ children, params }: AppLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar locale={locale} dictionary={dictionary} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
