import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Careers = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "WHO",
      subtitle: "We Are?",
      label: "Who We Are",
      content: {
        headline: "Where Creativity Knows No Bounds: Join Creativefuel",
        description: [
          "Creativefuel, A dynamic marketing agency at the forefront of India's rapid growth. Our passion lies in empowering brands with remarkable success stories, wrapped in wit, trendiness, and forward-thinking strategies.",
          "Humour is our secret ingredient, infusing every project with a delightful twist. We take pride in seeking a diverse clientele, knowing that each collaboration brings fresh perspectives and unique challenges."
        ]
      }
    },
    {
      title: "WHAT",
      subtitle: "We Are Looking For?",
      label: "What we are looking for",
      content: {
        headline: "Passionate Creators Who Think Different",
        description: [
          "We're looking for innovative minds who aren't afraid to challenge the status quo. People who bring fresh perspectives and creative solutions to every project.",
          "If you're passionate about marketing, love to experiment with new ideas, and thrive in a fast-paced creative environment, we want to hear from you."
        ]
      }
    },
    {
      title: "WHY",
      subtitle: "Join Creativefuel?",
      label: "Why Join Creativefuel?",
      content: {
        headline: "Be Part of Something Extraordinary",
        description: [
          "At Creativefuel, we believe in nurturing talent and fostering innovation. You'll work on exciting projects for leading brands, collaborate with creative minds, and grow your career in a supportive environment.",
          "We offer competitive compensation, flexible work arrangements, continuous learning opportunities, and a culture that celebrates creativity and success."
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {activeSection === null ? (
        // Initial cards view
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <h2 className="text-7xl font-bold text-brand-orange mb-4">
                    {section.title}
                  </h2>
                  <p className="text-2xl font-semibold text-foreground mb-12">
                    {section.subtitle}
                  </p>
                  <div className="flex items-center justify-start">
                    <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-8 h-8 text-background" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-foreground font-semibold text-lg px-8 py-6 rounded-full"
              >
                Apply Now
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      ) : (
        // Detailed section view
        <section className="min-h-screen bg-brand-sage pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-4 mb-12 text-white/90 flex-wrap">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setActiveSection(index)}
                    className={`transition-opacity hover:opacity-100 ${
                      activeSection === index ? 'opacity-100 font-semibold' : 'opacity-70'
                    }`}
                  >
                    {section.label}
                  </button>
                  {index < sections.length - 1 && (
                    <span className="mx-3 w-2 h-2 rounded-full bg-brand-orange"></span>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
                {sections[activeSection].label.toUpperCase()}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                {sections[activeSection].content.headline}
              </h1>
              <div className="space-y-6 text-white/90 text-lg max-w-4xl">
                {sections[activeSection].content.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Video placeholder */}
            <div className="mt-12 bg-gray-800 rounded-2xl aspect-video flex items-center justify-center">
              <p className="text-white/50">Featured Video Content</p>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={() => setActiveSection(null)}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Back to Overview
              </Button>
              <Button
                className="bg-brand-orange hover:bg-brand-orange/90 text-foreground"
              >
                Apply Now
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
