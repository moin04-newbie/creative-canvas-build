import { ArrowUpRight } from "lucide-react";

const services = [
  "MEME MARKETING",
  "CONTENT MARKETING",
  "AD PRODUCTION",
  "INFLUENCER MARKETING",
];

export const Expertise = () => {
  return (
    <section id="services" className="min-h-screen bg-brand-dark text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black">Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Finding the top digital innovations for forward-thinking brands hoping to push the
            envelope and make a big impact is something we are enthusiastic about.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-0 border-2 border-white rounded-[3rem] overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border-b-2 border-white last:border-b-0 hover:bg-white/5 transition-colors duration-300"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <a
                href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between p-8 md:p-12"
              >
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent"
                  style={{
                    WebkitTextStroke: "2px white",
                    transition: "all 0.3s ease",
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style as any).WebkitTextStroke = "0px";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style as any).WebkitTextStroke = "2px white";
                    e.currentTarget.style.color = "transparent";
                  }}
                >
                  {service}
                </h3>
                <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="text-2xl md:text-3xl font-bold text-primary hover:text-secondary transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};
