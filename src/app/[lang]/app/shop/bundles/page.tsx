import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BundlesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function BundlesPage({ params }: BundlesPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  const products = [
    {
      id: 1,
      name: "Pachet Starter",
      description: "Joc + accesorii de bază",
      price: "199 RON",
      originalPrice: "248 RON",
    },
    {
      id: 2,
      name: "Pachet Premium",
      description: "Joc + ținută completă + accesorii",
      price: "499 RON",
      originalPrice: "627 RON",
    },
    {
      id: 3,
      name: "Pachet Duo",
      description: "2 jocuri + accesorii pentru cuplu",
      price: "349 RON",
      originalPrice: "446 RON",
    },
    {
      id: 4,
      name: "Pachet Party",
      description: "Joc pentru 20 persoane + decorațiuni",
      price: "399 RON",
      originalPrice: "518 RON",
    },
    {
      id: 5,
      name: "Pachet Corporate",
      description: "Soluție completă pentru echipe",
      price: "899 RON",
      originalPrice: "1199 RON",
    },
    {
      id: 6,
      name: "Pachet VIP",
      description: "Toate jocurile + colecția completă",
      price: "1299 RON",
      originalPrice: "1847 RON",
    },
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.shop.bundles.title}</h1>
          <p className="text-xl text-zinc-400">{t.shop.bundles.subtitle}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-all relative"
              >
                {/* Discount badge */}
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                  SAVE {Math.round((1 - parseInt(product.price) / parseInt(product.originalPrice)) * 100)}%
                </div>

                <div className="aspect-square rounded-xl bg-zinc-800 mb-4 flex items-center justify-center text-5xl text-zinc-600">
                  🎁
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-amber-400 font-bold text-xl">{product.price}</span>
                  <span className="text-zinc-500 line-through text-sm">{product.originalPrice}</span>
                </div>
                <button className="w-full py-3 text-sm font-medium bg-amber-400 text-zinc-900 hover:bg-amber-300 rounded-full transition-colors">
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
