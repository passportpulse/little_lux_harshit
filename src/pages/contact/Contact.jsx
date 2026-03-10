import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">

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
            Contact Little Luxe
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for any queries, support,
            or information about our products.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div className="space-y-8">

          <h2 className="text-3xl font-bold text-slate-800">
            Get in Touch
          </h2>

          {/* Phone */}
   <div className="flex gap-4 p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition">
  
  <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center">
    <Phone className="text-blue-600 w-6 h-6" />
  </div>

  <div>
    <h3 className="font-semibold text-lg">Phone</h3>
    <p className="text-slate-600">+91 9831046782</p>
    <p className="text-slate-600">+91 9073140151</p>
  </div>

</div>

          {/* Email */}
          <div className="flex gap-4 p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center">
              <Mail className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-slate-600">littleluxe161@gmail.com</p>
       
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center">
              <MapPin className="text-pink-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-slate-600">
                C/O :Gouranga Cycle Co <br />
                62, Bentinck Street, Kolkata <br />
                Kolkata-700069
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-4 p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <div className="bg-yellow-100 w-14 h-14 rounded-xl flex items-center justify-center">
              <Clock className="text-yellow-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <p className="text-slate-600">
                Monday - Saturday: 10:00 AM - 7:00 PM
              </p>
              <p className="text-slate-600">
                Sunday: 11:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>

      {/* MAP */}
      <div className="bg-slate-100 py-16 px-6 text-center">

        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Find Us Here 📍
        </h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372.956643591758!2d88.35008277661865!3d22.567385079495494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a62f10208d%3A0xc62165c88030beaa!2sGAURANGA%20CYCLE%20CO.!5e1!3m2!1sen!2sin!4v1773146721885!5m2!1sen!2sin"
            className="w-full h-[400px] border-0"
          />
        </div>

      </div>

    </div>
  );
}