import { Send, Baby, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Tricycles (Available Now)",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // The WhatsApp Number
    const phoneNumber = "919831046782"; // Added 91 for India country code

    // Construct the message
    const message = `Hello! I'm interested in a callback. %0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Interested in:* ${formData.interest}`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50 max-w-sm w-full"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-pink-100 rounded-full">
          <Baby className="w-5 h-5 text-pink-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Get a Call Back</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <input
            required
            type="text"
            placeholder="Parent's Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-sm"
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-sm"
          />
        </div>

        {/* Product Dropdown */}
        <div className="relative">
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-sm text-slate-600 appearance-none cursor-pointer"
          >
            <option>Tricycles (Available Now)</option>
            <option>Bikes & Cars (Coming Soon)</option>
            <option>Becoming a Distributor</option>
          </select>
          {/* Custom arrow for the dropdown */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-200 transition-all flex items-center justify-center gap-2 transform active:scale-95"
        >
          Send to WhatsApp <Send className="w-4 h-4" />
        </button>

        <p className="text-[10px] text-center text-slate-500">
          *We usually call back within 24 hours
        </p>
      </form>
    </motion.div>
  );
}