import { HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
import TestimonialSection from "./_components/testimonial-section";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="h-screen scroll-smooth bg-red-400 text-white">
        <HeroSection />
        <QuoteSection />
        <TestimonialSection />
      </main>
    </HydrateClient>
  );
}
