import { ChevronDown, ChevronUp, Star, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is Little Luxe?",
    answer: "Little Luxe is a premium brand specializing in baby rides and children's products. We offer high-quality, safe, and fun ride-on toys for kids, bringing joy and excitement to childhood experiences."
  },
  {
    id: 2,
    question: "How long have you been in business?",
    answer: "Our family business was established in 1969 by Shri Sambhunath Das. In 1993, Ranabir Das took over the business, and in 2024, we launched our own manufacturing brand 'Little Luxe - Khushi Bachoki' in collaboration with Baby Ride On."
  },
  {
    id: 3,
    question: "What types of products do you offer?",
    answer: "We offer a wide range of baby ride-on toys including tricycles, bicycles, scooters, battery-operated cars, and other children's vehicles. All our products are designed with safety and fun in mind."
  },
  {
    id: 4,
    question: "Do you provide warranty on your products?",
    answer: "Yes, all Little Luxe products come with a manufacturer's warranty. The warranty period varies by product type and covers manufacturing defects. Please check the product manual for specific warranty details."
  },
  {
    id: 5,
    question: "How can I place an order?",
    answer: "You can place an order through our website, by calling our customer service, or by visiting our showroom in Kolkata. We also work with authorized dealers across West Bengal."
  },
  {
    id: 6,
    question: "What is your return policy?",
    answer: "We offer a 7-day return policy for unused products in their original packaging. Products must be returned in the same condition as received. Customized or used products cannot be returned."
  },
  {
    id: 7,
    question: "Do you deliver outside Kolkata?",
    answer: "Yes, we deliver across West Bengal and selected cities in India. Delivery charges and timeframes vary based on location. Please contact us for specific delivery information to your area."
  },
  {
    id: 8,
    question: "Are your products safe for children?",
    answer: "Absolutely! All our products meet safety standards and are made from child-safe materials. We conduct rigorous quality checks to ensure every product is safe, durable, and suitable for the intended age group."
  },
  {
    id: 9,
    question: "Do you offer assembly services?",
    answer: "Yes, we provide assembly services for larger products like battery-operated cars and bicycles. Our trained technicians can assemble the product at your home for a nominal fee."
  },
  {
    id: 10,
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you'll receive a tracking number via email or SMS. You can use this number to track your order on our website or call our customer service for updates."
  },
  {
    id: 11,
    question: "Do you have spare parts available?",
    answer: "Yes, we maintain a comprehensive inventory of spare parts for all our products. You can order spare parts through our website or visit our showroom for immediate availability."
  },
  {
    id: 12,
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit/credit cards, UPI, net banking, and also offer EMI options for higher-value products. All online payments are secure and encrypted."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div>

      

          {/* HERO */}
      <div
        className="relative py-20 px-6 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-bg.png')" // apni image ka path yaha lagao
        }}
      >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
             Frequently Asked <span className="text-orange-500">Questions</span> 
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
           Everything You Need to Know About Little Luxe 
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-medium">Quick Answers</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              Got Questions? We've Got Answers!
            </h2>

            <p className="mt-2 text-slate-600">
              Find answers to common questions about our products
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left bg-slate-50 hover:bg-orange-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Star className="w-4 h-4 text-orange-600" />
                    </div>

                    <h3 className="font-semibold text-slate-800">
                      {item.question}
                    </h3>
                  </div>

                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openItems.includes(item.id)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 py-4 bg-orange-50 border-t border-orange-100">
                    <p className="text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  

    </div>
  );
}