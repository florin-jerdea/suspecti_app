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

  // Mock events data with ticket availability for FOMO
  const events = [
    {
      id: 1,
      date: "15 Feb",
      year: "2025",
      time: "19:00",
      format: "dinner",
      location: "București",
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: locale === "ro" ? "O seară de mister și rafinament" : "An evening of mystery and refinement",
      spotsLeft: 4,
      totalSpots: 20,
      image: "🍽️",
      gradient: "from-amber-500/20 to-red-500/20",
    },
    {
      id: 2,
      date: "22 Feb",
      year: "2025",
      time: "20:00",
      format: "party",
      location: "București",
      title: locale === "ro" ? "Suspecți la Petrecere" : "Suspecți at a Party",
      subtitle: locale === "ro" ? "Intră în pielea personajului tău" : "Step into your character",
      spotsLeft: 8,
      totalSpots: 40,
      image: "🎉",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      date: "28 Feb",
      year: "2025",
      time: "19:30",
      format: "singles",
      location: "Cluj-Napoca",
      title: locale === "ro" ? "Suspecți la Prima Întâlnire" : "Suspecți at First Sight",
      subtitle: locale === "ro" ? "Cunoaște oameni noi într-un mod unic" : "Meet new people in a unique way",
      spotsLeft: 2,
      totalSpots: 16,
      image: "💘",
      gradient: "from-rose-500/20 to-red-500/20",
    },
    {
      id: 4,
      date: "8 Mar",
      year: "2025",
      time: "11:00",
      format: "brunch",
      location: "București",
      title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
      subtitle: locale === "ro" ? "Mister matinal cu delicii culinare" : "Morning mystery with culinary delights",
      spotsLeft: 12,
      totalSpots: 24,
      image: "🥂",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: 5,
      date: "15 Mar",
      year: "2025",
      time: "18:00",
      format: "treasure-hunt",
      location: "Brașov",
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți Treasure Hunt",
      subtitle: locale === "ro" ? "Aventură urbană cu mistere de rezolvat" : "Urban adventure with mysteries to solve",
      spotsLeft: 6,
      totalSpots: 30,
      image: "🗺️",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: 6,
      date: "22 Mar",
      year: "2025",
      time: "14:00",
      format: "sailboat",
      location: "Constanța",
      title: locale === "ro" ? "Suspecți pe Barcă" : "Suspecți on a Sailboat",
      subtitle: locale === "ro" ? "O experiență unică pe apă" : "A unique experience on water",
      spotsLeft: 0,
      totalSpots: 12,
      image: "⛵",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
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

  const getAvailabilityBadge = (spotsLeft: number) => {
    if (spotsLeft === 0) {
      return (
        <span className="px-3 py-1.5 text-xs font-bold bg-zinc-700 text-zinc-400 rounded-full">
          {t.calendar.event.soldOut}
        </span>
      );
    }
    if (spotsLeft <= 5) {
      return (
        <span className="px-3 py-1.5 text-xs font-bold bg-red-500/20 text-red-400 rounded-full border border-red-500/30 animate-pulse">
          🔥 {spotsLeft} {t.calendar.event.spotsLeft}
        </span>
      );
    }
    return (
      <span className="px-3 py-1.5 text-xs font-medium bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30">
        {spotsLeft} {t.calendar.event.spotsLeft}
      </span>
    );
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t.calendar.title}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.calendar.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {formats.map((format) => (
              <button
                key={format.value}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                  format.value === "all"
                    ? "bg-amber-400 text-zinc-900 shadow-lg shadow-amber-500/25"
                    : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 border border-zinc-700"
                }`}
              >
                {format.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${event.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Image/Icon Area */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center bg-zinc-900/50">
                  <span className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {event.image}
                  </span>

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
                    <div className="text-xl font-bold text-white">{event.date.split(" ")[0]}</div>
                    <div className="text-xs text-zinc-400 uppercase">{event.date.split(" ")[1]}</div>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4">
                    {getAvailabilityBadge(event.spotsLeft)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location & Time */}
                  <div className="flex items-center gap-3 text-sm text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <span>📍</span> {event.location}
                    </span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-zinc-400 text-sm mb-5 line-clamp-2">
                    {event.subtitle}
                  </p>

                  {/* Progress bar for spots */}
                  {event.spotsLeft > 0 && (
                    <div className="mb-5">
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            event.spotsLeft <= 5 ? "bg-red-500" : "bg-amber-400"
                          }`}
                          style={{ width: `${((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-zinc-500 mt-1.5">
                        {event.totalSpots - event.spotsLeft}/{event.totalSpots} {locale === "ro" ? "locuri ocupate" : "spots taken"}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={event.spotsLeft > 0 ? `/${locale}/app/experiences/${event.format}` : "#"}
                    className={`block w-full py-3.5 text-center text-sm font-semibold rounded-full transition-all ${
                      event.spotsLeft > 0
                        ? "bg-white text-zinc-900 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    }`}
                  >
                    {event.spotsLeft > 0 ? t.calendar.event.viewDetails : t.calendar.event.soldOut}
                    {event.spotsLeft > 0 && <span className="ml-2">→</span>}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-white/10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {locale === "ro" ? "Nu rata niciun eveniment!" : "Don't miss any event!"}
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              {locale === "ro"
                ? "Abonează-te la newsletter pentru acces prioritar la bilete și evenimente exclusive."
                : "Subscribe to our newsletter for priority access to tickets and exclusive events."}
            </p>
            <Link
              href={`/${locale}/app/newsletter`}
              className="inline-flex px-8 py-4 text-lg font-semibold text-zinc-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-all hover:scale-105"
            >
              {locale === "ro" ? "Abonează-te" : "Subscribe"} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
