import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import OurSelection from "@/components/OurSelection";
import AboutSection from "@/components/AboutUs";
import UnavailabilityBanner from "@/components/AwayBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <UnavailabilityBanner />
      <Hero />
      <AboutSection />
      <OurSelection />
      <HowToOrder />
      <FAQs />
    </main>
  );
}
