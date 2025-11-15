import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { FunFacts } from "@/components/FunFacts";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <ScrollProgress />
      
      <main>
        <Hero />
        <FunFacts />
        <CaseStudies />
        <Expertise />
        <Clients />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
