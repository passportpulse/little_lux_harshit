import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Calendar, Clock, User, ArrowRight, BookOpen, Heart } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Perfect First Ride for Your Child",
    excerpt: "A comprehensive guide to selecting the best ride-on toy for your little one's age and developmental stage.",
    author: "Ranabir Das",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Parenting Guide",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Safety First: Essential Tips for Ride-On Toys",
    excerpt: "Learn the most important safety measures to ensure your child has a fun and secure playtime experience.",
    author: "Little Luxe Team",
    date: "March 10, 2024",
    readTime: "3 min read",
    category: "Safety",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "The Journey of Little Luxe: From 1969 to Today",
    excerpt: "Discover our family's legacy and how we've been bringing joy to children for over 50 years.",
    author: "Ranabir Das",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Our Story",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Benefits of Outdoor Play for Child Development",
    excerpt: "Explore how ride-on toys and outdoor activities contribute to your child's physical and mental growth.",
    author: "Child Development Expert",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Child Development",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Maintenance Guide: Keep Your Ride-On Toys Like New",
    excerpt: "Simple tips and tricks to maintain and clean your children's ride-on toys for long-lasting fun.",
    author: "Little Luxe Team",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Maintenance",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Top 5 Ride-On Toys for Toddlers in 2024",
    excerpt: "Our curated list of the best and safest ride-on toys perfect for toddlers this year.",
    author: "Product Expert",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Product Reviews",
    image: "/api/placeholder/400/250"
  }
];

const categories = [
  "All Posts",
  "Parenting Guide", 
  "Safety",
  "Our Story",
  "Child Development",
  "Maintenance",
  "Product Reviews"
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800">
              Little Luxe <span className="text-purple-500">Blog</span> 📝
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Tips, Stories, and Insights for Happy Childhoods 🌟
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Post */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="mb-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-64 lg:h-80 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-purple-400" />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-sm font-medium mb-4">
                      <Heart className="w-4 h-4" />
                      Featured Post
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-purple-500 text-white"
                      : "bg-white text-slate-600 hover:bg-purple-100 hover:text-purple-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <article
                  key={post.id}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-r from-purple-500 to-pink-500">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Little Luxe! 💌
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest parenting tips, product updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
