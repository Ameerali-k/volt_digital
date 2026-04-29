import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyVolt from "@/components/WhyVolt";
import Methodology from "@/components/Methodology";
import WhoWeServe from "@/components/WhoWeServe";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <Services />
      <Stats />
      <WhyVolt />
      <Methodology />
      <WhoWeServe />
    </main>
  );
}
