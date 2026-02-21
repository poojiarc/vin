import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Connecting Businesses with Top Talent
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
              Our organization focuses on connecting businesses with result-oriented sales talent. We actively source, evaluate, and represent skilled sales professionals who possess proven expertise in lead generation, client acquisition, and revenue development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-card text-primary px-6 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
