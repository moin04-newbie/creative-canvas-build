import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 bg-brand-cream">
        <div className="max-w-7xl w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark leading-none mb-12">
            MAKE GOOD<br />PROJECTS.
          </h1>
          
          <div className="max-w-4xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Join us in shaping a future where marketing knows no boundaries, and possibilities are limited only by imagination.
            </h2>
            <p className="text-lg text-muted-foreground">
              Together, we will continue to harness the power of technology and the brilliance of people to transform not just brands, 
              but the very landscape of marketing itself. This is our commitment, our passion, and our pledge as we embark on this 
              exhilarating journey with brands towards unparalleled success.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <NavLink to="/#projects">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-foreground font-bold text-lg px-8 py-6 rounded-full">
                SEE OUR WORK
              </Button>
            </NavLink>
            <NavLink to="/careers">
              <Button size="lg" variant="outline" className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-foreground font-bold text-lg px-8 py-6 rounded-full">
                JOIN US
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Where Marketing Isn't Just A Strategy Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-tight mb-20">
            WHERE<br />
            MARKETING ISN'T<br />
            JUST A<br />
            STRATEGY;
          </h2>

          <div className="space-y-16">
            {/* Welcome Section */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
                Welcome to Creativefuel, where marketing isn't just a strategy; it's an art form.
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground">
                <div className="space-y-4">
                  <p>
                    With over five years of experience and a track record of successfully executing more than 3,000 campaigns,
                  </p>
                  <p>
                    We've turned marketing into a canvas, where memes are masterpieces, and tweets are treasures.
                  </p>
                </div>
                <div>
                  <p>
                    We've become the industry's go-to source for innovative marketing solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="border-t border-border pt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
                Our Story: Where Creativity Takes Flight
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
                <p>
                  Picture this: a small group of imaginative minds huddled around a table, armed with nothing but their dreams and the 
                  burning desire to make a difference in the marketing universe.
                </p>
                <p>
                  Fast forward five years, and here we are, a thriving marketing powerhouse with a reputation that speaks volumes.
                </p>
                <p>
                  Creativefuel was born from our passion to redefine marketing's possibilities. It's not just about selling; it's storytelling, 
                  sparking conversations, and crafting memorable experiences. Our journey has been a thrilling ride of creativity, learning, 
                  and love for every twist and turn.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="border-t border-border pt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
                At CreativeFuel, we ignite possibilities in the world of marketing.
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
                <p>
                  With a foundation deeply rooted in our pioneering expertise in meme marketing, we have evolved into a visionary force 
                  that specializes in leveraging cutting-edge technologies and innovative strategies to elevate brands to unprecedented heights.
                </p>
                <p>
                  Our mission is clear: to empower businesses by crafting compelling narratives that resonate with audiences, foster genuine 
                  connections, and drive measurable results. We believe in the transformative power of creativity, and we're committed to 
                  pushing boundaries, challenging conventions, and redefining what's possible in the ever-evolving landscape of marketing.
                </p>
                <p>
                  At CreativeFuel, we don't just follow trends—we set them. Our diverse team of creative minds, data-driven strategists, 
                  and tech enthusiasts work collaboratively to deliver solutions that are not only effective but also unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
