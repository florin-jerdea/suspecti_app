import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface GamesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function GamesPage({ params }: GamesPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const products = [
    { id: 1, name: "Mister la Cină", players: "6-12 jucători", price: "149 RON" },
    { id: 2, name: "Crimă la Mansion", players: "8-20 jucători", price: "179 RON" },
    { id: 3, name: "Spionul din Petrecere", players: "10-16 jucători", price: "159 RON" },
    { id: 4, name: "Secretele Familiei", players: "6-10 jucători", price: "129 RON" },
    { id: 5, name: "Jaful Perfect", players: "8-14 jucători", price: "169 RON" },
    { id: 6, name: "Nunta Suspectă", players: "12-20 jucători", price: "189 RON" },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}/app/shop`}
            className="text-amber-400 hover:text-amber-300 mb-6 inline-block"
          >
            ← {t.shop.title}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.shop.games.title}</h1>
          <p className="text-xl text-zinc-400">{t.shop.games.subtitle}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="font-semibold mb-4">Ce primești în fiecare pachet:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "📄 Fișiere PDF printabile",
                "🎬 Ghid video detaliat",
                "🎭 Carduri de personaje",
                "📋 Instrucțiuni pentru gazdă",
                "💡 Indicii și soluții",
                "🎵 Playlist tematic",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all"
              >
                <div className="aspect-video rounded-xl bg-zinc-800 mb-4 flex items-center justify-center text-5xl text-zinc-600">
                  🎲
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{product.players}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold text-lg">{product.price}</span>
                  <button className="px-4 py-2 text-sm font-medium bg-amber-400 text-zinc-900 hover:bg-amber-300 rounded-full transition-colors">
                    {t.shop.product.addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
