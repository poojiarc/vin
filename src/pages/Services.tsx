import Layout from "@/components/Layout";
import { services } from "@/data/siteData";
import { Link } from "react-router-dom";
import { Monitor, Building2, Heart, Wrench, FlaskConical, Plane, Landmark, Calculator, Handshake, TrendingUp, FileCheck, LogOut } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Plane: <Plane className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  FileCheck: <FileCheck className="w-8 h-8" />,
  LogOut: <LogOut className="w-8 h-8" />,
};

const Services = () => (
  <Layout>
    <section className="gradient-primary section-padding text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Comprehensive staffing and workforce management solutions tailored to your business needs.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 50}>
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <span className="text-sm font-medium text-primary group-hover:underline">Learn More →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
