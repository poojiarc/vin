import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/data/siteData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    subService: "",
    message: "",
  });

  const selectedService = services.find((s) => s.title === formData.serviceType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.serviceType}%0ASub-Service: ${formData.subService}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918985685622?text=${text}`, "_blank");
  };

  const update = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value, ...(field === "serviceType" ? { subService: "" } : {}) }));

  return (
    <Layout>
      <section className="gradient-primary section-padding text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to find the right talent? Get in touch with us today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Phone</h4>
                        <a href="tel:8985685622" className="text-sm text-muted-foreground hover:text-primary">📱 8985685622</a><br/>
                        <a href="tel:+15559876543" className="text-sm text-muted-foreground hover:text-primary">📱 +1 555-987-6543</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Email</h4>
                        <a href="mailto:infoVinyxa@gmail.com" className="text-sm text-muted-foreground hover:text-primary">infoVinyxa@gmail.com</a><br/>
                        <a href="mailto:info@vinyxa.com" className="text-sm text-muted-foreground hover:text-primary">info@vinyxa.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">India Office</h4>
                        <p className="text-sm text-muted-foreground">Sai Surya Towers, 5th floor, Srinivas Nagar West, Hyderabad, TS 500038</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">USA Office</h4>
                        <p className="text-sm text-muted-foreground">245 Park Avenue, Suite 1200, New York, NY 10167</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Business Hours</h4>
                        <p className="text-sm text-muted-foreground">Monday – Friday: 24 Hours Available</p>
                        <p className="text-sm text-muted-foreground">Saturday: 9AM – 4PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Holiday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-5">
                <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Type</label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => update("serviceType", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {selectedService && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Sub Service</label>
                    <select
                      value={formData.subService}
                      onChange={(e) => update("subService", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a sub-service</option>
                      {selectedService.subServices.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-primary-horizontal text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
