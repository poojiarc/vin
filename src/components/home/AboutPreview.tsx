import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const AboutPreview = () => (
  <section className="section-padding bg-card">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Vinyxa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Trusted <span className="gradient-text">Staffing Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Vinyxa Softwares, we are committed to delivering world-class staffing and workforce solutions. With expertise spanning IT, healthcare, engineering, and more, we connect organizations with exceptional talent that drives results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to bridge the gap between talented professionals and forward-thinking organizations, creating partnerships that fuel growth and innovation.
            </p>
            <Link
              to="/about"
              className="inline-block gradient-primary-horizontal text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2"
            >
              Read More
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Placements" },
              { number: "12+", label: "Industries" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutPreview;
