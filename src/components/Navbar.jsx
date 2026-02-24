import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Container from "../components/layout/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-purple-500">
            Little Luxe 🚲
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-purple-500 transition">Home</a>
            <a href="#" className="hover:text-purple-500 transition">Shop</a>
            <a href="/about-us" className="hover:text-purple-500 transition">About</a>
            <a href="#" className="hover:text-purple-500 transition">Contact</a>

            <button className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600 transition shadow-md">
              <ShoppingCart size={18} /> Cart
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-500"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4 font-medium text-slate-700">
            <a href="#" className="hover:text-purple-500">Home</a>
            <a href="#" className="hover:text-purple-500">Shop</a>
            <a href="#" className="hover:text-purple-500">About</a>
            <a href="#" className="hover:text-purple-500">Contact</a>

            <button className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2">
              <ShoppingCart size={18} /> Cart
            </button>
          </div>
        )}
      </Container>
    </nav>
  );
}
