import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { ArrowRight, Star, IndianRupee } from "lucide-react";
import productsData from "../../data/data.json";
import { useState } from "react";

export default function Home() {
  const products = productsData.products;

  // Get featured products from different categories
  const featuredTriCycles = products.filter(p => p.category === "Tri Cycle").slice(0, 4);
  const featuredRideOns = products.filter(p => p.category === "Ride-On").slice(0, 4);
  const featuredBatteryBikes = products.filter(p => p.category === "Battery Bike").slice(0, 4);
  const featuredScooty = products.filter(p => p.category === "Scooty").slice(0, 4);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-40 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
        <div className="text-5xl opacity-20">🚲</div>
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors text-sm">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">(4.0)</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-3 h-3 text-purple-500" />
              <span className="text-lg font-bold text-slate-800">{product.price}</span>
            </div>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-2 h-2 text-slate-400" />
              <span className="text-xs text-slate-400 line-through">{product.originalPrice}</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-purple-50 via-yellow-50 to-blue-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
                Tiny Wheels,
                <br />
                <span className="text-purple-500">Big Smiles</span> 🚲
              </h1>

              <p className="mt-5 text-slate-600 text-lg">
                Safe, colorful and super cute cycles designed
                specially for your little champions.
              </p>

              <button className="mt-7 inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition">
                Shop Now <ArrowRight size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1"
                alt="Baby Cycle"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Tri Cycles */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🚲 Featured Tri Cycles
            </h2>
            <p className="text-slate-600">
              Perfect for toddlers learning balance and coordination
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTriCycles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition">
              View All Tri Cycles <ArrowRight size={18} />
            </button>
          </div>
        </Container>
      </Section>

      {/* Featured Ride-Ons */}
      <Section className="bg-gradient-to-b from-yellow-50 to-orange-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🦄 Featured Ride-Ons
            </h2>
            <p className="text-slate-600">
              Fun and exciting ride-on toys for adventurous kids
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRideOns.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
              View All Ride-Ons <ArrowRight size={18} />
            </button>
          </div>
        </Container>
      </Section>

      {/* Featured Battery Bikes */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🔋 Featured Battery Bikes
            </h2>
            <p className="text-slate-600">
              Advanced battery-powered bikes for the ultimate experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBatteryBikes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              View All Battery Bikes <ArrowRight size={18} />
            </button>
          </div>
        </Container>
      </Section>

      {/* Featured Scooty */}
      <Section className="bg-gradient-to-b from-pink-50 to-purple-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🛵 Featured Scooty
            </h2>
            <p className="text-slate-600">
              Stylish and fun scooty ride-ons for little riders
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredScooty.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition">
              View All Scooty <ArrowRight size={18} />
            </button>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              Why Kids Love Our Cycles 💕
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-purple-50 p-6 rounded-3xl shadow-md text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg">Cute Colors</h3>
              <p className="text-sm text-slate-600 mt-2">
                Bright and playful shades kids adore.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-3xl shadow-md text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-lg">Super Safe</h3>
              <p className="text-sm text-slate-600 mt-2">
                Designed with strong frames and smooth brakes.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-3xl shadow-md text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-lg">Lightweight</h3>
              <p className="text-sm text-slate-600 mt-2">
                Easy to ride and easy to carry.
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* Call To Action */}
      <Section className="bg-purple-500 text-white text-center">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready for Your Child's First Ride?
          </h2>
          <p className="mt-4 text-purple-100">
            Let the adventure begin with safe and joyful cycling.
          </p>

          <button className="mt-6 bg-white text-purple-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Explore Collection
          </button>
        </Container>
      </Section>
    </>
  );
}
