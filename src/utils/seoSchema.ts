interface Organization {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  description: string;
}

interface WebSite {
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: Organization;
  potentialAction: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
  specialty: string;
  keywords: string[];
}

interface Article {
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: Organization;
  publisher: Organization;
}

interface FAQPage {
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

interface VPNService {
  "@type": "Service";
  name: string;
  description: string;
  provider: Organization;
  areaServed: string[];
  countries: string[];
  category: string;
  serviceType: string;
}

interface VPNSoftwareApplication {
  "@type": "SoftwareApplication";
  name: string;
  applicationCategory: string;
  operatingSystem: string[];
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
    priceValidUntil: string;
  };
}

export const generateOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  name: "Best VPN UK",
  url: "https://bestvpnuk.uk",
  logo: "https://bestvpnuk.uk/images/logo.png",
  sameAs: [
    "https://twitter.com/bestvpnuk",
    "https://facebook.com/bestvpnuk",
    "https://linkedin.com/company/bestvpnuk"
  ],
  description: "Leading VPN comparison and review platform in the UK"
});

export const generateWebsiteSchema = (): WebSite => ({
  "@type": "WebSite",
  name: "Best VPN UK",
  url: "https://bestvpnuk.uk",
  description: "Compare and find the best VPN services for users in the United Kingdom",
  publisher: generateOrganizationSchema(),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bestvpn-uk.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  specialty: "VPN Reviews and Comparisons",
  keywords: [
    "vpn",
    "virtual private network",
    "online privacy",
    "secure browsing",
    "streaming vpn",
    "uk vpn service"
  ]
});

export const generateArticleSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string
): Article => ({
  "@type": "Article",
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author: generateOrganizationSchema(),
  publisher: generateOrganizationSchema()
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]): FAQPage => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const generateVPNProductSchema = (vpn: {
  name: string;
  description: string;
  image: string;
  price: string;
  rating: string;
}) => ({
  "@type": "Product",
  name: vpn.name,
  description: vpn.description,
  image: vpn.image,
  offers: {
    "@type": "Offer",
    price: vpn.price.replace('£', ''),
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: vpn.rating,
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1247"
  }
});

export const generateCityGuideSchema = (city: {
  name: string;
  region: string;
  population: number;
}) => ({
  "@type": "Guide",
  about: {
    "@type": "City",
    name: city.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city.region
    },
    population: city.population
  },
  headline: `Best VPN for ${city.name}`,
  description: `Complete guide to choosing the best VPN service in ${city.name}, ${city.region}. Compare speeds, features, and prices.`
});

export const generateVPNServiceSchema = (vpn: Omit<VPNService, "@type" | "provider" | "category" | "serviceType">) => ({
  "@type": "Service",
  name: vpn.name,
  description: vpn.description,
  provider: generateOrganizationSchema(),
  areaServed: vpn.countries,
  category: "VPN Service",
  serviceType: "Virtual Private Network",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "15000",
    reviewCount: "12500"
  },
  offers: {
    "@type": "Offer",
    priceRange: "££-£££",
    availability: "https://schema.org/InStock"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VPN Subscription Plans",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monthly Plan"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Plan"
        }
      }
    ]
  }
});

export const generateVPNComparisonSchema = () => ({
  "@type": "WebPage",
  mainContentOfPage: {
    "@type": "WebPageElement",
    isPartOf: {
      "@type": "Guide",
      name: "VPN Comparison Guide",
      description: "Comprehensive comparison of top VPN services in the UK",
      audience: {
        "@type": "Audience",
        audienceType: "UK Internet Users",
        geographicArea: {
          "@type": "Country",
          name: "United Kingdom"
        }
      }
    }
  },
  specialty: "VPN Reviews and Comparisons",
  keywords: [
    "best vpn uk",
    "vpn comparison",
    "secure vpn services",
    "streaming vpn",
    "privacy protection"
  ]
});

export const generateVPNBusinessSchema = () => ({
  "@type": "Organization",
  name: "Best VPN UK",
  description: "Leading VPN comparison and review platform in the UK",
  url: "https://bestvpnuk.uk",
  logo: "https://bestvpnuk.uk/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-XXX-XXXX-XXX",
    contactType: "customer service",
    availableLanguage: ["English"],
    areaServed: "GB"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "09:00",
    closes: "18:00"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "15000",
    reviewCount: "12500"
  },
  audience: {
    "@type": "Audience",
    audienceType: "Internet Users seeking online privacy and security"
  },
  priceRange: "££",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  }
});

export const generateVPNAppSchema = (app: Omit<VPNSoftwareApplication, "@type">) => ({
  "@type": "SoftwareApplication",
  ...app
}); 