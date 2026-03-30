import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { ArrowRight, Star, IndianRupee, Bike, Car, Battery, Zap } from "lucide-react";
import productsData from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import hero from "../../assets/images/hero.png";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/contact-bg.png";
import hero3 from "../../assets/images/faq-bg.png";
import littleluxe from "../../assets/product/A+B Panda Backrest Magick Car.png";


const images = [
  {
    id: 1,
    src: hero,
    alt: "Hero"
  },
  {
    id: 2,
    src: hero1,
    alt: "Hero 1"
  },
  {
    id: 3,
    src: hero2,
    alt: "Cycle 2"
  },
  {
    id: 4,
    src: hero3,
    alt: "Cycle 3"
  }
]
export default function Home() {
  const navigate = useNavigate();
  console.log('Home component loading...');
  const products = productsData?.products || [];
  console.log('Products in Home:', products);

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Get featured products from different categories
  const featuredTriCycles = products.filter(p => p.category === "Tri Cycle").slice(0, 4);
  const featuredRideOns = products.filter(p => p.category === "Ride-On").slice(0, 4);
  const featuredBatteryBikes = products.filter(p => p.category === "Battery Bike").slice(0, 4);
  const featuredScooty = products.filter(p => p.category === "Scooty").slice(0, 4);
  const featuredLittleLuxe = products.filter(p => p.category === "Little Luxe").slice(0, 8);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-40 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
        <img 
          src={product.images?.[0]} 
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
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
                className={`w-3 h-3 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
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
      <div className="relative w-full h-[70vh] overflow-hidden">

        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

      </div>
    {/* STORY */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={littleluxe}
            alt="Little Luxe"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">

          <p>
            I’m <strong>Ranabir Das</strong>, proud owner of a legacy business
            rooted in love, care, and childhood joy.
          </p>

          <p>
            Our journey began in <strong>1969</strong>, when my late father
            <strong> Shri Sambhunath Das </strong>
            started a baby rides wholesale business in West Bengal.
          </p>

          <p>
            In <strong>1993</strong>, after completing my graduation,
            I took the responsibility of growing this legacy.
          </p>

          <p>
            With the belief that nothing is more beautiful than
            the smile of a child, we launched our brand
            <strong> Little Luxe – Khushi Bachoki </strong>.
          </p>

          <p>
            In <strong>2024</strong>, we entered manufacturing in
            collaboration with <strong>Baby Ride On</strong>,
            bringing innovative and safe ride-on toys for children.
          </p>

        </div>
      </div>

        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text- mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Little Luxe Collection</h2>
            <p className="text-slate-600 text-lg max-w-2xl ">
              Premium quality products designed for comfort and style
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLittleLuxe.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <img 
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 mb-2 text-sm group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4 text-purple-600" />
                      <span className="text-lg font-bold text-slate-800">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-3 h-3 text-slate-400" />
                      <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* View Details */}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="w-full py-2 rounded-lg text-sm font-medium transition" 
                    style={{ backgroundColor: '#fcd8be' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="text-center mt-8 lg:hidden">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              View All Little Luxe Products
            </button>
          </div>
        </div>
      </section>
      {/* Featured Tri Cycles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                Featured Tri Cycles
              </h2>

              <p className="text-slate-600 mt-2">
                Perfect for toddlers learning balance and coordination
              </p>
            </div>

            {/* Desktop Button */}
            <button className="hidden lg:inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition mt-4 lg:mt-0" style={{ backgroundColor: '#fcd8be' }}>
              View All <ArrowRight size={18} />
            </button>

          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredTriCycles.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 group"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">

                  <h3 className="font-semibold text-slate-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {product.description}
                  </p>

                  <p className="font-bold mt-2">
                    ₹{product.price}
                  </p>

                  {/*Buy Now */}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition" 
                    style={{ backgroundColor: '#fcd8be' }}
                  >
                   Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Mobile Button */}
          <div className="text-center mt-10 lg:hidden">
            <button className="inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition" style={{ backgroundColor: '#fcd8be' }}>
              View All <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Ride-Ons */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                Featured Ride-Ons
              </h2>

              <p className="text-slate-600 mt-2">
                Fun and exciting ride-on toys for adventurous kids
              </p>
            </div>

            {/* Desktop Button */}
            <button className="hidden lg:inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition mt-4 lg:mt-0" style={{ backgroundColor: '#fcd8be' }}>
              View All Ride-Ons <ArrowRight size={18} />
            </button>

          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredRideOns.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 group"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">

                  <h3 className="font-semibold text-slate-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {product.description}
                  </p>

                  <p className="font-bold mt-2">
                    ₹{product.price}
                  </p>

                  {/*Buy Now */}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition" 
                    style={{ backgroundColor: '#fcd8be' }}
                  >
                   Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Mobile Button */}
          <div className="text-center mt-10 lg:hidden">
            <button className="inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition" style={{ backgroundColor: '#fcd8be' }}>
              View All Ride-Ons <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Battery Bikes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                Featured Battery Bikes
              </h2>

              <p className="text-slate-600 mt-2">
                Advanced battery-powered bikes for ultimate experience
              </p>
            </div>

            {/* Desktop Button */}
            <button className="hidden lg:inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition mt-4 lg:mt-0" style={{ backgroundColor: '#fcd8be' }}>
              View All Battery Bikes <ArrowRight size={18} />
            </button>

          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredBatteryBikes.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 group"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">

                  <h3 className="font-semibold text-slate-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {product.description}
                  </p>

                  <p className="font-bold mt-2">
                    ₹{product.price}
                  </p>

                  {/*Buy Now */}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition" 
                    style={{ backgroundColor: '#fcd8be' }}
                  >
                   Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Mobile Button */}
          <div className="text-center mt-10 lg:hidden">
            <button className="inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition" style={{ backgroundColor: '#fcd8be' }}>
              View All Battery Bikes <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
  <section className="relative bg-[#faf9f7] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#8B5CF6]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-200/30 blur-3xl rounded-full -z-10"></div>

      

      {/* Subscribe Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Left: Offer Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h2
             
              className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
            >
              Sign up & unlock 10% off your first order
            </h2>

            <p className="text-zinc-600 text-lg mb-10 max-w-md leading-relaxed">
              Discover exclusive art pieces, curator insights, and special previews tailored for collectors and creators alike.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full border border-zinc-300 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 outline-none transition"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#8B5CF6] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#7C3AED] transition"
              >
                Get offer <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Modern Visual */}
          <div className="relative bg-gradient-to-br from-[#F5F3FF] via-[#FAE8FF] to-[#EEF2FF] flex items-center justify-center p-8">
            <div
            
              className="relative w-full max-w-md"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden ">
                <img
                  src="/product/Picture7.png"
                  alt="Artist workspace"
                  className="w-full h-[400px] object-cover"
                />
                {/* Overlay Gradient */}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Featured Scooty */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                Featured Scooty
              </h2>

              <p className="text-slate-600 mt-2">
                Stylish and fun scooty ride-ons for little riders
              </p>
            </div>

            {/* Desktop Button */}
            <button className="hidden lg:inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition mt-4 lg:mt-0" style={{ backgroundColor: '#fcd8be' }}>
              View All Scooty <ArrowRight size={18} />
            </button>

          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredScooty.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 group"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">

                  <h3 className="font-semibold text-slate-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {product.description}
                  </p>

                  <p className="font-bold mt-2">
                    ₹{product.price}
                  </p>

                  {/*Buy Now */}
                  <button 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition" 
                    style={{ backgroundColor: '#fcd8be' }}
                  >
                   Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Mobile Button */}
          <div className="text-center mt-10 lg:hidden">
            <button className="inline-flex items-center gap-2 hover:text-white px-6 py-3 rounded-full font-semibold transition" style={{ backgroundColor: '#fcd8be' }}>
              View All Scooty <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-2">
              Why Kids Love Our Cycles
            </h2>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-purple-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-2xl mx-auto mb-4">
                🎨
              </div>

              <h3 className="font-semibold text-lg text-slate-800">
                Cute Colors
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Bright and playful shades kids absolutely adore.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-yellow-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-2xl mx-auto mb-4">
                🛡️
              </div>

              <h3 className="font-semibold text-lg text-slate-800">
                Super Safe
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Built with strong frames and smooth braking system.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-2xl mx-auto mb-4">
                🌟
              </div>

              <h3 className="font-semibold text-lg text-slate-800">
                Lightweight
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Easy to ride, handle and carry anywhere.
              </p>

            </div>

          </div>

        </div>
      </section>


    </>
  );
}
