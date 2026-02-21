import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const WhatWeDo = () => (
  <section className="section-padding bg-card">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              End-to-End <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Developing a digital experience or product from end to end requires input and expertise from a variety of roles. Our multidisciplinary teams unite to deliver well-rounded technology solutions that move your business goals forward.
            </p>
            <Link
              to="/services"
              className="inline-block gradient-primary-horizontal text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="gradient-primary rounded-2xl p-8 text-primary-foreground space-y-6">
            <h3 className="text-xl font-bold">Global Engineering Delivery</h3>
            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              Through our global Engineering delivery, we train our engineers at all levels on the newest technologies and implementation frameworks. With our Global Delivery engineering centers, we deploy the best teams for your business from anywhere in the world and deliver speed and quality at scale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Speed at Scale", "Global Teams", "Latest Tech", "Quality Assured"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhatWeDo;
