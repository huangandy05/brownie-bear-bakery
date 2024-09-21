import EmblaCarousel from "@/components/EmblaCarousel";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import OurSelection from "@/components/OurSelection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Hero />
      <OurSelection />
      <HowToOrder />
      <FAQs />
      <EmblaCarousel />
    </main>
  );
}
