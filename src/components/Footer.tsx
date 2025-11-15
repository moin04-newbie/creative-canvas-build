import { Instagram, Twitter, Linkedin, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black">
              Your Brand's
              <br />
              <span className="text-gradient">Creative</span> Partner
            </h3>
            <p className="text-lg">
              Reach us at{" "}
              <a
                href="mailto:connect@creativefuel.io"
                className="underline hover:text-primary transition-colors"
              >
                connect@creativefuel.io
              </a>
            </p>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-primary">Mumbai</h4>
              <p className="text-sm text-muted-foreground">
                1503 Signature Lotus
                <br />
                Veera Desai Industrial Estate
                <br />
                Andheri West, Mumbai 400053
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-primary">Indore</h4>
              <p className="text-sm text-muted-foreground">
                105, Gravity Mall
                <br />
                Vijay Nagar
                <br />
                Indore 452010
              </p>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="hover:text-primary transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#policy" className="hover:text-primary transition-colors">
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Hiring CTA */}
          <div className="space-y-6">
            <h4 className="text-3xl font-bold text-gradient">We're hiring</h4>
            <p className="text-muted-foreground">Join our creative team and make magic happen!</p>

            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Creativefuel. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary hover:bg-secondary shadow-lg z-30 hidden lg:flex"
        aria-label="Scroll to top"
      >
        <div className="flex flex-col items-center">
          <ArrowUp className="h-6 w-6" />
          <span className="text-xs font-bold">up</span>
        </div>
      </Button>
    </footer>
  );
};
