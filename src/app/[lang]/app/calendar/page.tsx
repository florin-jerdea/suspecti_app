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
      id: 27,
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: locale === "ro" ? "Crimă la Balul lui Gatsby · Timișoara" : "Murder at Gatsby's Ball · Timișoara",
      date: "11",
      month: "Sep",
      year: "2026",
      time: "19:30",
      location: "Restaurant Merlot, Timișoara",
      price: "119 lei",
      priceNote: locale === "ro" ? "Early Bird" : "Early Bird",
      image: "/Suspecti/cina_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O seară în stil Gatsby, cu mister, glamour și personaje care ascund secrete. Cina se transformă într-o anchetă în care fiecare invitat e suspect."
        : "A Gatsby-style evening, with mystery, glamour and characters hiding secrets. Dinner turns into an investigation where every guest is a suspect.",
      link: "https://www.ambilet.ro/bilete/crima-la-balul-lui-gatsby-timisoara-4782" as string | null,
      status: "available" as "available" | "coming_soon",
    },
    {
      id: 28,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Family Edition · Timișoara",
      date: "12",
      month: "Sep",
      year: "2026",
      time: "10:00",
      location: locale === "ro" ? "Parcul Copiilor Ion Creangă, Timișoara" : "Parcul Copiilor Ion Creangă, Timișoara",
      price: "50 lei",
      priceNote: locale === "ro" ? "/ familie" : "/ family",
      image: "/thumbnails/treasure-hunt-family.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș pentru familii și copii de minim 8 ani. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city for families and kids aged 8+. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-family-edition-timisoara-4831",
      status: "available" as const,
    },
    {
      id: 29,
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Adults Edition · Timișoara",
      date: "12",
      month: "Sep",
      year: "2026",
      time: "18:00",
      location: "Piața Unirii, Timișoara",
      price: locale === "ro" ? "de la 70 lei" : "from 70 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/treasure-hunt-adults.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș, ediție pentru adulți. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city, adults edition. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-adults-only-timisoara-4783",
      status: "available" as const,
    },
    {
      id: 30,
      title: locale === "ro" ? "Suspecți în Treasure Hunt × Hai să Socializăm" : "Suspecți in Treasure Hunt × Hai să Socializăm",
      subtitle: locale === "ro" ? "Adults Edition · București" : "Adults Edition · Bucharest",
      date: "20",
      month: "Sep",
      year: "2026",
      time: "17:00",
      location: locale === "ro" ? "Piața Revoluției, București" : "Piața Revoluției, Bucharest",
      price: "120 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/treasure-hunt-adults.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Treasure hunt pentru adulți în inima Bucureștiului, alături de Hai să Socializăm. Indicii, misiuni și oameni noi, într-o after-party de socializare."
        : "An adults treasure hunt in the heart of Bucharest, together with Hai să Socializăm. Clues, missions and new people, in a social after-party.",
      link: "https://haisasocializam.ro/evenimente-socializare/suspecti-in-treasure-hunt-hai-sa-socializam-adults-edition?ed=1",
      status: "available" as const,
    },
    {
      id: 31,
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: locale === "ro" ? "București" : "Bucharest",
      date: "27",
      month: "Sep",
      year: "2026",
      time: "16:30",
      location: locale === "ro" ? "Naive, București" : "Naive, Bucharest",
      price: "119 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/Suspecti/cina_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Descoperă cine e suspectul în timp ce savurezi o cină rafinată. Roluri ușoare, conversații reale și un mister care se dezleagă la masă."
        : "Find out who the suspect is while you enjoy a refined dinner. Easy roles, real conversations and a mystery that unravels at the table.",
      link: "https://forms.gle/cSEqoEBHxFk8JhRe9",
      status: "coming_soon" as const,
    },
    {
      id: 32,
      title: locale === "ro" ? "Hai să socializăm la cină" : "Hai să socializăm at Dinner",
      subtitle: "Around the World with Style · Red Carpet Edition",
      date: "8",
      month: "Oct",
      year: "2026",
      time: "19:00 – 23:00",
      location: locale === "ro"
        ? "Restaurant Naive – etajul 5, Bd. Ion C. Brătianu 36, București"
        : "Restaurant Naive – 5th floor, Bd. Ion C. Brătianu 36, Bucharest",
      price: "120 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/socializam-cina.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "O seară de socializare cu stil, ediția Red Carpet, cu preparate și atmosferă inspirate din toate colțurile lumii."
        : "A stylish socializing evening, Red Carpet edition, with dishes and atmosphere inspired from all corners of the world.",
      link: "https://haisasocializam.ro/evenimente-socializare/hai-sa-socializam-la-cina-around-the-world-with-style?ed=3",
      status: "available" as const,
    },
    {
      id: 33,
      title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
      subtitle: locale === "ro" ? "București" : "Bucharest",
      date: "11",
      month: "Oct",
      year: "2026",
      time: "16:30",
      location: locale === "ro" ? "Naive, București" : "Naive, Bucharest",
      price: "119 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/brunch-karaoke.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Party de zi cu muzică bună, jocuri interactive și karaoke cu un twist diferit, într-o atmosferă relaxată."
        : "A daytime party with good music, interactive games and karaoke with a different twist, in a relaxed atmosphere.",
      link: "https://forms.gle/cSEqoEBHxFk8JhRe9",
      status: "coming_soon" as const,
    },
    {
      id: 11,
      title: locale === "ro" ? "Suspecți la Automachiaj" : "Suspecți at Self-Makeup",
      subtitle: locale === "ro" ? "Workshop de automachiaj" : "Self-makeup workshop",
      date: "TBA",
      month: "",
      year: "2026",
      time: "TBA",
      location: locale === "ro" ? "Detalii în curând" : "Details coming soon",
      price: "",
      priceNote: "",
      image: "/Suspecti/machiaj_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Workshop de automachiaj într-o zi relaxată. Înveți tehnici esențiale pentru a te machia cu produsele tale."
        : "Self-makeup workshop on a relaxed day. Learn essential techniques to do your own makeup with your own products.",
      link: "https://forms.gle/cSEqoEBHxFk8JhRe9",
      status: "available" as const,
    },
    {
      id: 19,
      title: locale === "ro" ? "Suspecți la Party" : "Suspecți at Party",
      subtitle: locale === "ro" ? "Petrecere tematică cu intrigi și dans" : "Themed party with intrigue and dancing",
      date: "TBA",
      month: "",
      year: "2026",
      time: "TBA",
      location: locale === "ro" ? "Detalii în curând" : "Details coming soon",
      price: "",
      priceNote: "",
      image: "/Suspecti/party_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Intră în pielea personajului tău la o petrecere de neuitat, cu mister, muzică și oameni noi."
        : "Step into your character's shoes at an unforgettable party, with mystery, music and new people.",
      link: "https://forms.gle/cSEqoEBHxFk8JhRe9",
      status: "available" as const,
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
      price: "",
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
                  {(event.price || event.priceNote) && (
                    <div className="mb-5">
                      {event.price && (
                        <span className="text-lg font-bold text-white">{event.price}</span>
                      )}
                      {event.priceNote && (
                        <span className={`text-xs text-zinc-500 ${event.price ? "ml-2" : ""}`}>
                          {event.priceNote}
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-white text-zinc-900 hover:bg-plum-500 hover:text-white hover:shadow-lg hover:shadow-plum-700/25 transition-all"
                    >
                      {event.date === "TBA" || event.link.includes("forms.gle")
                        ? (locale === "ro" ? "Înscrie-te aici" : "Register here")
                        : t.calendar.event.buyTicket} →
                    </a>
                  ) : event.status === "coming_soon" ? (
                    <button
                      disabled
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
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
