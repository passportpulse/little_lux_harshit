import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800">
              Contact <span className="text-blue-500">Little Luxe</span> 📞
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Get in Touch with Us - We're Here to Help! 🛠️
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section className="bg-white">
        <Container size="sm">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">info@littleluxe.com</p>
                  <p className="text-slate-600">support@littleluxe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Address</h3>
                  <p className="text-slate-600">
                    Little Luxe Showroom<br />
                    123, Kid's Street, Kolkata<br />
                    West Bengal - 700001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Business Hours</h3>
                  <p className="text-slate-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-slate-600">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Find Us Here 📍
            </h2>
            <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Map will be displayed here</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
