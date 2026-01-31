import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ShopPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const categories = [
    {
      slug: "collections",
      icon: "👗",
      title: t.shop.categories.collections,
      description: t.shop.collections.subtitle,
      count: 24,
    },
    {
      slug: "games",
      icon: "🎲",
      title: t.shop.categories.games,
      description: t.shop.games.subtitle,
      count: 6,
    },
    {
      slug: "bundles",
      icon: "🎁",
      title: t.shop.categories.bundles,
      description: t.shop.bundles.subtitle,
      count: 8,
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.shop.title}</h1>
          <p className="text-xl text-zinc-400">{t.shop.subtitle}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${locale}/app/shop/${category.slug}`}
                className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all hover:scale-[1.02] text-center"
              >
                <span className="text-6xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{category.description}</p>
                <span className="text-amber-400 text-sm font-medium">
                  {category.count} produse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Produse Populare</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rochie Noir Elegance", price: "299 RON", category: "collections" },
              { name: "Joc Mister la Cină", price: "149 RON", category: "games" },
              { name: "Set Accesorii 1920s", price: "89 RON", category: "collections" },
              { name: "Pachet Cadou Premium", price: "499 RON", category: "bundles" },
            ].map((product, i) => (
              <div
                key={i}
                className="group p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-amber-400/50 transition-all"
              >
                <div className="aspect-square rounded-xl bg-zinc-700 mb-4 flex items-center justify-center text-4xl text-zinc-500">
                  📦
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-amber-400 font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
