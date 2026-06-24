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
      id: 23,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Family Edition · Timișoara",
      date: "27",
      month: locale === "ro" ? "Iun" : "Jun",
      year: "2026",
      time: "09:00 – 11:00",
      location: "Parcul Copiilor, Timișoara",
      price: "50 lei",
      priceNote: locale === "ro" ? "/ familie" : "/ family",
      image: "/thumbnails/treasure-hunt-family.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș pentru familii și copii de minim 8 ani. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city for families and kids aged 8+. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-family-edition2-timisoara-4607" as string | null,
      status: "available" as "available" | "coming_soon",
    },
    {
      id: 24,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Adults Only · Timișoara",
      date: "28",
      month: locale === "ro" ? "Iun" : "Jun",
      year: "2026",
      time: "18:00 – 20:30",
      location: locale === "ro" ? "Piața Unirii – Domul Catolic, Timișoara" : "Piața Unirii – Domul Catolic, Timișoara",
      price: "60 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/treasure-hunt-adults.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș, ediție pentru adulți. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city, adults edition. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-aduls-only-timisoara-4608",
      status: "available" as const,
    },
    {
      id: 19,
      title: locale === "ro" ? "Suspecți la Party" : "Suspecți at Party",
      subtitle: locale === "ro" ? "Summer Escape Edition · Primul weekend Suspecți la mare cu Hai să socializăm 🌊☀️" : "Summer Escape Edition · First Suspecți weekend at the seaside with Hai să socializăm 🌊☀️",
      date: "4",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "18:00",
      location: "Venus",
      price: "99 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/party-summer-escape.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Primul weekend Suspecți la mare, alături de Hai să socializăm. Soare, plajă și o experiență socială de neuitat pe litoral."
        : "The first Suspecți weekend at the seaside, together with Hai să socializăm. Sun, beach and an unforgettable social experience by the sea.",
      link: "https://haisasocializam.ro/excursii-turistice/weekend-la-plaja-si-relaxare-pe-litoralul-marii-negre",
      status: "available" as const,
    },
    {
      id: 20,
      title: locale === "ro" ? "Hai să socializăm la cină" : "Hai să socializăm at Dinner",
      subtitle: "Around the World with Style",
      date: "9",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "19:00 – 23:00",
      location: locale === "ro" ? "Naïve – etajul 5, București" : "Naïve – 5th floor, Bucharest",
      price: "120 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/socializam-cina.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O seară de socializare cu stil, cu preparate și atmosferă inspirate din toate colțurile lumii."
        : "A stylish socializing evening, with dishes and atmosphere inspired from all corners of the world.",
      link: "https://haisasocializam.ro/evenimente-socializare/hai-sa-socializam-la-cina-around-the-world-with-style?ed=2",
      status: "available" as const,
    },
    {
      id: 25,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Family Edition",
      date: "11",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "09:00 – 11:30",
      location: locale === "ro" ? "Orășelul Copiilor, București" : "Orășelul Copiilor, Bucharest",
      price: locale === "ro" ? "de la 80 lei" : "from 80 lei",
      priceNote: locale === "ro" ? "/ familie" : "/ family",
      image: "/thumbnails/treasure-hunt-family.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș pentru familii și copii de minim 8 ani. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city for families and kids aged 8+. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-family-edition-3-bucuresti-4583",
      status: "available" as const,
    },
    {
      id: 26,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Adults Only",
      date: "11",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "17:00 – 20:30",
      location: locale === "ro" ? "Piața Revoluției – Monumentul lui Iuliu Maniu, București" : "Piața Revoluției – Iuliu Maniu Monument, Bucharest",
      price: "60 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/treasure-hunt-adults.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș, ediție pentru adulți. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city, adults edition. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-aduls-only-bucuresti-4584",
      status: "available" as const,
    },
    {
      id: 11,
      title: locale === "ro" ? "Suspecți la Automachiaj" : "Suspecți at Self-Makeup",
      subtitle: locale === "ro" ? "Workshop de automachiaj" : "Self-makeup workshop",
      date: "26",
      month: locale === "ro" ? "Iul" : "Jul",
      year: "2026",
      time: "14:00",
      location: locale === "ro" ? "GIOYA Pizza & Panini, București (Lisabona 11, Sector 1)" : "GIOYA Pizza & Panini, Bucharest (Lisabona 11, Sector 1)",
      price: "349 lei",
      priceNote: locale === "ro" ? "Early Bird (include cursul + goodiebag)" : "Early Bird (includes the workshop + goodiebag)",
      image: "/Suspecti/machiaj_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Workshop de automachiaj într-o duminică relaxată. Înveți tehnici esențiale pentru a te machia cu produsele tale."
        : "Self-makeup workshop on a relaxed Sunday. Learn essential techniques to do your own makeup with your own products.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-automachiaj-4484",
      status: "available" as const,
    },
    {
      id: 10,
      title: locale === "ro" ? "Suspecți pe Velier" : "Suspecți on a Sailboat",
      subtitle: "",
      date: "TBA",
      month: "",
      year: "2026",
      time: "TBA",
      location: locale === "ro" ? "Detalii în curând" : "Details coming soon",
      price: "Coming soon",
      priceNote: locale === "ro" ? "Bilete limitate" : "Limited tickets",
      image: "/thumbnails/Suspecti pe velier - 4 iulie.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O experiență unică pe apă. Detalii în curând."
        : "A unique experience on water. Details coming soon.",
      link: "https://forms.gle/aGN2sPtRYSvHfPNZ9" as string | null,
      status: "available" as "available" | "coming_soon",
    },
    {
      id: 2,
      title: locale === "ro" ? "Suspecți la Prima Vedere" : "Suspecți at First Sight",
      subtitle: locale === "ro" ? "Dincolo de aparențe" : "Beyond appearances",
      date: "TBA",
      month: "",
      year: "2026",
      time: "TBA",
      location: locale === "ro" ? "To Be Announced" : "To Be Announced",
      price: "200 lei",
      priceNote: locale === "ro" ? "Exclusiv singles, 27–45 ani" : "Singles only, ages 27–45",
      image: "/thumbnails/Suspecti la prima vedere 18 aprilie & 17 mai .jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O experiență de socializare pentru singles, construită în jurul compatibilității și chimiei, alături de Smaranda Cernescu, psiholog și expert în profiling. Dress code: Elegant. Black & Red."
        : "A socializing experience for singles, built around compatibility and chemistry, with Smaranda Cernescu, psychologist and profiling expert. Dress code: Elegant. Black & Red.",
      link: "https://forms.gle/1jUSyvstM2KH2uFNA",
      status: "available" as const,
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
                      {event.date === "TBA" || event.link?.includes("forms.gle")
                        ? (locale === "ro" ? "Înscrie-te aici" : "Register here")
                        : t.calendar.event.buyTicket} →
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
