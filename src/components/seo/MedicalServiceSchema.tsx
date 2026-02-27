import { SITE_CONFIG } from "@/lib/constants";

interface MedicalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function MedicalServiceSchema({
  name,
  description,
  url,
  image,
}: MedicalServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${SITE_CONFIG.url}${url}`,
    image: image ? `${SITE_CONFIG.url}${image}` : undefined,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        addressCountry: "US",
      },
    },
    availableService: {
      "@type": "MedicalTherapy",
      name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
