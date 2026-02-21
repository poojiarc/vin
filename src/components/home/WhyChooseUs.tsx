import { Shield, Globe, Users, Award, Clock, Headphones } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Shield, title: "Trusted Partner", description: "We measure our success based on your results." },
  { icon: Globe, title: "Global Reach", description: "Deploy the best teams from anywhere in the world." },
  { icon: Users, title: "Expert Teams", description: "Multidisciplinary teams for well-rounded solutions." },
  { icon: Award, title: "Quality Assured", description: "Rigorous vetting and quality assurance processes." },
  { icon: Clock, title: "Fast Turnaround", description: "Quick placement with minimal time-to-hire." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance for all your needs." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Vinyxa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            As your trusted partner, we measure our success based on your results. We leverage the latest technologies, tools and frameworks for collaboration to ensure that our engagements are transparent and instantly traceable from anywhere in the world.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full gradient-primary mx-auto flex items-center justify-center text-primary-foreground mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
