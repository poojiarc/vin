import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Users, Award, Globe, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We are committed to connecting top talent with leading organizations worldwide." },
  { icon: Eye, title: "Visionary", description: "We envision a world where every business has access to the best talent, regardless of location." },
  { icon: Users, title: "People-First", description: "Our success is built on relationships — with our clients, candidates, and team members." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in everything we do, from sourcing to placement." },
  { icon: Globe, title: "Global Perspective", description: "Our global reach enables us to serve clients and candidates across continents." },
  { icon: TrendingUp, title: "Results-Oriented", description: "We measure our success by the success of our clients and the careers we help build." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-primary section-padding text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Vinyxa</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Your trusted partner in staffing and workforce solutions.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-card">
      <div className="container-custom max-w-4xl">
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vinyxa Softwares was founded with a clear mission: to bridge the gap between exceptional talent and forward-thinking organizations. We recognized that businesses often struggle to find the right people, while skilled professionals seek opportunities that match their expertise and aspirations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve clients across multiple industries including IT, healthcare, engineering, pharmaceutical, aerospace, and federal government sectors. Our comprehensive staffing solutions cover everything from temporary placements to permanent hires, payroll management to bench sales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As your trusted partner, we measure our success based on your results. We leverage the latest technologies, tools and frameworks for collaboration to ensure that our engagements are transparent and instantly traceable from anywhere in the world.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
