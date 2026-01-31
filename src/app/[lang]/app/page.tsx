import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const experiences = [
    { slug: "dinner", ...t.experiences.dinner },
    { slug: "party", ...t.experiences.party },
    { slug: "singles", ...t.experiences.singles },
    { slug: "treasure-hunt", ...t.experiences.treasureHunt },
    { slug: "sailboat", ...t.experiences.sailboat },
    { slug: "brunch", ...t.experiences.brunch },
  ];

  return (
    <div className="bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        </div>

        {/* Video placeholder */}
        <div className="absolute inset-0 bg-zinc-900/50" />

        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400 text-sm sm:text-base tracking-widest uppercase mb-4">
            {t.home.hero.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {t.home.hero.title}
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/app/calendar`}
              className="px-8 py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-all hover:scale-105"
            >
              {t.home.hero.cta}
            </Link>
            <Link
              href={`/${locale}/app/corporate`}
              className="px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all"
            >
              {t.home.hero.ctaCorporate}
            </Link>
          </div>
        </div>
      </section>

      {/* What is NOT Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">{t.home.whatIsNot.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-3xl mb-4 block">🚫</span>
              <p className="text-zinc-300">{t.home.whatIsNot.notEscapeRoom}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-3xl mb-4 block">🎭</span>
              <p className="text-zinc-300">{t.home.whatIsNot.notTheatre}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-3xl mb-4 block">🏆</span>
              <p className="text-zinc-300">{t.home.whatIsNot.notCompetition}</p>
            </div>
          </div>
          <p className="text-lg text-amber-400/80">{t.home.whatIsNot.description}</p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">{t.home.experiences.title}</h2>
            <Link
              href={`/${locale}/app/experiences`}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              {t.home.experiences.viewAll} →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${locale}/app/experiences/${exp.slug}`}
                className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all hover:scale-[1.02]"
              >
                <div className="h-40 rounded-xl bg-zinc-800 mb-4 flex items-center justify-center text-4xl">
                  🎭
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {exp.name}
                </h3>
                <p className="text-zinc-400 text-sm">{exp.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">{t.home.howItWorks.title}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 rounded-full bg-amber-400 text-zinc-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.home.howItWorks.step1.title}</h3>
              <p className="text-zinc-400">{t.home.howItWorks.step1.description}</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-amber-400 text-zinc-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.home.howItWorks.step2.title}</h3>
              <p className="text-zinc-400">{t.home.howItWorks.step2.description}</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-amber-400 text-zinc-900 text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.home.howItWorks.step3.title}</h3>
              <p className="text-zinc-400">{t.home.howItWorks.step3.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">{t.home.whoIsFor.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-3 block">💃</span>
              <p className="font-medium">{t.home.whoIsFor.singles}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-3 block">💑</span>
              <p className="font-medium">{t.home.whoIsFor.couples}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-3 block">👥</span>
              <p className="font-medium">{t.home.whoIsFor.groups}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-3 block">🏢</span>
              <p className="font-medium">{t.home.whoIsFor.corporate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">{t.home.upcomingEvents.title}</h2>
            <Link
              href={`/${locale}/app/calendar`}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              {t.home.upcomingEvents.viewCalendar} →
            </Link>
          </div>
          {/* Placeholder events */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700"
              >
                <div className="mb-4 sm:mb-0">
                  <p className="text-amber-400 text-sm mb-1">15 Feb 2025 • 19:00</p>
                  <h3 className="text-xl font-semibold">Suspecți la Cină</h3>
                  <p className="text-zinc-400 text-sm">București, România</p>
                </div>
                <Link
                  href={`/${locale}/app/calendar`}
                  className="px-6 py-3 text-sm font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
                >
                  {t.nav.buyTicket}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">{t.home.testimonials.title}</h2>
            <Link
              href={`/${locale}/app/testimonials`}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              {t.home.testimonials.viewAll} →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-300 mb-4 italic">
                  &ldquo;O experiență incredibilă! Am cunoscut oameni noi și m-am distrat de minune.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-700" />
                  <div>
                    <p className="font-medium">Ana M.</p>
                    <p className="text-sm text-zinc-500">Suspecți la Cină</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-400/10 to-red-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.home.corporate.title}</h2>
          <p className="text-xl text-amber-400 mb-4">{t.home.corporate.subtitle}</p>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">{t.home.corporate.description}</p>
          <Link
            href={`/${locale}/app/corporate`}
            className="inline-flex px-8 py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-all hover:scale-105"
          >
            {t.home.corporate.cta}
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.home.newsletter.title}</h2>
          <p className="text-zinc-400 mb-8">{t.home.newsletter.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t.home.newsletter.placeholder}
              className="flex-1 px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
            />
            <button className="px-8 py-4 font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors">
              {t.home.newsletter.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          © 2025 Suspecți. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
