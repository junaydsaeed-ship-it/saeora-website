import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Saeora. Whether you're a brand looking to grow through the right creators, or a creator looking for brand partnerships — we want to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Saeora | Influencer Marketing Agency",
    description:
      "Get in touch with Saeora. Whether you're a brand looking to grow through the right creators, or a creator looking for brand partnerships — we want to hear from you.",
    url: "https://saeora.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
