import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ExperiencesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ExperiencesPage({ params }: ExperiencesPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const experiences = [
    { slug: "dinner", icon: "🍽️", ...t.experiences.dinner },
    { slug: "party", icon: "🎉", ...t.experiences.party },
    { slug: "singles", icon: "💘", ...t.experiences.singles },
    { slug: "treasure-hunt", icon: "🗺️", ...t.experiences.treasureHunt },
    { slug: "sailboat", icon: "⛵", ...t.experiences.sailboat },
    { slug: "brunch", icon: "🥂", ...t.experiences.brunch },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.experiences.title}</h1>
          <p className="text-xl text-zinc-400">{t.experiences.subtitle}</p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${locale}/app/experiences/${exp.slug}`}
                className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all hover:scale-[1.02]"
              >
                <div className="h-48 rounded-xl bg-zinc-800 mb-6 flex items-center justify-center text-6xl">
                  {exp.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {exp.name}
                </h3>
                <p className="text-zinc-400 mb-4">{exp.shortDescription}</p>
                <span className="text-amber-400 text-sm font-medium">
                  {t.common.learnMore} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
