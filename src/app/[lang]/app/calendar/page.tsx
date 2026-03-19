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

  const events = [
    {
      id: 1,
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: "Murder on the Dance Floor – Hollywood Noir 1940",
      date: "22",
      month: "Mar",
      year: "2026",
      time: "16:30",
      location: "Naive, București",
      price: "119 lei",
      priceNote: locale === "ro" ? "Early Bird (apoi 139 lei)" : "Early Bird (then 139 lei)",
      image: "/Suspecti/cina_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O cină diferită, cu mister și suspans. Fiecare participant primește identitatea unui personaj și devine parte din poveste."
        : "A different dinner, with mystery and suspense. Each participant receives a character identity and becomes part of the story.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-cina-murder-on-the-dance-floor-840449/",
      status: "available" as const,
    },
    {
      id: 2,
      title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
      subtitle: "Live Entertainment | DJ | Karaoke Experience",
      date: "29",
      month: "Mar",
      year: "2026",
      time: "15:00",
      location: locale === "ro" ? "Naive – etajul 5, București" : "Naive – 5th floor, Bucharest",
      price: "119 lei",
      priceNote: locale === "ro" ? "Include welcome drink + DJ & MC + experiență" : "Includes welcome drink + DJ & MC + experience",
      image: "/Suspecti/brunch.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O experiență de zi în care muzica bună și karaoke-ul cu un twist diferit aduc energia unei petreceri memorabile. Dress code: White with a touch of sparkle."
        : "A daytime experience where great music and karaoke with a unique twist bring the energy of a memorable party. Dress code: White with a touch of sparkle.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-brunch-839648/",
      status: "available" as const,
    },
    {
      id: 3,
      title: locale === "ro" ? "Suspecți la Party" : "Suspecți at Party",
      subtitle: "Diamonds After Dark",
      date: "3",
      month: "Apr",
      year: "2026",
      time: "20:00",
      location: locale === "ro" ? "Naive – etajul 4, București" : "Naive – 4th floor, Bucharest",
      price: "119 lei",
      priceNote: locale === "ro" ? "Early Bird (include prosecco + experiență + party)" : "Early Bird (includes prosecco + experience + party)",
      image: "/Suspecti/party_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O experiență socială interactivă cu personaje, provocări și misiuni light, într-o atmosferă elegantă și misterioasă."
        : "An interactive social experience with characters, challenges and light missions, in an elegant and mysterious atmosphere.",
      link: null as string | null,
      status: "coming_soon" as const,
    },
    {
      id: 4,
      title: locale === "ro" ? "Suspecți la Automachiaj" : "Suspecți at Self-Makeup",
      subtitle: locale === "ro" ? "Devino propriul tău make-up artist!" : "Become your own make-up artist!",
      date: "18",
      month: "Apr",
      year: "2026",
      time: "16:00",
      location: "Naive, București",
      price: "450 lei",
      priceNote: locale === "ro" ? "Include curs + cină + prosecco" : "Includes course + dinner + prosecco",
      image: "/Suspecti/machiaj_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Workshop de automachiaj cu Andreea Fugaru. 4 ore în care înveți cum să te machiezi corect, cu produsele tale."
        : "Self-makeup workshop with Andreea Fugaru. 4 hours learning how to do your makeup properly, with your own products.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-automachiaj-844938/",
      status: "available" as const,
    },
    {
      id: 5,
      title: locale === "ro" ? "Suspecți pe Velier" : "Suspecți on a Sailboat",
      subtitle: "",
      date: "4",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "TBA",
      location: locale === "ro" ? "Detalii în curând" : "Details coming soon",
      price: "Coming soon",
      priceNote: locale === "ro" ? "Bilete limitate" : "Limited tickets",
      image: "/Suspecti/velier.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O experiență unică pe apă. Detalii în curând."
        : "A unique experience on water. Details coming soon.",
      link: null as string | null,
      status: "coming_soon" as const,
    },
  ];

  const getStatusBadge = (event: typeof events[0]) => {
    if (event.status === "coming_soon") {
      return (
        <span className="px-3 py-1.5 text-xs font-bold bg-plum-700/30 text-plum-300 rounded-full border border-plum-500/30">
          Coming Soon
        </span>
      );
    }
    return (
      <span className="px-3 py-1.5 text-xs font-bold bg-plum-700/30 text-plum-300 rounded-full border border-plum-500/30 animate-pulse">
        {locale === "ro" ? "Locuri limitate" : "Limited spots"}
      </span>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t.calendar.title}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.calendar.subtitle}</p>
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
                {/* Image Area */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-900/50">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-plum-800 to-plum-900">
                      <span className="text-plum-400 text-lg font-medium">Coming Soon</span>
                    </div>
                  )}
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
                    <div className="text-xl font-bold text-white">{event.date}</div>
                    <div className="text-xs text-zinc-400 uppercase">{event.month}</div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(event)}
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
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-plum-400 transition-colors">
                    {event.title}
                  </h3>

                  {/* Subtitle */}
                  {event.subtitle && (
                    <p className="text-plum-400 text-sm mb-2 italic">{event.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                  {/* Price */}
                  <div className="mb-5">
                    <span className="text-lg font-bold text-white">{event.price}</span>
                    <span className="text-xs text-zinc-500 ml-2">{event.priceNote}</span>
                  </div>

                  {/* CTA Button */}
                  {event.status === "coming_soon" ? (
                    <button
                      disabled
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-white text-zinc-900 hover:bg-plum-500 hover:text-white hover:shadow-lg hover:shadow-plum-700/25 transition-all"
                    >
                      {t.calendar.event.buyTicket} →
                    </a>
                  ) : (
                    <Link
                      href={`/${locale}/app/experiences/dinner`}
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-white text-zinc-900 hover:bg-plum-500 hover:text-white hover:shadow-lg hover:shadow-plum-700/25 transition-all"
                    >
                      {t.calendar.event.viewDetails} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            {locale === "ro" ? "Momente din evenimentele trecute" : "Moments from past events"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                <img
                  src={`/Suspecti/gallery/event-photo-${String(i + 1).padStart(2, "0")}.jpeg`}
                  alt={`Event photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-plum-700/10 to-plum-500/10 border border-white/10 text-center">
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
              className="inline-flex px-8 py-4 text-lg font-semibold text-white bg-plum-600 rounded-full hover:bg-plum-500 transition-all hover:scale-105"
            >
              {locale === "ro" ? "Abonează-te" : "Subscribe"} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
