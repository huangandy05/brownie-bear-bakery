import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import OurSelection from "@/components/OurSelection";
import UnavailabilityBanner from "@/components/AwayBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <UnavailabilityBanner />
      <Hero />
      <OurSelection />
      <HowToOrder />
      <FAQs />
    </main>
  );
}
