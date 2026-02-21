import { Link } from "react-router-dom";
import { industries } from "@/data/siteData";
import { Code, Heart, Landmark, Factory, Zap, ShoppingCart, Wifi, Plane } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
};

const IndustriesSection = () => (
  <section className="section-padding bg-card">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Specialized staffing solutions across diverse industry verticals.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, i) => (
          <ScrollReveal key={industry.slug} delay={i * 80}>
            <Link
              to={`/industries/${industry.slug}`}
              className="group block bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="gradient-primary p-6 text-primary-foreground">
                {iconMap[industry.icon]}
                <h3 className="font-semibold mt-3">{industry.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.shortDescription}
                </p>
                <span className="inline-block mt-3 text-sm font-medium text-primary group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
