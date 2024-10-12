import { HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
import GallerySection from "./_components/gallery-section";
import CardSection from "./_components/card-section";
import ContactSection from "./_components/contact-section";
import ImageContentSection from "./_components/image-section";
import Faq from "./_components/faq-section";
import AddressMap from "./_components/address-map";


export default async function Home() {
  return (
    <HydrateClient>
      <main className="scroll-smooth text-white">
        <HeroSection />
        <QuoteSection />
        <ImageContentSection />
        <GallerySection />
        <CardSection />
        <Faq />
        <ContactSection />
        <AddressMap />
      </main>
    </HydrateClient>
  );
}
