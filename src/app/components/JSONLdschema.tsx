// components/JSONLDSchema.tsx
import { Organization, WithContext } from "schema-dts";

const JSONLDSchema = () => {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "ZUNISSE",
    description:
      "Elevate your elegance with artisanal waist chains, meticulously crafted for the modern goddess. Each piece is a celebration of feminine beauty and timeless sophistication.",
    url: "https://zunisse.vercel.app",
    logo: "https://zunisse.com/logo.png",
    image: "https://zunisse.com/waistchain-hero.png",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Belly Chain Collection",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Modern Belly Chains",
          itemListElement: [
            {
              "@type": "Product",
              name: "Modern Gold Belly Chain",
              description: "Premium belly chain collection",
              category: "Belly Chains",
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Traditional Kamarbands",
          itemListElement: [
            {
              "@type": "Product",
              name: "Antique Finish Kamarband",
              description: "Traditional Indian waist chain with antique finish",
              category: "Kamarband Jewelry",
            },
          ],
        },
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: ["https://instagram.com/zunisse", "https://pinterest.com/zunisse"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JSONLDSchema;
