import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { services } from "@/data/siteData";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
          <Link to="/services" className="text-primary mt-4 inline-block">Back to Services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Banner */}
      <section className="gradient-primary section-padding text-primary-foreground">
        <div className="container-custom">
          <div className="flex gap-3 mb-4">
            <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">Home</Link>
            <span className="text-primary-foreground/50">/</span>
            <Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">Services</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-sm">{service.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.subServices.map((sub) => (
                <div key={sub} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{sub}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link to="/services" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <Link to="/contact" className="gradient-primary-horizontal text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
