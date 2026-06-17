import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saeora.com"),
  title: {
    default: "Saeora | Influencer Marketing Agency Connecting Brands & Creators",
    template: "%s | Saeora",
  },
  description:
    "Saeora is an influencer marketing agency that connects brands with the right creators. We manage influencer partnerships end-to-end — strategy, outreach, and delivery. Get in touch.",
  keywords: [
    "Saeora",
    "Saeora Agency",
    "influencer marketing agency",
    "brand creator partnerships",
    "creator marketing",
    "influencer agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saeora — Influencer Marketing Agency",
    description:
      "Saeora connects brands with the right creators. Influencer marketing, made simple.",
    url: "https://saeora.com",
    siteName: "Saeora",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saeora — Influencer Marketing Agency",
    description:
      "Saeora connects brands with the right creators. Influencer marketing, made simple.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* JSON-LD structured data — tells Google this is the authoritative Saeora entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://saeora.com/#organization",
                name: "Saeora",
                alternateName: ["Saeora Agency", "Saeora Influencer Marketing"],
                description:
                  "Saeora is an influencer marketing agency that connects brands with the right creators. We make influencer marketing simple.",
                url: "https://saeora.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://saeora.com/saeora-logo-colour.png",
                  width: 1819,
                  height: 1146,
                },
                image: "https://saeora.com/opengraph-image",
                founder: {
                  "@type": "Person",
                  name: "Junayd Saeed",
                },
                sameAs: ["https://www.instagram.com/saeora.agency/"],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "junayd@saeora.space",
                  contactType: "customer service",
                  url: "https://saeora.com/contact",
                },
                areaServed: "Worldwide",
                knowsAbout: [
                  "Influencer Marketing",
                  "Creator Marketing",
                  "Brand Partnerships",
                  "Social Media Marketing",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://saeora.com/#website",
                name: "Saeora",
                url: "https://saeora.com",
                publisher: { "@id": "https://saeora.com/#organization" },
                description:
                  "Saeora is an influencer marketing agency that connects brands with the right creators.",
              },
            ]),
          }}
        />
        {/* Hidden form so Netlify's build scanner registers all field names */}
        <div aria-hidden="true" style={{ display: "none" }}>
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" />
            <input name="name" type="text" />
            <input name="email" type="email" />
            <input name="role" type="text" />
            <input name="brand" type="text" />
            <input name="platform" type="text" />
            <textarea name="message" />
          </form>
        </div>
        {children}
      </body>
    </html>
  );
}
