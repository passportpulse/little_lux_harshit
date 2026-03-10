import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
import Container from "../components/layout/Container";
import { navigationLinks } from "../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-primary shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Little Luxe Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-500 hover:scale-105 cursor-pointer"
            />

            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-secondary via-secondary-dark to-primary-dark bg-clip-text text-transparent">
                Little Luxe
              </h1>

              <p className="text-[10px] sm:text-xs lg:text-sm text-secondary/80 italic">
                Khusi Bachho Ki ❤️
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="text-secondary-dark text-base xl:text-lg px-4 py-2 rounded-xl transition-all duration-300
                  hover:bg-primary/20 hover:text-secondary
                  hover:shadow-[0_0_15px_rgba(252,216,190,0.5)]
                  active:scale-95"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-secondary"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96 opacity-100 border-t pt-4 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-secondary rounded-lg transition-all duration-300
                hover:bg-primary/20 hover:pl-6"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}