import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import OurSelection from "@/components/OurSelection";
import AboutSection from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Hero />
      <AboutSection />
      <OurSelection />
      <HowToOrder />
      <FAQs />
    </main>
  );
}
