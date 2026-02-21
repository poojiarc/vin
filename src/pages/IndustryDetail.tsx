import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { industries } from "@/data/siteData";
import { industryImages } from "@/data/imageMap";
import { ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">Industry not found</h1>
          <Link to="/industries" className="text-primary mt-4 inline-block">Back to Industries</Link>
        </div>
      </Layout>
    );
  }

  const bannerImage = industryImages[industry.slug];

  return (
    <Layout>
      {/* Banner with image */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden">
        {bannerImage && (
          <img src={bannerImage} alt={industry.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container-custom h-full flex flex-col justify-end pb-10">
          <div className="flex gap-3 mb-4">
            <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">Home</Link>
            <span className="text-primary-foreground/50">/</span>
            <Link to="/industries" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">Industries</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-sm text-primary-foreground">{industry.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{industry.title}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">{industry.shortDescription}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">{industry.description}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <ScrollReveal delay={100}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" /> Industry Challenges
                </h3>
                <ul className="space-y-3">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> How Vinyxa Helps
                </h3>
                <ul className="space-y-3">
                  {industry.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link to="/industries" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Industries
            </Link>
            <Link to="/contact" className="gradient-primary-horizontal text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryDetail;
