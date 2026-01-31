import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

interface TestimonialsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      name: "Ana M.",
      format: "Dinner",
      text: "O experiență incredibilă! Am cunoscut oameni noi și m-am distrat de minune. Recomand tuturor!",
      type: "text",
    },
    {
      id: 2,
      name: "Mihai P.",
      format: "Party",
      text: "Cea mai tare petrecere la care am fost. Atmosfera a fost fantastică și organizarea impecabilă.",
      type: "text",
    },
    {
      id: 3,
      name: "Elena R.",
      format: "Singles",
      text: "Perfect pentru cei care vor să cunoască oameni noi într-un mod relaxat și distractiv.",
      type: "video",
    },
    {
      id: 4,
      name: "Andrei C.",
      format: "Treasure Hunt",
      text: "Am explorat București într-un mod complet nou. Echipa a fost super și puzzle-urile au fost creative.",
      type: "text",
    },
    {
      id: 5,
      name: "Maria D.",
      format: "Brunch",
      text: "Un brunch cu suspans! Mâncarea a fost delicioasă și experiența foarte originală.",
      type: "text",
    },
    {
      id: 6,
      name: "George T.",
      format: "Sailboat",
      text: "Mister pe mare! O combinație perfectă între aventură și socializare.",
      type: "video",
    },
  ];

  const formats = [
    t.testimonials.filters.all,
    "Dinner",
    "Party",
    "Singles",
    "Treasure Hunt",
    "Sailboat",
    "Brunch",
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.testimonials.title}</h1>
          <p className="text-xl text-zinc-400">{t.testimonials.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {formats.map((format, i) => (
              <button
                key={format}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  i === 0
                    ? "bg-amber-400 text-zinc-900"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {format}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                {testimonial.type === "video" ? (
                  <div className="aspect-video rounded-xl bg-zinc-800 mb-4 flex items-center justify-center">
                    <span className="text-4xl">▶️</span>
                  </div>
                ) : null}
                <p className="text-zinc-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">Suspecți {testimonial.format}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
