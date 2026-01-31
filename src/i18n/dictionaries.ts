import { Locale } from "./config";

const dictionaries = {
  ro: {
    // Landing page
    landing: {
      underConstruction: "În Construcție",
      comingSoon: "Lucrăm la ceva extraordinar. Rămâi aproape!",
      enterApp: "Intră în Aplicație",
      copyright: "© 2025 Suspecți. Toate drepturile rezervate.",
    },
    // Navigation
    nav: {
      about: "Despre Suspecți",
      experiences: "Experiențe",
      calendar: "Calendar & Bilete",
      corporate: "Corporate",
      shop: "Shop",
      testimonials: "Testimoniale",
      newsletter: "Newsletter",
      buyTicket: "Cumpără Bilet",
      requestOffer: "Solicită Ofertă",
    },
    // Homepage
    home: {
      hero: {
        tagline: "Experiențe sociale interactive",
        title: "Jocul e doar un pretext. Socializarea e experiența.",
        subtitle: "Creăm experiențe interactive unde nu vii singur și nu pleci plictisit.",
        cta: "Vezi Evenimentele",
        ctaCorporate: "Solicită Ofertă Corporate",
      },
      whatIsNot: {
        title: "Ce NU este Suspecți",
        notEscapeRoom: "NU este escape room",
        notTheatre: "NU este teatru sau spectacol pasiv",
        notCompetition: "NU este o competiție sau un joc solicitant",
        description: "Este un cadru relaxat, ghidat, cu roluri ușoare și interacțiune naturală.",
      },
      experiences: {
        title: "Experiențele Noastre",
        viewAll: "Vezi Toate",
      },
      howItWorks: {
        title: "Cum Funcționează",
        step1: { title: "Alege experiența", description: "Selectează formatul care ți se potrivește" },
        step2: { title: "Cumpără bilet", description: "Rezervă-ți locul la eveniment" },
        step3: { title: "Vino și socializează", description: "Lasă-te ghidat și bucură-te de experiență" },
      },
      whoIsFor: {
        title: "Pentru Cine Este",
        singles: "Singles",
        couples: "Cupluri",
        groups: "Grupuri",
        corporate: "Corporate",
      },
      upcomingEvents: {
        title: "Evenimente Următoare",
        viewCalendar: "Vezi Calendarul Complet",
      },
      testimonials: {
        title: "Ce Spun Participanții",
        viewAll: "Vezi Toate Testimonialele",
      },
      corporate: {
        title: "Corporate",
        subtitle: "O alternativă la team building-ul clasic",
        description: "Sparge 'găștile' și creează interacțiune între departamente.",
        cta: "Solicită Ofertă",
      },
      newsletter: {
        title: "Rămâi Conectat",
        subtitle: "Primește acces prioritar la evenimente, noutăți și lansări.",
        placeholder: "Adresa ta de email",
        cta: "Abonează-te",
      },
    },
    // About page
    about: {
      title: "Despre Suspecți",
      whatIs: {
        title: "Ce este Suspecți",
        description: "Suspecți este un brand de experiențe sociale interactive unde nu vii singur și nu pleci plictisit. Creăm cadre relaxate, ghidate, cu roluri ușoare și interacțiune naturală.",
      },
      why: {
        title: "De ce Suspecți",
        differentiator1: "Nu trebuie să fii actor",
        differentiator2: "Nu trebuie să cunoști pe nimeni",
        differentiator3: "Nu e complicat sau solicitant",
        differentiator4: "Dress code-ul e simplu și accesibil",
      },
      howItWorks: {
        title: "Cum Funcționează",
      },
    },
    // Experiences
    experiences: {
      title: "Experiențe",
      subtitle: "Alege experiența care ți se potrivește",
      dinner: {
        name: "Suspecți la Cină",
        shortDescription: "O experiență culinară cu mister și socializare",
        description: "Descoperă cine e suspectul în timp ce savurezi o cină rafinată.",
      },
      party: {
        name: "Suspecți la Petrecere",
        shortDescription: "Petrecere tematică cu intrigi și dans",
        description: "Intră în pielea personajului tău la o petrecere de neuitat.",
      },
      singles: {
        name: "Suspecți la Prima Întâlnire",
        shortDescription: "Dating cu un twist interactiv",
        description: "Cunoaște oameni noi într-un mod distractiv și relaxat.",
      },
      treasureHunt: {
        name: "Suspecți în Treasure Hunt",
        shortDescription: "Aventură urbană cu mistere de rezolvat",
        description: "Explorează orașul și rezolvă mistere alături de echipa ta.",
      },
      sailboat: {
        name: "Suspecți pe Barcă",
        shortDescription: "Mister pe valuri",
        description: "O experiență unică pe apă, cu suspans și socializare.",
      },
      brunch: {
        name: "Suspecți la Brunch",
        shortDescription: "Mister matinal cu delicii culinare",
        description: "Începe ziua cu o experiență relaxată și savuroasă.",
      },
      whatYouGet: "Ce primești",
      howItWorks: "Cum se desfășoară",
      dressCode: "Dress Code",
      gallery: "Galerie",
      faq: "Întrebări Frecvente",
      upcomingEvents: "Evenimente Următoare",
      buyTicket: "Cumpără Bilet",
    },
    // Calendar
    calendar: {
      title: "Calendar & Bilete",
      subtitle: "Alege evenimentul tău",
      filters: {
        all: "Toate",
        format: "Format",
        month: "Lună",
      },
      event: {
        date: "Data",
        time: "Ora",
        location: "Locație",
        buyTicket: "Cumpără Bilet",
      },
      noEvents: "Nu sunt evenimente programate momentan.",
    },
    // Corporate
    corporate: {
      title: "Corporate",
      subtitle: "O alternativă la team building-ul clasic",
      whatWeSolve: {
        title: "Ce Rezolvăm",
        problem1: "Spargem 'găștile' din companie",
        problem2: "Creăm interacțiune între departamente",
        problem3: "Oferim o experiență memorabilă",
      },
      howItWorks: {
        title: "Cum Funcționează",
      },
      formats: {
        title: "Formate Disponibile",
      },
      whatIsIncluded: {
        title: "Ce Este Inclus",
      },
      caseStudies: {
        title: "Studii de Caz",
      },
      cta: {
        title: "Solicită Ofertă",
        subtitle: "Completează formularul și te contactăm în 24 de ore.",
        formName: "Nume",
        formEmail: "Email",
        formCompany: "Companie",
        formParticipants: "Număr participanți",
        formMessage: "Mesaj",
        formSubmit: "Trimite",
      },
    },
    // Shop
    shop: {
      title: "Shop",
      subtitle: "Colecții tematice și jocuri pentru acasă",
      categories: {
        collections: "Colecții Tematice",
        games: "Jocuri Acasă",
        bundles: "Pachete Cadou",
      },
      product: {
        addToCart: "Adaugă în Coș",
        viewDetails: "Vezi Detalii",
      },
      collections: {
        title: "Colecții Tematice",
        subtitle: "Ținute pentru fiecare experiență",
      },
      games: {
        title: "Jocuri pentru Acasă",
        subtitle: "PDF + ghid video pentru petreceri de până la 20 de persoane",
      },
      bundles: {
        title: "Pachete Cadou",
        subtitle: "Cadoul perfect pentru prieteni și familie",
      },
    },
    // Testimonials
    testimonials: {
      title: "Testimoniale",
      subtitle: "Ce spun participanții noștri",
      filters: {
        all: "Toate",
      },
    },
    // Newsletter
    newsletter: {
      title: "Newsletter",
      subtitle: "Fii primul care află despre evenimente și lansări",
      benefits: {
        title: "Ce primești",
        benefit1: "Acces prioritar la bilete",
        benefit2: "Noutăți și lansări exclusive",
        benefit3: "Locuri limitate anunțate în avans",
      },
      form: {
        placeholder: "Adresa ta de email",
        submit: "Abonează-te",
      },
    },
    // Common
    common: {
      learnMore: "Află Mai Multe",
      viewAll: "Vezi Toate",
      backToHome: "Înapoi la Pagina Principală",
    },
  },
  en: {
    // Landing page
    landing: {
      underConstruction: "Under Construction",
      comingSoon: "We're working on something extraordinary. Stay tuned!",
      enterApp: "Enter the App",
      copyright: "© 2025 Suspecți. All rights reserved.",
    },
    // Navigation
    nav: {
      about: "About Suspecți",
      experiences: "Experiences",
      calendar: "Calendar & Tickets",
      corporate: "Corporate",
      shop: "Shop",
      testimonials: "Testimonials",
      newsletter: "Newsletter",
      buyTicket: "Buy Ticket",
      requestOffer: "Request Offer",
    },
    // Homepage
    home: {
      hero: {
        tagline: "Interactive social experiences",
        title: "The game is just a pretext. Socializing is the experience.",
        subtitle: "We create interactive experiences where you don't come alone and you don't leave bored.",
        cta: "See Events",
        ctaCorporate: "Request Corporate Offer",
      },
      whatIsNot: {
        title: "What Suspecți is NOT",
        notEscapeRoom: "It's NOT an escape room",
        notTheatre: "It's NOT theatre or a passive show",
        notCompetition: "It's NOT a competition or a demanding game",
        description: "It's a relaxed, guided setting with light roles and natural interaction.",
      },
      experiences: {
        title: "Our Experiences",
        viewAll: "View All",
      },
      howItWorks: {
        title: "How It Works",
        step1: { title: "Choose your experience", description: "Select the format that suits you" },
        step2: { title: "Buy a ticket", description: "Reserve your spot at the event" },
        step3: { title: "Come and socialize", description: "Let yourself be guided and enjoy the experience" },
      },
      whoIsFor: {
        title: "Who It's For",
        singles: "Singles",
        couples: "Couples",
        groups: "Groups",
        corporate: "Corporate",
      },
      upcomingEvents: {
        title: "Upcoming Events",
        viewCalendar: "View Full Calendar",
      },
      testimonials: {
        title: "What Participants Say",
        viewAll: "View All Testimonials",
      },
      corporate: {
        title: "Corporate",
        subtitle: "An alternative to classic team building",
        description: "Break down cliques and create interaction between departments.",
        cta: "Request Offer",
      },
      newsletter: {
        title: "Stay Connected",
        subtitle: "Get priority access to events, news, and launches.",
        placeholder: "Your email address",
        cta: "Subscribe",
      },
    },
    // About page
    about: {
      title: "About Suspecți",
      whatIs: {
        title: "What is Suspecți",
        description: "Suspecți is an interactive social experience brand where you don't come alone and you don't leave bored. We create relaxed, guided settings with light roles and natural interaction.",
      },
      why: {
        title: "Why Suspecți",
        differentiator1: "You don't have to be an actor",
        differentiator2: "You don't have to know anyone",
        differentiator3: "It's not complicated or demanding",
        differentiator4: "The dress code is simple and accessible",
      },
      howItWorks: {
        title: "How It Works",
      },
    },
    // Experiences
    experiences: {
      title: "Experiences",
      subtitle: "Choose the experience that suits you",
      dinner: {
        name: "Suspecți at Dinner",
        shortDescription: "A culinary experience with mystery and socializing",
        description: "Discover who the suspect is while enjoying a refined dinner.",
      },
      party: {
        name: "Suspecți at a Party",
        shortDescription: "Themed party with intrigue and dancing",
        description: "Step into your character at an unforgettable party.",
      },
      singles: {
        name: "Suspecți at First Sight",
        shortDescription: "Dating with an interactive twist",
        description: "Meet new people in a fun and relaxed way.",
      },
      treasureHunt: {
        name: "Suspecți Treasure Hunt",
        shortDescription: "Urban adventure with mysteries to solve",
        description: "Explore the city and solve mysteries with your team.",
      },
      sailboat: {
        name: "Suspecți on a Sailboat",
        shortDescription: "Mystery on the waves",
        description: "A unique experience on water, with suspense and socializing.",
      },
      brunch: {
        name: "Suspecți at Brunch",
        shortDescription: "Morning mystery with culinary delights",
        description: "Start your day with a relaxed and delicious experience.",
      },
      whatYouGet: "What you get",
      howItWorks: "How it unfolds",
      dressCode: "Dress Code",
      gallery: "Gallery",
      faq: "FAQ",
      upcomingEvents: "Upcoming Events",
      buyTicket: "Buy Ticket",
    },
    // Calendar
    calendar: {
      title: "Calendar & Tickets",
      subtitle: "Choose your event",
      filters: {
        all: "All",
        format: "Format",
        month: "Month",
      },
      event: {
        date: "Date",
        time: "Time",
        location: "Location",
        buyTicket: "Buy Ticket",
      },
      noEvents: "No events scheduled at the moment.",
    },
    // Corporate
    corporate: {
      title: "Corporate",
      subtitle: "An alternative to classic team building",
      whatWeSolve: {
        title: "What We Solve",
        problem1: "Break down company cliques",
        problem2: "Create interaction between departments",
        problem3: "Offer a memorable experience",
      },
      howItWorks: {
        title: "How It Works",
      },
      formats: {
        title: "Available Formats",
      },
      whatIsIncluded: {
        title: "What's Included",
      },
      caseStudies: {
        title: "Case Studies",
      },
      cta: {
        title: "Request Offer",
        subtitle: "Fill out the form and we'll contact you within 24 hours.",
        formName: "Name",
        formEmail: "Email",
        formCompany: "Company",
        formParticipants: "Number of participants",
        formMessage: "Message",
        formSubmit: "Submit",
      },
    },
    // Shop
    shop: {
      title: "Shop",
      subtitle: "Thematic collections and at-home games",
      categories: {
        collections: "Thematic Collections",
        games: "At-Home Games",
        bundles: "Gift Bundles",
      },
      product: {
        addToCart: "Add to Cart",
        viewDetails: "View Details",
      },
      collections: {
        title: "Thematic Collections",
        subtitle: "Outfits for every experience",
      },
      games: {
        title: "At-Home Games",
        subtitle: "PDF + video guide for parties up to 20 people",
      },
      bundles: {
        title: "Gift Bundles",
        subtitle: "The perfect gift for friends and family",
      },
    },
    // Testimonials
    testimonials: {
      title: "Testimonials",
      subtitle: "What our participants say",
      filters: {
        all: "All",
      },
    },
    // Newsletter
    newsletter: {
      title: "Newsletter",
      subtitle: "Be the first to know about events and launches",
      benefits: {
        title: "What you get",
        benefit1: "Priority access to tickets",
        benefit2: "Exclusive news and launches",
        benefit3: "Limited seats announced in advance",
      },
      form: {
        placeholder: "Your email address",
        submit: "Subscribe",
      },
    },
    // Common
    common: {
      learnMore: "Learn More",
      viewAll: "View All",
      backToHome: "Back to Home",
    },
  },
};

export type Dictionary = typeof dictionaries.ro;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
