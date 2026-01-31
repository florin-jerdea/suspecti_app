import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CalendarPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getDictionary(locale);

  // Mock events data
  const events = [
    { id: 1, date: "15 Feb 2025", time: "19:00", format: "dinner", location: "București", title: "Suspecți la Cină" },
    { id: 2, date: "22 Feb 2025", time: "20:00", format: "party", location: "București", title: "Suspecți la Petrecere" },
    { id: 3, date: "28 Feb 2025", time: "19:30", format: "singles", location: "Cluj-Napoca", title: "Suspecți la Prima Întâlnire" },
    { id: 4, date: "8 Mar 2025", time: "11:00", format: "brunch", location: "București", title: "Suspecți la Brunch" },
    { id: 5, date: "15 Mar 2025", time: "18:00", format: "treasure-hunt", location: "Brașov", title: "Suspecți în Treasure Hunt" },
    { id: 6, date: "22 Mar 2025", time: "14:00", format: "sailboat", location: "Constanța", title: "Suspecți pe Barcă" },
  ];

  const formats = [
    { value: "all", label: t.calendar.filters.all },
    { value: "dinner", label: "Dinner" },
    { value: "party", label: "Party" },
    { value: "singles", label: "Singles" },
    { value: "treasure-hunt", label: "Treasure Hunt" },
    { value: "sailboat", label: "Sailboat" },
    { value: "brunch", label: "Brunch" },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.calendar.title}</h1>
          <p className="text-xl text-zinc-400">{t.calendar.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {formats.map((format) => (
              <button
                key={format.value}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  format.value === "all"
                    ? "bg-amber-400 text-zinc-900"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {format.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-amber-400 text-sm font-medium">{event.date}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400 text-sm">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-zinc-400 text-sm flex items-center gap-2">
                    <span>📍</span>
                    {event.location}
                  </p>
                </div>
                <Link
                  href="#"
                  className="px-6 py-3 text-sm font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors text-center"
                >
                  {t.calendar.event.buyTicket}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
