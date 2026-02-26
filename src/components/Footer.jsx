import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { Mail, MapPin, Phone, Heart } from "lucide-react";
import logo from "../assets/logo.jpeg";
import {
  navigationLinks,
  supportLinks,
  socialLinks,
} from "../constants/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section className="bg-linear-to-b from-white via-primary/40 to-primary border-t border-primary-dark/40">
      <Container>
        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 pb-12 border-b border-primary-dark/30">
          {/* Brand */}
          <div className="max-w-md text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <img
                src={logo}
                alt="Little Luxe Logo"
                className="h-12 lg:h-14 w-auto object-contain rounded-xl"
              />
              <div className="flex flex-col text-left">
                <h2 className="text-xl lg:text-2xl font-bold leading-tight tracking-tight bg-linear-to-r from-secondary via-secondary-dark to-primary-dark bg-clip-text text-transparent">
                  Little Luxe
                </h2>
                <p className="text-xs lg:text-sm font-medium text-secondary/80 italic">
                  Khusi Bachho Ki ❤️
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-secondary/70 leading-relaxed max-w-sm mx-auto lg:mx-0">
              Premium baby cycles crafted with safety and love. Making childhood
              memories — one joyful ride at a time.
            </p>
          </div>

          {/* WhatsApp Connect Card */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <a
              href="https://wa.me/919831046782"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-full max-w-75 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-500 flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] font-bold text-secondary">
                    WhatsApp Connect
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[11px]">
                    <span className="text-green-600 font-bold uppercase">
                      Online Now
                    </span>
                    <span className="text-secondary/40">• 5 min reply</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ================= MIDDLE GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 py-12 text-sm">
          {/* Explore */}
          <div className="col-span-1">
            <h3 className="font-bold text-secondary uppercase tracking-[0.15em] text-[11px] mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors group"
                    >
                      <Icon
                        size={18}
                        className={`${item.color} group-hover:scale-110 transition-transform`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-bold text-secondary uppercase tracking-[0.15em] text-[11px] mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {supportLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors group"
                    >
                      <Icon
                        size={18}
                        className={`${item.color} group-hover:scale-110 transition-transform`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact - Better Mobile Layout with Alt Numbers */}
          <div className="col-span-2 mt-4 lg:mt-0">
            <h3 className="font-bold text-secondary uppercase tracking-[0.15em] text-[11px] mb-6">
              Visit Our Store
            </h3>
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6 group">
                <div className="p-2.5 bg-pink-50 rounded-xl group-hover:bg-pink-100 transition-colors shrink-0">
                  <MapPin size={20} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm leading-tight">
                    Gouranga Cycle Co.
                  </p>
                  <p className="text-secondary/70 text-[13px] mt-1 leading-relaxed">
                    62, Bentinck Street, Kolkata-700069
                  </p>
                </div>
              </div>

              {/* Responsive Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-50 rounded-lg">
                      <Phone size={14} className="text-green-500" />
                    </div>
                    <a
                      href="tel:9831046782"
                      className="text-secondary/80 font-semibold text-[13px] hover:text-green-600 transition-colors"
                    >
                      9831046782
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-50 rounded-lg">
                      <Phone size={14} className="text-green-600" />
                    </div>
                    <a
                      href="tel:9073140151"
                      className="text-secondary/80 font-semibold text-[13px] hover:text-green-600 transition-colors"
                    >
                      9073140151
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    <Mail size={14} className="text-blue-400" />
                  </div>
                  <a
                    href="mailto:littleluxe161@gmail.com"
                    className="text-secondary/80 font-semibold text-[13px] hover:text-blue-500 transition-colors truncate"
                  >
                    littleluxe161@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="pt-8 border-t border-primary-dark/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-10 h-10 rounded-2xl flex items-center justify-center 
          bg-white border border-primary-dark/10 shadow-sm
          ${item.hoverBg} hover:-translate-y-1 hover:scale-110 transition-all duration-300`}
                >
                  <Icon
                    size={18}
                    className={`${item.color} group-hover:text-${item.color} transition-colors duration-300`}
                  />
                </a>
              );
            })}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[11px] text-secondary uppercase tracking-widest">
              © {currentYear} LITTLE LUXE • CRAFTED WITH{" "}
              <Heart className="inline-block align-middle w-3 h-3 fill-secondary text-secondary animate-pulse -mt-0.5" />{" "}
              FOR BABIES
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
