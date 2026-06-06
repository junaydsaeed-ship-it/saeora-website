import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ForBrands } from "@/components/ForBrands";
import { ForCreators } from "@/components/ForCreators";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ForBrands />
        <ForCreators />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
