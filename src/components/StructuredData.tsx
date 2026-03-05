
export default function StructuredData() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Shyam Kumar Physiotherapy Consultant",
    "image": "https://drshyamkumar.com/images/hero.png", // Update with actual domain
    "@id": "https://drshyamkumar.com/#website",
    "url": "https://drshyamkumar.com",
    "telephone": "+91 73689 35837",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Jaganpura bharat petroleum near kotak mahindra bank",
      "addressLocality": "Patna",
      "addressRegion": "BR",
      "postalCode": "800027",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.5684, // Approximate for Jaganpura
      "longitude": 85.1585
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    },
    "sameAs": [
      // Add social media links if any
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Shyam Kumar",
      "jobTitle": "Physiotherapy Consultant"
    },
    "medicalSpecialty": [
      "Physiotherapy",
      "Physical Therapy",
      "Rehabilitation",
      "NeuroRehabilitation",
      "SportsMedicine"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
