import { Button } from "@/components/ui/button";
import BrandMark from "@/components/BrandMark";
import { CheckCircle2, MapPin, Shield, Zap, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * BetLink Landing Page
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Clean, minimal design with generous whitespace
 * - Emerald green (#10B981) as primary color with warm cream neutrals
 * - Poppins Bold for headings, Inter for body text
 * - Asymmetric layouts and subtle animations
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-5">
          <div className="flex items-center gap-2">
            <BrandMark className="h-10 w-10 shrink-0" />
            <span className="font-bold text-xl text-foreground">BetLink</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663513268775/dfqkHbkHVqptg8FZdhQuco/betlink-hero-bg-Lk2uNHrMddZCFcNsb6rmtq.webp)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="inline-block mb-6 md:mb-8">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Welcome to BetLink
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 md:mb-8 text-foreground">
              Your Affordable Adventure Starts Here
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-xl leading-relaxed">
              Connect with verified, budget-friendly rooms and guesthouses across Ethiopia. Book instantly, explore fearlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 md:h-14 text-base md:text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Download Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground/5 font-semibold h-12 md:h-14 text-base md:text-lg rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 md:mt-16 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-white"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1000+</span> travelers already trust BetLink
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is BetLink Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What is BetLink?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BetLink is your trusted companion for finding affordable, verified short-stay accommodations across Ethiopia. Whether you're a student, worker, or transit passenger, we connect you with budget-friendly rooms, guesthouses, and pensions in seconds.
            </p>
          </div>

          {/* Three Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                icon: Shield,
                title: "Verified Listings",
                description: "Every property is verified for quality and authenticity. Stay with confidence.",
              },
              {
                icon: Zap,
                title: "Instant Booking",
                description: "Book your room in seconds. No complicated forms or waiting times.",
              },
              {
                icon: MapPin,
                title: "Map View",
                description: "Explore properties on an interactive map. Find the perfect location.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-secondary/30 rounded-xl border border-border hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-white via-secondary/20 to-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Choose BetLink?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for budget travelers who want quality without compromise.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                title: "Budget Filters",
                description: "Filter by price range and find accommodations that fit your budget perfectly.",
                icon: "💰",
              },
              {
                title: "Verified Reviews",
                description: "Read authentic reviews from real travelers who've stayed at each property.",
                icon: "⭐",
              },
              {
                title: "24/7 Support",
                description: "Our support team is always ready to help you with any questions.",
                icon: "🤝",
              },
              {
                title: "Secure Payments",
                description: "Safe and secure payment options with buyer protection.",
                icon: "🔒",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 p-6 md:p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase with Visual */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Explore Ethiopia Your Way
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From the bustling streets of Addis Ababa to the serene landscapes of the countryside, BetLink helps you find the perfect affordable stay wherever your journey takes you.
              </p>

              <ul className="space-y-4">
                {[
                  "Search by location, price, or amenities",
                  "Instant confirmation and booking",
                  "Flexible cancellation policies",
                  "Local host support in your language",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage:
                    'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663513268775/dfqkHbkHVqptg8FZdhQuco/betlink-features-bg-GCGpR7gF2awSYDywGJz84x.webp)',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Coming Soon */}
      <section id="download" className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              BetLink is launching soon on iOS and Android. Be among the first to experience affordable travel booking in Ethiopia.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                <Download className="w-5 h-5" />
                <span>Download on App Store</span>
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                <Download className="w-5 h-5" />
                <span>Get it on Play Store</span>
              </button>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get notified when we launch
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                />
                <Button
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-lg px-6"
                >
                  Notify
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                  <BrandMark className="h-10 w-10 shrink-0" />
                <span className="font-bold text-lg text-foreground">BetLink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Affordable short-stay accommodation across Ethiopia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 BetLink. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
