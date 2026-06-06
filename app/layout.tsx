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
  title: "Saeora — Influencer Marketing Agency",
  description: "Saeora is an influencer marketing agency that connects brands with the right creators. We make influencer marketing simple.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saeora — Influencer Marketing Agency",
    description: "We connect brands with the right creators. Influencer marketing, made simple.",
    url: "https://saeora.com",
    siteName: "Saeora",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saeora — Influencer Marketing Agency",
    description: "We connect brands with the right creators. Influencer marketing, made simple.",
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
