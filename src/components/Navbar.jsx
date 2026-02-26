import { useState } from "react";
import { Menu, X, ShoppingCart, Search, Sparkles } from "lucide-react";
import logo from "../assets/logo.jpeg";
import Container from "../components/layout/Container";
import {navigationLinks} from "../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-500 bg-white border-b border-primary shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-24">
          {/* 1. Logo & Branding Section */}
          <div className="flex items-center gap-2 min-w-fit">
            <img
              src={logo}
              alt="Little Luxe Logo"
              className="h-12 lg:h-14 w-auto object-contain transition-transform duration-700 ease-in-out hover:rotate-y-360 cursor-pointer"
            />
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-bold leading-tight tracking-tight bg-linear-to-r from-secondary via-secondary-dark to-primary-dark bg-clip-text text-transparent">
                Little Luxe
              </h1>
              <p className="text-xs lg:text-sm font-medium text-secondary/80 italic">
                Khusi Bachho Ki ❤️
              </p>
            </div>
          </div>

          {/* 2. Middle Menu (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="text-secondary-dark text-lg px-5 py-2 rounded-2xl transition-all duration-300 
                 hover:bg-primary/20 hover:text-secondary 
                 hover:shadow-[0_0_15px_rgba(252,216,190,0.5)] 
                 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Action Cards/Icons (Right) */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search Card Style */}
            <div className="hidden lg:flex items-center bg-primary/20 p-2 rounded-xl cursor-pointer hover:bg-primary/40 transition-colors">
              <Search className="text-secondary w-5 h-5" />
            </div>

            {/* Cart Card Style */}
            <div className="relative flex items-center bg-primary/20 p-2 rounded-xl cursor-pointer hover:bg-linear-to-br hover:from-primary/60 hover:to-primary/20 transition-all duration-300 active:scale-95 group">
              {/* The Icon */}
              <ShoppingCart className="text-secondary w-5 h-5 group-hover:scale-110 transition-transform" />

              {/* Item Count Badge */}
              <span
                className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full 
                 bg-linear-to-br from-secondary to-secondary-dark
                 text-[10px] font-bold text-primary shadow-md border border-white/50"
              >
                0
              </span>
            </div>

            {/* The "Little Luxe" Shop Now Button */}
            <button className="hidden lg:block cursor-pointer relative overflow-hidden rounded-full group shadow-md transition-all duration-500 active:scale-95">
              {/* Base Gradient (Secondary to Primary-Dark) */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary to-primary-dark transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Swap Gradient (Primary-Dark to Secondary) */}
              <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Layer */}
              <span className="relative flex items-center gap-2 px-7 py-3">
                {/* Sparkle with subtle shine effect */}
                <Sparkles className="h-4 w-4 text-white transition-all duration-500 group-hover:text-yellow-100 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />

                <span className="text-white text-lg tracking-wide font-medium">
                  Shop Now
                </span>
              </span>
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-secondary ml-2"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden grid transition-all duration-300 ease-in-out border-primary/10 overflow-hidden ${
            open
              ? "grid-rows-[1fr] opacity-100 border-t pb-6"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 overflow-hidden">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className={`py-2 px-3 text-secondary transform transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                onClick={() => setOpen(false)}
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
