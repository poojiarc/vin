// import { Link } from "react-router-dom";
// import { services } from "@/data/siteData";
// import { Monitor, Building2, Heart, Wrench, FlaskConical, Plane, Landmark, Calculator, Handshake, TrendingUp, FileCheck, LogOut } from "lucide-react";
// import ScrollReveal from "@/components/ScrollReveal";

// const iconMap: Record<string, React.ReactNode> = {
//   Monitor: <Monitor className="w-8 h-8" />,
//   Building2: <Building2 className="w-8 h-8" />,
//   Heart: <Heart className="w-8 h-8" />,
//   Wrench: <Wrench className="w-8 h-8" />,
//   FlaskConical: <FlaskConical className="w-8 h-8" />,
//   Plane: <Plane className="w-8 h-8" />,
//   Landmark: <Landmark className="w-8 h-8" />,
//   Calculator: <Calculator className="w-8 h-8" />,
//   Handshake: <Handshake className="w-8 h-8" />,
//   TrendingUp: <TrendingUp className="w-8 h-8" />,
//   FileCheck: <FileCheck className="w-8 h-8" />,
//   LogOut: <LogOut className="w-8 h-8" />,
// };

// const ServicesSection = () => (
//   <section className="section-padding">
//     <div className="container-custom">
//       <ScrollReveal>
//         <div className="text-center mb-12">
//           <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Comprehensive staffing and workforce management solutions tailored to your business needs.
//           </p>
//         </div>
//       </ScrollReveal>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {services.map((service, i) => (
//           <ScrollReveal key={service.slug} delay={i * 50}>
//             <Link
//               to={`/services/${service.slug}`}
//               className="group block bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
//             >
//               <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
//                 {iconMap[service.icon]}
//               </div>
//               <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 {service.shortDescription}
//               </p>
//             </Link>
//           </ScrollReveal>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection;


import { Link } from "react-router-dom";
import { services } from "@/data/siteData";
import { serviceImages } from "@/data/imageMap"; // make sure path is correct
import {
  Monitor,
  Building2,
  Heart,
  Wrench,
  FlaskConical,
  Plane,
  Landmark,
  Calculator,
  Handshake,
  TrendingUp,
  FileCheck,
  LogOut,
} from "lucide-react";
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

const ServicesSection = () => (
  <section className="section-padding bg-[#F4F8FD]">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Comprehensive staffing and workforce management solutions tailored to your business needs.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.slug} delay={i * 50}>
            <Link
              to={`/services/${service.slug}`}
              className="group relative block rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 h-[260px]"
            >
              {/* Background Image */}
              <img
                src={serviceImages[service.slug]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Vinyxa Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#254E8A]/90 via-[#3E6FAE]/80 to-[#6FA4DC]/60 opacity-90 group-hover:opacity-95 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-white/30 transition">
                  {iconMap[service.icon]}
                </div>

                <h3 className="font-semibold text-lg mb-1">
                  {service.title}
                </h3>

                <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;