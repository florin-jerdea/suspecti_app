import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrackedCTA from "@/components/TrackedCTA";

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
      id: 36,
      trackingName: "Cina Peaky Blinders · 11 Oct",
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: "Peaky Blinders Edition · Timișoara",
      date: "11",
      month: "Oct",
      year: "2026",
      time: "16:30 – 20:30",
      location: "Restaurant Merlot, Timișoara",
      price: locale === "ro" ? "de la 119 lei" : "from 119 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/Suspecti/cina_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Birmingham-ul anilor '20, mutat la Timișoara. Șepci, whisky și o anchetă în care fiecare invitat are o înțelegere de ascuns."
        : "1920s Birmingham, moved to Timișoara. Flat caps, whisky and an investigation where every guest has a deal to hide.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-cina-peaky-blinders-edition-timisoara-4951" as string | null,
      status: "available" as "available" | "coming_soon",
    },
    {
      id: 37,
      trackingName: "Singing Brunch · 18 Oct",
      title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
      subtitle: locale === "ro" ? "The Singing Brunch · București" : "The Singing Brunch · Bucharest",
      date: "18",
      month: "Oct",
      year: "2026",
      time: "14:00",
      location: locale === "ro" ? "Naïve, București" : "Naïve, Bucharest",
      price: locale === "ro" ? "de la 70 lei" : "from 70 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/brunch-karaoke.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Brunch cu microfonul pe masă: muzică bună, jocuri interactive și karaoke cu un twist diferit, într-o atmosferă relaxată."
        : "Brunch with the microphone on the table: good music, interactive games and karaoke with a different twist, in a relaxed atmosphere.",
      link: "https://www.ambilet.ro/bilete/the-singing-brunch-suspecti-la-brunch-5024",
      status: "available" as const,
    },
    {
      id: 38,
      trackingName: "Treasure Hunt Family TM · 24 Oct",
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Family Edition · Timișoara",
      date: "24",
      month: "Oct",
      year: "2026",
      time: "10:00",
      location: locale === "ro" ? "Parcul Copiilor – intrarea principală, Timișoara" : "Parcul Copiilor – main entrance, Timișoara",
      price: locale === "ro" ? "de la 50 lei" : "from 50 lei",
      priceNote: locale === "ro" ? "/ familie" : "/ family",
      image: "/thumbnails/treasure-hunt-family.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș pentru familii și copii de minim 8 ani. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city for families and kids aged 8+. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-family-edition-timisoara-5062",
      status: "available" as const,
    },
    {
      id: 39,
      trackingName: "Treasure Hunt Adults TM · 24 Oct",
      title: locale === "ro" ? "Suspecți în Treasure Hunt" : "Suspecți in Treasure Hunt",
      subtitle: "Adults Only · Timișoara",
      date: "24",
      month: "Oct",
      year: "2026",
      time: "15:00",
      location: "Piața Unirii – Domul Catolic, Timișoara",
      price: locale === "ro" ? "de la 56 lei" : "from 56 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/thumbnails/treasure-hunt-adults.png",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Aventură, mister și distracție în oraș, ediție pentru adulți. Rezolvă indiciile, îndeplinește misiunile și transformăm orașul într-o aventură."
        : "Adventure, mystery and fun in the city, adults edition. Solve the clues, complete the missions and we'll turn the city into an adventure.",
      link: "https://www.ambilet.ro/bilete/suspecti-in-treasure-hunt-adults-only-timisoara-5032",
      status: "available" as const,
    },
    {
      id: 40,
      trackingName: "Party Halloween TM · 31 Oct",
      title: locale === "ro" ? "Suspecți la Party" : "Suspecți at Party",
      subtitle: "Halloween Edition · Timișoara",
      date: "31",
      month: "Oct",
      year: "2026",
      time: "20:00",
      location: "DaHUB, Timișoara",
      price: locale === "ro" ? "de la 89 lei" : "from 89 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/Suspecti/party_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Petrecere de Halloween cu mister, costume și o anchetă care se dezleagă pe ringul de dans."
        : "A Halloween party with mystery, costumes and an investigation that unravels on the dance floor.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-party-halloween-edition-5061",
      status: "available" as const,
    },
    {
      id: 41,
      trackingName: "Cina Ultimul Dans · 6 Nov",
      title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
      subtitle: "Ultimul Dans · '80s Disco Party",
      date: "6",
      month: locale === "ro" ? "Noi" : "Nov",
      year: "2026",
      time: "20:00",
      location: locale === "ro" ? "București" : "Bucharest",
      price: locale === "ro" ? "de la 60 lei" : "from 60 lei",
      priceNote: locale === "ro" ? "/ persoană" : "/ person",
      image: "/Suspecti/cina_image.jpeg",
      gradient: "from-plum-700/20 to-plum-500/20",
      description: locale === "ro"
        ? "Cină cu mister în ritm '80s. Disco, lumini și un ultim dans în care fiecare invitat ascunde ceva."
        : "A mystery dinner with an '80s beat. Disco, lights and one last dance where every guest is hiding something.",
      link: "https://www.ambilet.ro/bilete/suspecti-la-cina-ultimul-dans-5044",
      status: "available" as const,
    },
    {
      id: 11,
      trackingName: "Automachiaj · TBA",
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
      trackingName: "Party · TBA",
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
      trackingName: "Prima Vedere · TBA",
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
                    <TrackedCTA
                      href={event.link}
                      trackingName={event.trackingName}
                      className="block w-full py-3.5 text-center text-sm font-semibold rounded-full bg-white text-zinc-900 hover:bg-plum-500 hover:text-white hover:shadow-lg hover:shadow-plum-700/25 transition-all"
                    >
                      {event.date === "TBA" || event.link.includes("forms.gle")
                        ? (locale === "ro" ? "Înscrie-te aici" : "Register here")
                        : t.calendar.event.buyTicket} →
                    </TrackedCTA>
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
