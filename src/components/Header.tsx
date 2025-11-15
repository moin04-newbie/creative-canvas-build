import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/#about" },
    { label: "SERVICES", href: "/#services" },
    { label: "PROJECTS", href: "/#projects" },
    { label: "CONTACT", href: "/contact" },
    { label: "WE'RE HIRING", href: "/careers", accent: true },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Creativefuel" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold">Creativefuel</span>
          </NavLink>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(true)}
            className="hover:bg-primary/10"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1">
              <div className="w-6 h-0.5 bg-foreground rounded-full" />
              <div className="w-6 h-0.5 bg-foreground rounded-full" />
            </div>
          </Button>
        </div>
      </header>

      {/* Full-screen menu modal */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Creativefuel" className="h-10 w-10" />
              <span className="text-xl font-bold">Creativefuel</span>
            </NavLink>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-primary/10"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-120px)] gap-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-5xl md:text-7xl font-bold transition-all duration-300 hover:text-primary ${
                item.accent ? "text-gradient" : ""
              }`}
              style={{
                animation: menuOpen ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : "none",
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-muted-foreground mb-2">Want an actual Hamburger?</p>
          <a href="mailto:connect@creativefuel.io" className="text-primary font-semibold hover:underline">
            connect@creativefuel.io
          </a>
        </div>
      </div>
    </>
  );
};
