import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Instagram, 
  Globe, 
  Monitor, 
  FileText, 
  MapPin,
  BarChart3,
  Mic,
  MessageCircle,
  Camera,
  Megaphone,
  Users,
  Smartphone,
  Settings,
  Shield,
  Mail,
  Video,
  Palette
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "SEO (Search Engine Optimization)",
      description: "Rank higher. Get found. Drive qualified traffic.",
      icon: Search,
    },
    {
      id: 2,
      title: "Performance Marketing",
      description: "Real-time optimization and detailed reporting.",
      icon: BarChart3,
    },
    {
      id: 3,
      title: "App Development",
      description: "Custom mobile apps from idea to launch.",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Engage, build loyalty, and convert across social platforms.",
      icon: Instagram,
    },
    {
      id: 5,
      title: "Podcast Production",
      description: "Launch and grow your podcast audience.",
      icon: Mic,
    },
    {
      id: 6,
      title: "Ad Management",
      description: "Meta, Google, YouTube - fully managed.",
      icon: Settings,
    },
    {
      id: 7,
      title: "Google Ads & PPC",
      description: "Targeted campaigns with measurable ROI.",
      icon: Globe,
    },
    {
      id: 8,
      title: "WhatsApp Monetization",
      description: "Turn chats into conversions with automation.",
      icon: MessageCircle,
    },
    {
      id: 9,
      title: "ORM",
      description: "Build and protect your online reputation.",
      icon: Shield,
    },
    {
      id: 10,
      title: "Web Design & Development",
      description: "Modern, mobile-friendly, converting websites.",
      icon: Monitor,
    },
    {
      id: 11,
      title: "Product Photography",
      description: "High-quality visuals for all platforms.",
      icon: Camera,
    },
    {
      id: 12,
      title: "Email Marketing",
      description: "High-converting email campaigns and automation.",
      icon: Mail,
    },
    {
      id: 13,
      title: "Content Marketing",
      description: "Blog posts, videos, infographics that build authority.",
      icon: FileText,
    },
    {
      id: 14,
      title: "Billboard & Hoardings",
      description: "Offline advertising across cities.",
      icon: Megaphone,
    },
    {
      id: 15,
      title: "Video Marketing",
      description: "Social reels and brand films that convert.",
      icon: Video,
    },
    {
      id: 16,
      title: "Local SEO & Branding",
      description: "Get discovered in your area and drive footfall.",
      icon: MapPin,
    },
    {
      id: 17,
      title: "Influencer Marketing",
      description: "Leverage authentic voices for your brand.",
      icon: Users,
    },
    {
      id: 18,
      title: "Branding & Identity",
      description: "Logos and visuals that make a mark.",
      icon: Palette,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Header />
      <ScrollProgress />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-primary mb-4 font-semibold tracking-wider">/ Services We Offer</p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Certified<br />
              <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From repairs and installations to preventative maintenance, we've got you covered.<br />
              Choose reliability, choose Razor.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-bold">
                View All Services
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-bold">
                Call For Booking
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-brand-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="group relative overflow-hidden bg-background/5 backdrop-blur-sm border-border/20 rounded-3xl p-8 hover:bg-background/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                    style={{
                      animation: `fade-in 0.6s ease-out ${index * 0.05}s both`
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className={`
                        w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center
                        transition-all duration-500
                        ${hoveredService === service.id ? 'scale-110 bg-primary/20' : ''}
                      `}>
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`
                      absolute inset-0 rounded-3xl border-2 border-primary/0 
                      transition-all duration-500 pointer-events-none
                      ${hoveredService === service.id ? 'border-primary/50' : ''}
                    `} />

                    {/* Background Glow */}
                    <div className={`
                      absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0
                      transition-all duration-500 -z-10 blur-xl
                      ${hoveredService === service.id ? 'from-primary/20 via-primary/10 to-transparent' : ''}
                    `} />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="text-primary">Transform</span><br />
              Your Digital Presence?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's build something amazing together. Get in touch with our team today.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
