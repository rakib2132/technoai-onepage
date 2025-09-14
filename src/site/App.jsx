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

// Simple stagger helpers
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function OnePageSite() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-indigo-200/60">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">
            Techno <span className="text-indigo-600">AI</span> Marketing & IT
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#packages" className="hover:text-indigo-600">Packages</a>
            <a href="#owner" className="hover:text-indigo-600">Owner.com</a>
            <a href="#performance" className="hover:text-indigo-600">Performance</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700"
          >
            <Rocket className="w-4 h-4" /> Free Consult
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl border hover:bg-slate-50"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className={`w-5 h-5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* Mobile menu (shown when open) */}
        {open && (
          <div id="mobile-menu" className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
              {[
                ["#services", "Services"],
                ["#packages", "Packages"],
                ["#owner", "Owner.com"],
                ["#performance", "Performance"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="py-2 hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700"
              >
                <Rocket className="w-4 h-4" /> Free Consult
              </a>
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
              We build conversion-focused websites, run social & search campaigns, and set up restaurant ordering & loyalty systems. One team, end-to-end growth.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow hover:shadow-md hover:bg-indigo-700">
                <Rocket className="w-5 h-5" /> Book a Free Consultation
              </a>
              <a href="#packages" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border hover:bg-slate-50">
                <BadgePercent className="w-5 h-5" /> See Packages
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">Serving restaurants and small businesses • Greater Philadelphia</p>
          </motion.div>

          <motion.div {...fade(.15)} className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider/relaxed opacity-90">Marketing</p>
                  <h3 className="font-bold text-lg">Social + Google</h3>
                </div>
                <Megaphone className="w-10 h-10 self-end opacity-90" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-90">Web</p>
                  <h3 className="font-bold text-lg">Fast Websites</h3>
                </div>
                <Globe className="w-10 h-10 self-end opacity-90" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-90">Restaurants</p>
                  <h3 className="font-bold text-lg">Online Ordering</h3>
                </div>
                <Coffee className="w-10 h-10 self-end opacity-90" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-500 text-white p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-90">Performance</p>
                  <h3 className="font-bold text-lg">We Win When You Win</h3>
                </div>
                <LineChart className="w-10 h-10 self-end opacity-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div {...fade(.05)}>
            <h2 className="text-3xl font-bold">
              Services for <span className="text-indigo-600">All Small Businesses</span>
            </h2>
            <p className="mt-2 text-slate-600">Simple websites and growth marketing that just work.</p>
            <ul className="mt-6 space-y-3">
              {[
                [Globe, "Website Design (3–5 pages)", "Home, Services, About, Contact, blog"],
                [Store, "E-commerce / Booking", "Shopify, Stripe, Calendars"],
                [Megaphone, "Social Media & Ads", "FB/IG/TikTok posts + Google & Meta Ads"],
                [BadgePercent, "SEO & Google Business", "Rank for 'near me' searches"],
                [Receipt, "Email & SMS", "Promos, newsletters, automations"],
              ].map(([Icon, title, sub], i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-slate-600">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fade(.1)}>
            <h2 className="text-3xl font-bold">
              Services for <span className="text-orange-600">Restaurants</span>
            </h2>
            <p className="mt-2 text-slate-600">Owner.com setup, loyalty, reviews, and repeat sales.</p>
            <ul className="mt-6 space-y-3">
              {[
                [Smartphone, "Branded App & Online Ordering", "Pickup, delivery, reservations"],
                [Wifi, "WiFi Marketing & Loyalty", "Grow your list with guest WiFi"],
                [ShieldCheck, "Reputation Management", "Google/Yelp review responses"],
                [Megaphone, "Promo Campaigns", "Happy hour, brunch, events"],
              ].map(([Icon, title, sub], i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-slate-600">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center">Package Options</h2>
          <p className="text-slate-600 text-center mt-1">Transparent pricing you can tailor.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Bronze */}
            <div className="rounded-2xl bg-white shadow-sm p-6 border">
              <p className="text-sm font-medium text-amber-600">Bronze — Starter</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $499<span className="text-base font-normal">/mo</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Google Business & Yelp optimization",
                  "8 social posts / month",
                  "1 email campaign / month",
                  "1 flyer design / month",
                  "Monthly performance report",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Silver */}
            <div className="rounded-2xl bg-white shadow-lg p-6 border-2 border-indigo-600 relative">
              <span className="absolute -top-3 right-6 text-xs bg-indigo-600 text-white px-2 py-1 rounded-full shadow">
                Most Popular
              </span>
              <p className="text-sm font-medium text-indigo-600">Silver — Growth</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $899<span className="text-base font-normal">/mo</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Everything in Bronze",
                  "16 social posts / month",
                  "Ads setup & management (spend extra)",
                  "Simple website (menu/contact/reservations)",
                  "Review monitoring & response",
                  "2 email/SMS campaigns / month",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Gold */}
            <div className="rounded-2xl bg-white shadow-sm p-6 border">
              <p className="text-sm font-medium text-orange-600">Gold — Premium</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $1,499<span className="text-base font-normal">/mo</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Advanced website (ordering, reservations)",
                  "Google + FB/IG ads with optimization",
                  "Loyalty & WiFi marketing setup",
                  "Weekly report + strategy call",
                  "Unlimited flyer/menu updates",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Packages */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white shadow-sm p-6 border">
              <p className="text-sm font-medium text-slate-700">Starter (All Businesses)</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $499 <span className="text-base font-normal">one-time</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Website up to 3 pages", "Google Business setup", "Basic SEO"].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm p-6 border">
              <p className="text-sm font-medium text-slate-700">Growth (All Businesses)</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $699<span className="text-base font-normal">/mo</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["5-page site + blog", "12 social posts / month", "1 ad campaign setup", "Monthly report"].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm p-6 border">
              <p className="text-sm font-medium text-slate-700">Premium (All Businesses)</p>
              <h3 className="text-3xl font-extrabold mt-1">
                $1,199<span className="text-base font-normal">/mo</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["E-commerce or booking system", "20 posts + ad management", "2 email campaigns / month", "SEO + reputation mgmt"].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER.COM */}
      <section id="owner" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade(.05)}>
            <h2 className="text-3xl font-bold">
              Restaurant Websites & Apps with <span className="text-orange-600">Owner.com</span>
            </h2>
            <p className="mt-2 text-slate-600">
              Reduce third-party fees and own your customer data with direct ordering, reservations, and rewards.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Online ordering (pickup & delivery)",
                "Table reservations",
                "Loyalty & rewards",
                "Email/SMS built-in",
                "POS & payments integration",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-emerald-600" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade(.1)} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-orange-100 p-4">
                <p className="font-semibold">Branded App</p>
                <p className="text-sm text-slate-600">Keep guests coming back.</p>
              </div>
              <div className="rounded-2xl bg-indigo-100 p-4">
                <p className="font-semibold">Direct Orders</p>
                <p className="text-sm text-slate-600">More profit per sale.</p>
              </div>
              <div className="rounded-2xl bg-emerald-100 p-4">
                <p className="font-semibold">Loyalty & WiFi</p>
                <p className="text-sm text-slate-600">Grow your list fast.</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="font-semibold">Reviews</p>
                <p className="text-sm text-slate-600">Respond & shine.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERFORMANCE PRICING */}
      <section id="performance" className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade(.05)}>
            <h2 className="text-3xl font-bold">Performance-Based Pricing</h2>
            <p className="mt-3 text-indigo-100">
              We tie our success to yours. Keep a small base plan to cover tools & time, then share a percent of growth above your baseline.
            </p>
            <ul className="mt-6 space-y-2 text-indigo-100 text-sm">
              <li className="flex gap-2">
                <DollarSign className="w-4 h-4 mt-0.5" /> Base fee suggestion: <b>$500 / month</b>
              </li>
              <li className="flex gap-2">
                <LineChart className="w-4 h-4 mt-0.5" /> Bonus: <b>10% of monthly revenue increase</b> over baseline
              </li>
              <li className="flex gap-2">
                <CalendarDays className="w-4 h-4 mt-0.5" /> Month-to-month, cancel anytime with 30-days notice
              </li>
            </ul>
            <div className="mt-4 text-sm text-indigo-100/90">
              <p>
                <b>Example:</b> Baseline $30k → New $40k → Growth $10k → Bonus $1k (+ base)
              </p>
            </div>
          </motion.div>
          <motion.div {...fade(.1)} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
            <h3 className="font-semibold">What we track</h3>
            <ul className="mt-3 space-y-2 text-indigo-100 text-sm">
              {[
                "POS revenue reports",
                "Online orders through website/app",
                "Coupon codes & campaign UTMs",
                "Ad manager conversions",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-4 h-4 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">What Clients Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            "Filled our brunch hours in 3 weeks.",
            "Clean website, phones ringing again.",
            "Online orders now 40% of sales.",
          ].map((quote, i) => (
            <div key={i} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-700">“{quote}”</p>
              <p className="mt-3 text-sm text-slate-500">— Local Business Owner</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Book a Free Consultation</h2>
            <p className="mt-2 text-slate-600">
              Tell us about your goals. We'll send a quick plan with timeline & pricing.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-indigo-600" /> (123) 456-7890
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-indigo-600" /> info@technoaimarketing.com
              </li>
            </ul>
          </div>

          {/* Working contact form (native POST to Formspree) */}
          <form
            action="https://formspree.io/f/xgvlbvbv"
            method="POST"
            className="rounded-2xl bg-white p-6 shadow-sm border"
          >
            {/* Subject / metadata */}
            <input type="hidden" name="_subject" value="New Free Consultation Request" />
            <input type="hidden" name="_from" value="Techno AI Marketing & IT Website" />
            {/* If you want to redirect after submit, set your full URL here:
                <input type="hidden" name="_next" value="https://YOUR-DOMAIN.com/thanks" /> */}

            {/* Honeypot (spam protection) */}
            <input type="text" name="bot-field" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full name"
                className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                name="business"
                placeholder="Business name"
                className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
              />
              <select
                name="service"
                className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
                required
              >
                <option value="">Service interest — select</option>
                <option>Restaurant (Owner.com website & app)</option>
                <option>Website (non-restaurant)</option>
                <option>Social & Ads</option>
                <option>SEO & Google Business</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Goals / questions"
                className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700"
            >
              Send
            </button>

            <p className="mt-2 text-xs text-slate-500">
              By submitting, you agree to be contacted about your inquiry.
            </p>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Techno AI Marketing & IT LLC • Malvern, PA
      </footer>
    </div>
  );
}
