import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg";
import Container from "../components/layout/Container";
import { navigationLinks } from "../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  return (
<nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-100 via-orange-200 to-yellow-100 border-b border-orange-200 shadow-sm">
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
                <div key={link.id} className="relative">
                  {link.label === "Products" ? (
                    <div
                      className="flex items-center gap-1 text-secondary-dark text-base xl:text-lg px-4 py-2 rounded-xl transition-all duration-300
                      hover:bg-primary/20 hover:text-secondary
                      hover:shadow-[0_0_15px_rgba(252,216,190,0.5)]
                      active:scale-95 cursor-pointer"
                      onMouseEnter={() => setProductsDropdown(true)}
                      onMouseLeave={() => setProductsDropdown(false)}
                    >
                      {link.label}
                      <ChevronDown size={16} className="transition-transform duration-300" />
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 bg-white border border-primary/20 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                          productsDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onMouseEnter={() => setProductsDropdown(true)}
                        onMouseLeave={() => setProductsDropdown(false)}
                      >
                        <a
                          href="/products/multi-brand"
                          className="block px-6 py-3 text-secondary-dark hover:bg-primary/20 hover:text-secondary transition-colors duration-200 whitespace-nowrap"
                        >
                          Multi Brand
                        </a>
                        <a
                          href="/products/little-luxe"
                          className="block px-6 py-3 text-secondary-dark hover:bg-primary/20 hover:text-secondary transition-colors duration-200 whitespace-nowrap"
                        >
                          Little Luxe Brand
                        </a>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.path}
                      className="text-secondary-dark text-base xl:text-lg px-4 py-2 rounded-xl transition-all duration-300
                      hover:bg-primary/20 hover:text-secondary
                      hover:shadow-[0_0_15px_rgba(252,216,190,0.5)]
                      active:scale-95"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
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
              <div key={link.id}>
                {link.label === "Products" ? (
                  <div>
                    <div
                      className="py-3 px-4 text-secondary rounded-lg transition-all duration-300
                      hover:bg-primary/20 hover:pl-6 cursor-pointer flex items-center justify-between"
                      onClick={() => setProductsDropdown(!productsDropdown)}
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${productsDropdown ? "rotate-180" : ""}`}
                      />
                    </div>
                    
                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productsDropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <a
                        href="/products/multi-brand"
                        onClick={() => setOpen(false)}
                        className="py-2 px-8 text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors duration-200 block"
                      >
                        Multi Brand
                      </a>
                      <a
                        href="/products/little-luxe"
                        onClick={() => setOpen(false)}
                        className="py-2 px-8 text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors duration-200 block"
                      >
                        Little Luxe Brand
                      </a>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 text-secondary rounded-lg transition-all duration-300
                    hover:bg-primary/20 hover:pl-6"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}