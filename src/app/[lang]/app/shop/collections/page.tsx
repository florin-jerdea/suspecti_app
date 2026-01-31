import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CollectionsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CollectionsPage({ params }: CollectionsPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const products = [
    { id: 1, name: "Rochie Noir Elegance", price: "299 RON", style: "Elegant" },
    { id: 2, name: "Costum Classic Black", price: "449 RON", style: "Elegant" },
    { id: 3, name: "Set Accesorii 1920s", price: "89 RON", style: "Retro" },
    { id: 4, name: "Pălărie Fedora", price: "79 RON", style: "Retro" },
    { id: 5, name: "Rochie Red Mystery", price: "329 RON", style: "Elegant" },
    { id: 6, name: "Cravată Slim Black", price: "59 RON", style: "Elegant" },
    { id: 7, name: "Mănuși Vintage", price: "49 RON", style: "Retro" },
    { id: 8, name: "Cercei Statement", price: "69 RON", style: "Elegant" },
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.shop.collections.title}</h1>
          <p className="text-xl text-zinc-400">{t.shop.collections.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {["Toate", "Elegant", "Retro", "Casual"].map((filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  i === 0
                    ? "bg-amber-400 text-zinc-900"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all"
              >
                <div className="aspect-square rounded-xl bg-zinc-800 mb-4 flex items-center justify-center text-4xl text-zinc-600">
                  👗
                </div>
                <span className="text-xs text-amber-400/70 font-medium">{product.style}</span>
                <h3 className="font-semibold mt-1 mb-2 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-amber-400 font-medium mb-4">{product.price}</p>
                <button className="w-full py-2 text-sm font-medium bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors">
                  {t.shop.product.addToCart}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
