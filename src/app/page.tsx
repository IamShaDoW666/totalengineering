import { HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
import GallerySection from "./_components/gallery-section";
import CardSection from "./_components/card-section";
import ContactSection from "./_components/contact-section";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="h-screen scroll-smooth text-white">
        <HeroSection />
        <QuoteSection />
        <GallerySection />
        <CardSection />
        <ContactSection />
      </main>
    </HydrateClient>
  );
}
