import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    id: 1,
    title: "SEO",
    description: "Optimize your online presence",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description: "Engage your audience effectively",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Google Ads & PPC",
    description: "Drive targeted traffic",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Web Design & Development",
    description: "Create stunning digital experiences",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Content Marketing",
    description: "Tell your brand story",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Local SEO & Branding",
    description: "Build your local presence",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Performance Marketing",
    description: "Maximize your ROI",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Podcast Production",
    description: "Amplify your voice",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    title: "WhatsApp Monetization",
    description: "Leverage messaging platforms",
    image: "/placeholder.svg",
  },
  {
    id: 10,
    title: "Product Photography",
    description: "Showcase your products",
    image: "/placeholder.svg",
  },
  {
    id: 11,
    title: "Billboard & Hoardings",
    description: "Make a bold statement",
    image: "/placeholder.svg",
  },
  {
    id: 12,
    title: "Influencer Marketing",
    description: "Reach new audiences",
    image: "/placeholder.svg",
  },
  {
    id: 13,
    title: "App Development",
    description: "Build innovative solutions",
    image: "/placeholder.svg",
  },
  {
    id: 14,
    title: "Ad Management",
    description: "Optimize your ad spend",
    image: "/placeholder.svg",
  },
  {
    id: 15,
    title: "ORM",
    description: "Protect your reputation",
    image: "/placeholder.svg",
  },
  {
    id: 16,
    title: "Email Marketing",
    description: "Connect directly with customers",
    image: "/placeholder.svg",
  },
  {
    id: 17,
    title: "Video Marketing",
    description: "Engage with visual storytelling",
    image: "/placeholder.svg",
  },
  {
    id: 18,
    title: "Branding & Identity",
    description: "Define your brand essence",
    image: "/placeholder.svg",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <p className="text-sm md:text-base text-muted-foreground mb-8 animate-fade-in">
            / Services We Offer
          </p>

          {/* Main Heading and Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                Certified
                <br />
                Excellence
              </h1>
            </div>

            <div
              className="flex flex-col justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From repairs and installations to preventative maintenance, we've got you covered.
                Choose reliability, choose Razor.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold">
                  View All Services
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                <button className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold">
                  Call For Booking
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Carousel */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem
                    key={service.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div
                      className="group relative rounded-2xl overflow-hidden bg-muted aspect-[3/4] transition-all duration-500 hover:scale-105"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Service Image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/40 transition-all duration-500 group-hover:from-primary/30 group-hover:to-primary/50">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                      </div>

                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                          {service.title}
                        </h3>
                        
                        {/* Arrow Button */}
                        <div className="flex justify-end">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                              hoveredIndex === index
                                ? "bg-primary scale-110"
                                : index === 0
                                ? "bg-primary"
                                : "bg-background"
                            }`}
                          >
                            <ArrowUpRight
                              className={`w-6 h-6 transition-colors ${
                                hoveredIndex === index || index === 0
                                  ? "text-primary-foreground"
                                  : "text-foreground"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Description */}
                      <div
                        className={`absolute inset-0 bg-primary/95 flex items-center justify-center p-6 transition-opacity duration-300 ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-primary-foreground text-center text-lg font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="relative left-0 translate-y-0" />
                <CarouselNext className="relative right-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
