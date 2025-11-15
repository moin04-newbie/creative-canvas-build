import { Rocket, Globe, Star, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.png";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden pt-24 pb-16">
      {/* Floating decorative icons */}
      <div className="absolute top-32 left-12 animate-float opacity-30">
        <Moon className="w-8 h-8" />
      </div>
      <div className="absolute top-48 right-1/4 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Rocket className="w-12 h-12" />
      </div>
      <div className="absolute top-1/3 right-12 animate-float opacity-25" style={{ animationDelay: "2s" }}>
        <Globe className="w-10 h-10" />
      </div>
      <div className="absolute bottom-1/4 left-20 animate-float opacity-20" style={{ animationDelay: "3s" }}>
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 right-1/3 animate-float opacity-15" style={{ animationDelay: "1.5s" }}>
        <Sparkles className="w-8 h-8" />
      </div>
      
      <div className="absolute bottom-16 left-12 opacity-20" style={{ animationDelay: "2.5s" }}>
        <Star className="w-5 h-5 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)]">
        {/* Left: Headline */}
        <div className="space-y-8">
          <div className="w-32 h-32 relative animate-spin-slow">
            <img src={logo} alt="Creativefuel Logo" className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text className="text-xs fill-foreground uppercase tracking-widest">
                  <textPath href="#circlePath" className="font-semibold">
                    CREATIVEFUEL · TO WELCOME · CREATIVEFUEL · TO WELCOME ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block animate-fade-in-up">WE</span>
              <span className="block text-gradient animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                CREATE
              </span>
              <span className="block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                MEMORABLE
              </span>
              <span className="block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                MOMENTS
              </span>
              <div className="h-1 w-64 bg-foreground my-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }} />
              <span className="block animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                FOR
              </span>
              <span className="block text-gradient animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                BRANDS
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full hover-lift shadow-lg hover:shadow-xl">
              Let's Create Together
            </Button>
          </div>
        </div>

        {/* Right: Team illustration */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative z-10 hover-lift">
            <img
              src={heroTeam}
              alt="Creative team illustration"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
