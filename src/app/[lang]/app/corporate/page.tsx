import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

interface CorporatePageProps {
  params: Promise<{ lang: string }>;
}

export default async function CorporatePage({ params }: CorporatePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-400/10 to-red-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.corporate.title}</h1>
          <p className="text-xl text-amber-400 mb-4">{t.corporate.subtitle}</p>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Oferim o alternativă refreshing la team building-ul clasic. Creăm experiențe care sparg barierele între departamente și construiesc conexiuni autentice.
          </p>
        </div>
      </section>

      {/* What we solve */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.corporate.whatWeSolve.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-4 block">👥</span>
              <p className="text-zinc-300">{t.corporate.whatWeSolve.problem1}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-4 block">🔗</span>
              <p className="text-zinc-300">{t.corporate.whatWeSolve.problem2}</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-4xl mb-4 block">⭐</span>
              <p className="text-zinc-300">{t.corporate.whatWeSolve.problem3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.corporate.howItWorks.title}</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Discutăm nevoile", desc: "Înțelegem obiectivele și dimensiunea echipei" },
              { step: 2, title: "Personalizăm experiența", desc: "Adaptăm formatul la cultura companiei" },
              { step: 3, title: "Organizăm evenimentul", desc: "Ne ocupăm de toate detaliile logistice" },
              { step: 4, title: "Livrăm experiența", desc: "Echipa ta se bucură de o experiență memorabilă" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-zinc-900 text-xl font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.corporate.formats.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🍽️", name: "Corporate Dinner", desc: "10-50 participanți" },
              { icon: "🎉", name: "Corporate Party", desc: "20-100 participanți" },
              { icon: "🗺️", name: "Treasure Hunt", desc: "10-50 participanți" },
              { icon: "⛵", name: "Corporate Sailing", desc: "10-30 participanți" },
            ].map((format) => (
              <div key={format.name} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                <span className="text-4xl">{format.icon}</span>
                <div>
                  <h3 className="font-semibold">{format.name}</h3>
                  <p className="text-zinc-400 text-sm">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{t.corporate.whatIsIncluded.title}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moderatori profesioniști",
              "Materiale și recuzită",
              "Personalizare scenario",
              "Coordonare locație",
              "Suport foto/video (opțional)",
              "Raport post-eveniment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <span className="text-amber-400">✓</span>
                <span className="text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.corporate.cta.title}</h2>
          <p className="text-zinc-400 text-center mb-10">{t.corporate.cta.subtitle}</p>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{t.corporate.cta.formName}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                  placeholder="Ion Popescu"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{t.corporate.cta.formEmail}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                  placeholder="ion@companie.ro"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{t.corporate.cta.formCompany}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                  placeholder="Compania SRL"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">{t.corporate.cta.formParticipants}</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
                  placeholder="25"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">{t.corporate.cta.formMessage}</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 resize-none"
                placeholder="Spune-ne mai multe despre evenimentul tău..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
            >
              {t.corporate.cta.formSubmit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
