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
      <Section className="bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800">
              Our <span className="text-orange-500">Products</span> 🚲
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Premium Baby Rides & Toys for Happy Childhoods 🌟
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="bg-white border-b">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-orange-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </Container>
      </Section>

      {/* Products Grid */}
      <Section className="bg-slate-50">
        <Container>
          <div className="mb-6 text-center">
            <p className="text-slate-600">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                  <img 
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button className="bg-white p-2 rounded-full hover:bg-orange-100 transition-colors">
                      <Heart className="w-4 h-4 text-red-500" />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-orange-100 transition-colors">
                      <ShoppingCart className="w-4 h-4 text-orange-500" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(4.0)</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4 text-orange-500" />
                        <span className="text-xl font-bold text-slate-800">{product.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-3 h-3 text-slate-400" />
                        <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No products found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
