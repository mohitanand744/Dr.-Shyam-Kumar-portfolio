
export default function StructuredData() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Shyam Kumar",
    "jobTitle": "Physiotherapist",
    "url": "https://drshyamkumar.com",
    "image": "https://drshyamkumar.com/images/hero.png", // Update with actual domain
    "telephone": "+91 73689 35837",
    "email": "15shyamsah@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sitamarhi",
      "addressRegion": "Bihar",
      "postalCode": "843302",
      "addressCountry": "IN"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Health Dept. Gov. of Bihar"
      }
    ],
    "knowsAbout": [
      "Physiotherapy",
      "Rehabilitation",
      "Neuro-Rehabilitation",
      "Orthopedic Rehab",
      "Sports Injury Physiotherapy"
    ],
    "seeks": [
      {
        "@type": "Demand",
        "title": "Physiotherapist Full-Time Role",
        "description": "Seeking a clinical physiotherapy role in a reputed hospital or clinic."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
