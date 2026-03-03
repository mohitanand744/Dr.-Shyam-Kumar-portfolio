import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Doctors />
      <About />
      <Services />
      <FAQ />
    </div>
  );
}
