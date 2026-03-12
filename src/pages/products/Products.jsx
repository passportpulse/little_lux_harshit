import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { useState } from "react";
import productsData from "../../data/data.json";
import { Search, Filter, Heart, ShoppingCart, Star, IndianRupee } from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const products = productsData?.products || [];
  console.log('Products Data:', products);
  console.log('First product:', products[0]);

  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <>
      {/* Hero */}
    <section className="relative bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
      Our <span className="text-orange-500">Products</span> 
    </h1>

    <p className="mt-6 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
      Premium Baby Rides & Toys designed for safety, fun, and joyful childhood moments 
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#products"
        className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
      >
        Browse Products
      </a>

      <a
        href="/contact"
        className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition"
      >
        Contact Us
      </a>
    </div>

  </div>
</section>

      {/* Filters */}
<div className="bg-white border-b border-gray-200 py-6 px-6 lg:px-12">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">

    {/* Left - Search */}
    <div className="relative w-full lg:max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
    </div>

    {/* Right - Category + Sort */}
    <div className="flex items-center gap-4 w-full lg:w-auto">

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Sort Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      >
        <option value="name">Sort by Name</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>

    </div>

  </div>
</div>

    {/* Products Grid */}
<section className="bg-slate-50 py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">

 

    {/* Products */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

      {sortedProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
        >

          {/* Image */}
          <div className="relative h-56 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">

            {/* Discount */}
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>

            <img
              src={product.images?.[0]}
              alt={product.name}
              className="h-full object-contain p-6 group-hover:scale-105 transition duration-300"
            />

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition">

              <button className="bg-white p-2 rounded-full hover:bg-orange-100 transition">
                <Heart className="w-4 h-4 text-red-500" />
              </button>

              <button className="bg-white p-2 rounded-full hover:bg-orange-100 transition">
                <ShoppingCart className="w-4 h-4 text-orange-500" />
              </button>

            </div>

          </div>

          {/* Content */}
          <div className="p-5">

            {/* Category */}
            <span className="inline-block mb-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
              {product.category}
            </span>

            {/* Name */}
            <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                  }`}
                />
              ))}
              <span className="text-xs text-slate-500 ml-1">(4.0)</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-4">

              <div>
                <div className="flex items-center gap-1 text-xl font-bold text-slate-800">
                  <IndianRupee className="w-4 h-4 text-orange-500" />
                  {product.price}
                </div>

                <div className="flex items-center gap-1 text-sm text-slate-400 line-through">
                  <IndianRupee className="w-3 h-3" />
                  {product.originalPrice}
                </div>
              </div>

            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition transform hover:scale-105">
              Add to Cart
            </button>

          </div>
        </div>
      ))}

    </div>

    {/* Empty State */}
    {sortedProducts.length === 0 && (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          No products found
        </h3>
        <p className="text-slate-600">
          Try adjusting your search or filters
        </p>
      </div>
    )}

  </div>
</section>
    </>
  );
}
