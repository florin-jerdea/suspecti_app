import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.about.title}</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto" />
        </div>
      </section>

      {/* What is Suspecți */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t.about.whatIs.title}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {t.about.whatIs.description}
          </p>
        </div>
      </section>

      {/* Why Suspecți */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.about.why.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-2xl">✓</span>
              <p className="text-zinc-300">{t.about.why.differentiator1}</p>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-2xl">✓</span>
              <p className="text-zinc-300">{t.about.why.differentiator2}</p>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-2xl">✓</span>
              <p className="text-zinc-300">{t.about.why.differentiator3}</p>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
              <span className="text-2xl">✓</span>
              <p className="text-zinc-300">{t.about.why.differentiator4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.about.howItWorks.title}</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: t.home.howItWorks.step1.title, desc: t.home.howItWorks.step1.description },
              { step: 2, title: t.home.howItWorks.step2.title, desc: t.home.howItWorks.step2.description },
              { step: 3, title: t.home.howItWorks.step3.title, desc: t.home.howItWorks.step3.description },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-zinc-900 text-xl font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
