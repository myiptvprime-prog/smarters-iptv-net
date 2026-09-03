export const site = {
  name: "Smarters IPTV",
  domain: "smarters-iptv.net",
  displayDomain: "smarters-iptv.net",
  url: "https://smarters-iptv.net",
  email: "myiptvprime@gmail.com",
  whatsapp: "+447450624717",
  whatsappUrl:
    "https://wa.me/447450624717?text=Hallo%2C%20Smarters%20IPTV.%20Ich%20interessiere%20mich%20fuer%20ein%20IPTV%20Abo%20Deutschland.",
};

export const navLinks = [
  ["Abonnement", "/iptv-abo-deutschland/"],
  ["Sender", "/sender/"],
  ["Installation", "/installation/"],
  ["IPTV legal", "/iptv-legal/"],
  ["FAQ", "/faq/"],
  ["Kontakt", "/kontakt/"],
];

export const singleScreenPlans = [
  {
    id: "iptv-12-monate",
    name: "IPTV Abo 12 Monate",
    price: "59 EUR",
    priceValue: 59,
    includedMonths: 12,
    discount: "-20%",
    badge: "Startangebot",
    channels: "19.000+ Sender je nach Paket",
    duration: "12 Monate",
    popular: false,
    features: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "HD, FHD und 4K nach Verfuegbarkeit",
      "Filme, Serien und Replay je nach Paket",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Smart TV, Android, iOS, Fire TV, Windows",
      "Einrichtungshilfe per WhatsApp",
      "Keine automatische Verlaengerung",
    ],
  },
  {
    id: "iptv-12-monate-2-monate-gratis",
    name: "IPTV Abo 12 Monate + 2 Monate gratis",
    price: "69 EUR",
    priceValue: 69,
    includedMonths: 14,
    discount: "-30%",
    badge: "Beliebt",
    channels: "39.000+ Sender je nach Paket",
    duration: "14 Monate",
    popular: true,
    features: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "HD, FHD und 4K nach Verfuegbarkeit",
      "40.000+ Filme und Serien je nach Paket",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Smart TV, Android, iOS, Fire TV, Windows",
      "Einrichtungshilfe per WhatsApp",
      "Keine automatische Verlaengerung",
    ],
  },
  {
    id: "iptv-12-monate-3-monate-gratis",
    name: "IPTV Abo 12 Monate + 3 Monate gratis",
    price: "79 EUR",
    priceValue: 79,
    includedMonths: 15,
    discount: "-35%",
    badge: "Max Laufzeit",
    channels: "39.000+ Sender je nach Paket",
    duration: "15 Monate",
    popular: false,
    features: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "HD, FHD und 4K nach Verfuegbarkeit",
      "40.000+ Filme und Serien je nach Paket",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Smart TV, Android, iOS, Fire TV, Windows",
      "Einrichtungshilfe per WhatsApp",
      "Erwachsenen-Kanäle inklusive",
    ],
  },
];

export const multiScreenPlans = [
  {
    id: "multi-iptv-12-monate-2-geraete",
    name: "IPTV Abo 12 Monate - 2 Geraete",
    price: "79 EUR",
    priceValue: 79,
    includedMonths: 12,
    discount: "-20%",
    channels: "19.000+ Sender je nach Paket",
    duration: "12 Monate",
    popular: false,
    highlights: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Erwachsenen-Kanäle inklusive",
      "Keine automatische Verlaengerung",
    ],
  },
  {
    id: "multi-iptv-12-monate-2-monate-gratis-2-geraete",
    name: "IPTV Abo 12 Monate + 2 Monate gratis - 2 Geraete",
    price: "89 EUR",
    priceValue: 89,
    includedMonths: 14,
    discount: "-30%",
    channels: "39.000+ Sender je nach Paket",
    duration: "14 Monate",
    popular: true,
    highlights: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Keine automatische Verlaengerung",
    ],
  },
  {
    id: "multi-iptv-12-monate-3-monate-gratis-2-geraete",
    name: "IPTV Abo 12 Monate + 3 Monate gratis - 2 Geraete",
    price: "98 EUR",
    priceValue: 98,
    includedMonths: 15,
    discount: "-35%",
    channels: "39.000+ Sender je nach Paket",
    duration: "15 Monate",
    popular: false,
    highlights: [
      "Tausende Live-Kanäle (DE/AT/CH/INT)",
      "99% Server-Uptime",
      "VIP-Sportkanäle inklusive",
      "Erwachsenen-Kanäle inklusive",
      "Keine automatische Verlaengerung",
    ],
  },
];

export const devices = [
  ["Smart TV", "/iptv-smart-tv/"],
  ["Android", "/iptv-android/"],
  ["iPhone & iPad", "/iptv-ios/"],
  ["Fire TV", "/iptv-fire-tv/"],
  ["Windows", "/iptv-windows/"],
  ["IPTV Box", "/iptv-box/"],
];

export const channelGroups = [
  ["Deutsche Sender", "private, regionale und allgemeine Kategorien fuer Haushalte in Deutschland"],
  ["Sport & Live-Events", "Sportkategorien und VIP-Sportkanaele je nach Paket und Verfuegbarkeit"],
  ["Filme & Serien", "Filme, Serien und Replay-Angebote fuer Abendprogramm und Familiennutzung"],
  ["Kinder", "familienfreundliche Kategorien fuer Smart TV, Tablet und Wohnzimmer"],
  ["Dokumentationen", "Wissen, Natur, Geschichte und Reportagen in passenden Kategorien"],
  ["International", "mehrsprachige Sendergruppen fuer Nutzer, die German IPTV und internationale Inhalte kombinieren"],
  ["Nachrichten", "deutsche und internationale Nachrichtenkanaele fuer den Alltag"],
  ["Musik & Lifestyle", "Musik, Kultur und Lifestyle-Kanaele fuer unterschiedliche Interessen"],
];

export const reviews = [
  {
    name: "Thomas K.",
    location: "Berlin",
    text: "Die Beratung war schnell und klar. Nach dem Kompatibilitaetscheck lief das IPTV Abo auf meinem Samsung TV stabil.",
  },
  {
    name: "Meryem A.",
    location: "Koeln",
    text: "Ich wollte deutsche Sender, Filme und Serien in einem Paket. Der Support hat mir die passende App empfohlen.",
  },
  {
    name: "Jan P.",
    location: "Hamburg",
    text: "Fire TV Stick eingerichtet, Zugang aktiviert, fertig. Die Anleitung war verstaendlich und ohne Umwege.",
  },
  {
    name: "Laura S.",
    location: "Muenchen",
    text: "Gutes Preis-Leistungs-Verhaeltnis fuer zwei Geraete. Die Antwort per WhatsApp kam sehr schnell.",
  },
];

export const faq = [
  {
    q: "Welches IPTV Abo passt fuer Deutschland am besten?",
    a: "Fuer viele Nutzer ist das 12 Monate + 2 Monate gratis Paket der ausgewogene Einstieg, weil Laufzeit, Preis und Senderumfang gut vergleichbar sind. Vor der Aktivierung pruefen wir Ihr Geraet und die passende App.",
  },
  {
    q: "Funktioniert Smarters IPTV auf Smart TV, Android und Fire TV?",
    a: "Ja, die Pakete sind fuer Smart TV, Android, Fire TV, iOS/tvOS, Windows und kompatible IPTV Boxen vorbereitet. Die konkrete App haengt vom Geraet ab.",
  },
  {
    q: "Sind deutsche Sender und internationale Sender enthalten?",
    a: "Je nach Paket sind deutsche, internationale, Sport-, Film-, Serien-, Kinder- und Doku-Kategorien verfuegbar. Die genaue Verfuegbarkeit kann sich technisch und rechtlich aendern.",
  },
  {
    q: "Was kostet IPTV in Deutschland bei Smarters IPTV?",
    a: "Die sichtbaren Pakete starten bei 59 EUR fuer 12 Monate. Multi-Screen Pakete fuer zwei Geraete sind separat aufgefuehrt, damit Preis, Laufzeit und monatlicher Durchschnitt leichter vergleichbar bleiben.",
  },
  {
    q: "Welche IPTV Box ist geeignet?",
    a: "Das haengt von Modell, App-Unterstuetzung und gewuenschter Nutzung ab. Senden Sie uns vor der Aktivierung Ihr Geraetemodell, damit wir Smart TV, Fire TV, Android Box oder IPTV Box passend einordnen koennen.",
  },
  {
    q: "Ist IPTV in Deutschland legal?",
    a: "IPTV ist als Technologie legal. Entscheidend ist, ob Anbieter, Inhalte und Nutzungsrechte rechtmaessig sind. Nutzer sollten die Herkunft und Bedingungen eines Angebots pruefen.",
  },
  {
    q: "Kann ich vor dem Kauf Hilfe bekommen?",
    a: "Ja. Senden Sie uns Ihr Geraet und Ihre gewuenschte Nutzung per WhatsApp oder E-Mail, damit wir die passende Installation und das passende Paket empfehlen koennen.",
  },
];

export const urls = [
  "/",
  "/iptv-deutschland/",
  "/iptv-abo-deutschland/",
  "/bester-iptv-anbieter/",
  "/sender/",
  "/installation/",
  "/iptv-smart-tv/",
  "/iptv-android/",
  "/iptv-fire-tv/",
  "/iptv-ios/",
  "/iptv-windows/",
  "/iptv-box/",
  "/iptv-legal/",
  "/faq/",
  "/kontakt/",
  "/impressum/",
  "/datenschutz/",
  "/agb/",
];
