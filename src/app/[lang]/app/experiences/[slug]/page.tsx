import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ExperiencePageProps {
  params: Promise<{ lang: string; slug: string }>;
}

const experienceIcons: Record<string, string> = {
  dinner: "🍽️",
  party: "🎉",
  singles: "💘",
  "treasure-hunt": "🗺️",
  sailboat: "⛵",
  brunch: "🥂",
};

const experienceKeys: Record<string, "dinner" | "party" | "singles" | "treasureHunt" | "sailboat" | "brunch"> = {
  dinner: "dinner",
  party: "party",
  singles: "singles",
  "treasure-hunt": "treasureHunt",
  sailboat: "sailboat",
  brunch: "brunch",
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { lang, slug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const expKey = experienceKeys[slug];
  if (!expKey) {
    notFound();
  }

  const experience = t.experiences[expKey];
  const icon = experienceIcons[slug];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}/app/experiences`}
            className="text-amber-400 hover:text-amber-300 mb-6 inline-block"
          >
            ← {t.experiences.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{icon}</span>
            <h1 className="text-4xl sm:text-5xl font-bold">{experience.name}</h1>
          </div>
          <p className="text-xl text-zinc-400 mb-8">{experience.description}</p>
          <Link
            href={`/${locale}/app/calendar`}
            className="inline-flex px-8 py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-all hover:scale-105"
          >
            {t.experiences.buyTicket}
          </Link>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.whatYouGet}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Experiență ghidată", "Roluri ușoare", "Interacțiune naturală", "Atmosferă relaxată"].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <span className="text-amber-400">✓</span>
                <span className="text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.howItWorks}</h2>
          <div className="space-y-4">
            {[
              "Te înregistrezi și primești personajul",
              "Socializezi cu ceilalți participanți",
              "Descoperi indicii și rezolvi misterul",
              "Petreci o seară memorabilă",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="w-8 h-8 rounded-full bg-amber-400 text-zinc-900 font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-zinc-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.dressCode}</h2>
          <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 mb-4">
              Dress code-ul este simplu și accesibil. Nu ai nevoie de costume elaborate.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Elegant casual", "Culori închise", "Accesorii tematice (opțional)"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.gallery}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-zinc-800 flex items-center justify-center text-3xl text-zinc-600">
                📷
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.faq}</h2>
          <div className="space-y-4">
            {[
              { q: "Trebuie să vin cu prieteni?", a: "Nu, poți veni singur și vei cunoaște oameni noi." },
              { q: "Este complicat?", a: "Nu, rolurile sunt simple și vei fi ghidat pe tot parcursul." },
              { q: "Ce se întâmplă dacă nu cunosc pe nimeni?", a: "Asta e ideea! Experiența e făcută să te ajute să socializezi." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.experiences.upcomingEvents}</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                <div className="mb-4 sm:mb-0">
                  <p className="text-amber-400 text-sm mb-1">15 Feb 2025 • 19:00</p>
                  <h3 className="text-lg font-semibold">{experience.name}</h3>
                  <p className="text-zinc-400 text-sm">București, România</p>
                </div>
                <Link
                  href={`/${locale}/app/calendar`}
                  className="px-6 py-3 text-sm font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors text-center"
                >
                  {t.experiences.buyTicket}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-400/10 to-red-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pregătit pentru aventură?</h2>
          <Link
            href={`/${locale}/app/calendar`}
            className="inline-flex px-8 py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-all hover:scale-105"
          >
            {t.experiences.buyTicket}
          </Link>
        </div>
      </section>
    </div>
  );
}
