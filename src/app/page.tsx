import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Doctors />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <FAQ />
    </div>
  );
}
