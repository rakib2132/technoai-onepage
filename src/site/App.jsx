import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  Megaphone,
  Globe,
  Smartphone,
  Store,
  BadgePercent,
  Mail,
  Phone,
  CalendarDays,
  Coffee,
  LineChart,
  Wifi,
  DollarSign,
  Receipt,
  ShieldCheck,
  Star,
  Menu,
} from "lucide-react";

// helper for fade-in animations
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Site() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">
            Techno <span className="text-indigo-600">AI</span> Marketing & IT
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#packages" className="hover:text-indigo-600">Packages</a>
            <a href="#owner" className="hover:text-indigo-600">Owner.com</a>
            <a href="#performance" className="hover:text-indigo-600">Performance</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700"
            >
              <Rocket className="w-4 h-4" /> Free Consult
            </a>
            <button
              className="md:hidden p-2 rounded-xl border hover:bg-slate-50"
              onClick={() => setOpen(!open)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm">
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#packages" onClick={() => setOpen(false)}>Packages</a>
              <a href="#owner" onClick={() => setOpen(false)}>Owner.com</a>
              <a href="#performance" onClick={() => setOpen(false)}>Performance</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-orange-50" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade(.05)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Grow Local Businesses with <span className="text-indigo-600">Smart Marketing</span> &{" "}
              <span className="text-orange-600">Simple Tech</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We build conversion-focused websites, run campaigns, and set up restaurant ordering & loyalty systems. 
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
                <Rocket className="w-5 h-5" /> Book a Free Consultation
              </a>
              <a href="#packages" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border hover:bg-slate-50">
                <BadgePercent className="w-5 h-5" /> See Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-4">For All Businesses</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>🌐 Website Design (3–5 pages)</li>
              <li>🛒 E-commerce / Booking integration</li>
              <li>📢 Social Media & Ads</li>
              <li>🔍 SEO & Google Business</li>
              <li>✉️ Email & SMS campaigns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Restaurants</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>📱 Branded App & Online Ordering</li>
              <li>📶 WiFi Marketing & Loyalty</li>
              <li>⭐ Review Management</li>
              <li>🎯 Promo Campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-slate-50 border-y py-16">
        <h2 className="text-3xl font-bold text-center">Packages</h2>
        <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="font-semibold">Bronze – Starter</h3>
            <p className="text-2xl font-bold">$499/mo</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Google & Yelp optimization</li>
              <li>8 social posts / month</li>
              <li>1 email campaign / month</li>
            </ul>
          </div>
          <div className="p-6 border-2 border-indigo-600 rounded-2xl bg-white shadow-md">
            <h3 className="font-semibold text-indigo-600">Silver – Growth</h3>
            <p className="text-2xl font-bold">$899/mo</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Everything in Bronze</li>
              <li>16 social posts / month</li>
              <li>Simple website included</li>
            </ul>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="font-semibold text-orange-600">Gold – Premium</h3>
            <p className="text-2xl font-bold">$1499/mo</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Advanced website</li>
              <li>Ads optimization</li>
              <li>Loyalty & WiFi marketing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PERFORMANCE PRICING */}
      <section id="performance" className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Performance-Based Pricing</h2>
          <p className="mt-2">
            $500 base + 10% of revenue growth. Example: Baseline $30k → $40k → You pay $1k bonus (+ base).
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-2 text-slate-600">We’d love to learn about your goals.</p>
          <ul className="mt-4 text-sm text-slate-700">
            <li>📞 (123) 456-7890</li>
            <li>✉️ info@technoaimarketing.com</li>
          </ul>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Techno AI Marketing & IT LLC
      </footer>
    </div>
  );
}
