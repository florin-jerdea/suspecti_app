import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

interface NewsletterPageProps {
  params: Promise<{ lang: string }>;
}

export default async function NewsletterPage({ params }: NewsletterPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-6xl mb-6 block">📬</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.newsletter.title}</h1>
          <p className="text-xl text-zinc-400">{t.newsletter.subtitle}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.newsletter.benefits.title}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-2xl">🎟️</span>
              <p className="text-zinc-300">{t.newsletter.benefits.benefit1}</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-2xl">🔔</span>
              <p className="text-zinc-300">{t.newsletter.benefits.benefit2}</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-2xl">⏰</span>
              <p className="text-zinc-300">{t.newsletter.benefits.benefit3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="email"
              placeholder={t.newsletter.form.placeholder}
              className="w-full px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              {t.newsletter.form.submit}
            </button>
          </form>
          <p className="text-center text-zinc-500 text-sm mt-6">
            Nu trimitem spam. Poți să te dezabonezi oricând.
          </p>
        </div>
      </section>
    </div>
  );
}
