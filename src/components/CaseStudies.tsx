import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Myntra",
    subtitle: "E-commerce Revolution",
    color: "from-pink-500 to-orange-500",
    description: "Shopping made fun",
  },
  {
    title: "My11Circle",
    subtitle: "Fantasy Sports Platform",
    color: "from-red-500 to-red-700",
    description: "Game-changing experience",
  },
  {
    title: "Balaji Wafers",
    subtitle: "Snack Brand Campaign",
    color: "from-yellow-400 to-yellow-600",
    description: "Crunchy creativity",
  },
  {
    title: "Alt Balaji",
    subtitle: "OTT Platform",
    color: "from-purple-500 to-pink-500",
    description: "Entertainment redefined",
  },
];

export const CaseStudies = () => {
  return (
    <section id="projects" className="min-h-screen bg-brand-dark text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">Case Studies</h2>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Ek Kahaani Hai Jo Sabko Sunani Hai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-muted/10 hover-lift cursor-pointer h-[500px]"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-80`} />
              
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-2">{study.title}</h3>
                  <p className="text-sm opacity-90">{study.subtitle}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold mb-4">{study.description}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group-hover:translate-x-2"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-2xl font-bold">View Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
