import { site } from "@/config/site";
import { visibleSocials } from "@/lib/links";

const sameAs = () => visibleSocials().filter((s) => !s.todo).map((s) => s.href);

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    description: site.description,
    // Email deliberately omitted (kept out of the HTML to deter scrapers).
    contactPoint: { "@type": "ContactPoint", contactType: "sales", url: `${site.url}/contact/` },
    sameAs: sameAs(),
  };
}

export function professionalServiceLd() {
  const p = site.pricing.packages;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: site.name,
    url: site.url,
    image: `${site.url}/og/default.png`,
    description: site.description,
    telephone: `+${site.contact.whatsappNumber}`,
    address: { "@type": "PostalAddress", addressCountry: site.location.countryCode },
    areaServed: "Worldwide",
    parentOrganization: { "@id": `${site.url}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI and automation packages",
      itemListElement: [
        ["RAG Chatbot Setup", p["rag-chatbot"].from],
        ["Workflow Automation (n8n / Python)", p["workflow-automation"].from],
        ["Data & AI Insights", p["data-insights"].from],
        ["Custom Software", p["custom-software"].from],
      ].map(([name, price]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: price,
          priceCurrency: site.pricing.currency,
        },
      })),
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}
