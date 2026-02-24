import Container from "../components/layout/Container";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-50 to-white pt-14 pb-8 mt-10">
      <Container>
        
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-purple-500">
              Little Luxe 🚲
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Making every little ride full of joy, safety and colorful smiles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><a href="#" className="hover:text-purple-500">Home</a></li>
              <li><a href="#" className="hover:text-purple-500">Shop</a></li>
              <li><a href="#" className="hover:text-purple-500">About</a></li>
              <li><a href="#" className="hover:text-purple-500">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-purple-500">
              <Facebook className="hover:scale-110 transition cursor-pointer" />
              <Instagram className="hover:scale-110 transition cursor-pointer" />
              <Twitter className="hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TinyRide 🚲 — All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
