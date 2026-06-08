import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Saeora",
  description:
    "Get in touch with Saeora, an influencer marketing agency connecting brands with the right creators. Brands and creators — start the conversation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
