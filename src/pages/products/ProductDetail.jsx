import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, ShoppingCart, Star, IndianRupee, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react";
import productsData from "../../data/data.json";
import Container from "../../components/layout/Container";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  console.log('Product ID from params:', id);
  
  const products = productsData?.products || [];
  console.log('Available products:', products);
  
  const product = products.find(p => p.id === parseInt(id));
  console.log('Found product:', product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-4">Looking for product ID: {id}</p>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} x ${product.name} to cart`);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log(`Buy now: ${quantity} x ${product.name}`);
    alert(`Proceeding to checkout with ${quantity} x ${product.name}`);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="">
        <Container>
          <div className="py-4 flex items-center gap-2 text-sm">
            <button 
              onClick={() => navigate('/products')}
              className="text-blue-600 hover:text-blue-700 font-medium transition flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Products
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 font-medium">{product.name}</span>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
                <img 
                  src={product.images?.[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='14' fill='%236b7280'%3EProduct Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                {product.images && product.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                    {selectedImage + 1} / {product.images.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl border-3 overflow-hidden transition-all duration-200 hover:scale-105 ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-lg ring-2 ring-blue-200' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-contain bg-white p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-4xl font-bold text-slate-900 leading-tight">{product.name}</h1>
                <button className="p-3 rounded-full hover:bg-slate-100 transition">
                  <Heart className="w-6 h-6 text-slate-400 hover:text-red-500 transition" />
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 font-medium">(4.0)</span>
                </div>
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{discount}% OFF
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-6 h-6 text-blue-600" />
                  <span className="text-4xl font-bold text-slate-900">{product.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-slate-400" />
                  <span className="text-xl text-slate-400 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Category</h3>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                {product.category}
              </span>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="w-12 h-12 rounded-xl border-2 border-slate-300 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-16 text-center text-xl font-bold text-slate-800">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="w-12 h-12 rounded-xl border-2 border-slate-300 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                <Truck className="w-6 h-6 text-green-600" />
                <span className="text-slate-700 font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-slate-700 font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                <RotateCcw className="w-6 h-6 text-purple-600" />
                <span className="text-slate-700 font-medium">7 Days Return</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
