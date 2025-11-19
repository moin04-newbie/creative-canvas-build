import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      icon: "🎨",
      description: "Complete brand identity for modern startups"
    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "UI/UX",
      color: "from-gray-800 to-gray-900",
      bgColor: "bg-gray-800",
      icon: "🚀",
      description: "Intuitive mobile experiences"
    },
    {
      id: 3,
      title: "Web Development",
      category: "Development",
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-600",
      icon: "💻",
      description: "Responsive web applications"
    },
    {
      id: 4,
      title: "3D Illustration",
      category: "Illustration",
      color: "from-gray-900 to-black",
      bgColor: "bg-gray-900",
      icon: "🎭",
      description: "Creative 3D artwork and animations"
    },
    {
      id: 5,
      title: "Typography Design",
      category: "Design",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500",
      icon: "🔤",
      description: "Custom typography solutions"
    }
  ];

  const classTypes = [
    {
      title: "Beginner Class",
      description: "For those of you who are just starting design.",
      color: "blue",
      icon: "🎓",
      bgGradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Expert Class",
      description: "For those of you who want to master your skill.",
      color: "yellow",
      icon: "⚡",
      bgGradient: "from-yellow-400 to-yellow-500"
    },
    {
      title: "Employee Class",
      description: "For those of you who are already working but want to learn.",
      color: "blue",
      icon: "💼",
      bgGradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Header />
      <ScrollProgress />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="absolute top-10 left-10 text-primary text-6xl animate-spin-slow">
            <Sparkles className="w-12 h-12" />
          </div>
          <div className="absolute top-20 right-20 text-secondary text-6xl">
            <Star className="w-8 h-8 animate-pulse" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              LEVEL UP YOUR<br />
              DESIGN <span className="text-gradient">→</span> WITH OUR<br />
              DESIGN CLASS
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-2">With more than</p>
                <p className="text-4xl font-black">2K+ MEMBERS</p>
                <p className="text-4xl font-black">500+ TUTORIALS</p>
              </div>
              
              <Button 
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    index === 1 || index === 3 ? 'md:translate-y-8' : ''
                  }`}
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card 
                    className={`
                      ${project.bgColor} 
                      aspect-[3/4] 
                      rounded-3xl 
                      overflow-hidden 
                      border-0
                      transition-all 
                      duration-500
                      ${hoveredProject === project.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
                    `}
                  >
                    <div className="h-full p-6 flex flex-col items-center justify-center text-white relative">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <p className="text-xs opacity-80 mb-2">{project.category}</p>
                      <h3 className="font-bold text-sm text-center">{project.title}</h3>
                      
                      {/* Hover Overlay */}
                      <div className={`
                        absolute inset-0 bg-black/80 backdrop-blur-sm
                        flex items-center justify-center
                        transition-opacity duration-300
                        ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <div className="text-center p-4">
                          <p className="text-sm mb-4">{project.description}</p>
                          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Classes Section */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <h2 className="text-4xl md:text-5xl font-black">Our Classes</h2>
              <div className="text-right max-w-md">
                <p className="text-muted-foreground">
                  Here's our types of design classes that will accompany you with your new graphic design journey.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {classTypes.map((classType, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border-4 border-primary rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{classType.title}</h3>
                      <p className="text-sm text-muted-foreground">{classType.description}</p>
                    </div>
                    <div className={`
                      w-12 h-12 rounded-full 
                      ${classType.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'}
                      flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <ArrowRight className={classType.color === 'blue' ? 'text-white' : 'text-black'} />
                    </div>
                  </div>

                  {/* Illustration Placeholder */}
                  <div className={`
                    rounded-2xl h-48 
                    bg-gradient-to-br ${classType.bgGradient}
                    flex items-center justify-center
                    text-6xl
                    group-hover:scale-105 transition-transform duration-300
                  `}>
                    {classType.icon}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-10 left-20 text-primary text-6xl">
            <Sparkles className="w-16 h-16 animate-spin-slow" />
          </div>
          <div className="absolute bottom-10 right-20 text-primary text-6xl">
            <Sparkles className="w-16 h-16 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              KEEP CREATING UNTIL YOU<br />
              FIND YOUR OWN <span className="text-primary">AUDIENCE.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Delfi Muhammad Fahrul Habibie<br />
              <span className="font-bold">Ruang Edit Founder</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
