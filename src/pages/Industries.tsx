// import Layout from "@/components/Layout";
// import { industries } from "@/data/siteData";
// import { Link } from "react-router-dom";
// import { Code, Heart, Landmark, Factory, Zap, ShoppingCart, Wifi, Plane } from "lucide-react";
// import ScrollReveal from "@/components/ScrollReveal";

// const iconMap: Record<string, React.ReactNode> = {
//   Code: <Code className="w-6 h-6" />,
//   Heart: <Heart className="w-6 h-6" />,
//   Landmark: <Landmark className="w-6 h-6" />,
//   Factory: <Factory className="w-6 h-6" />,
//   Zap: <Zap className="w-6 h-6" />,
//   ShoppingCart: <ShoppingCart className="w-6 h-6" />,
//   Wifi: <Wifi className="w-6 h-6" />,
//   Plane: <Plane className="w-6 h-6" />,
// };

// const Industries = () => (
//   <Layout>
//     <section className="gradient-primary section-padding text-primary-foreground">
//       <div className="container-custom text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
//         <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
//           Specialized staffing solutions across diverse industry verticals.
//         </p>
//       </div>
//     </section>

//     <section className="section-padding">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {industries.map((industry, i) => (
//             <ScrollReveal key={industry.slug} delay={i * 80}>
//               <Link
//                 to={`/industries/${industry.slug}`}
//                 className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
//               >
//                 <div className="gradient-primary p-6 text-primary-foreground">
//                   {iconMap[industry.icon]}
//                   <h3 className="font-semibold mt-3">{industry.title}</h3>
//                 </div>
//                 <div className="p-5">
//                   <p className="text-sm text-muted-foreground leading-relaxed">{industry.shortDescription}</p>
//                   <span className="inline-block mt-3 text-sm font-medium text-primary group-hover:underline">Learn More →</span>
//                 </div>
//               </Link>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default Industries;



import Layout from "@/components/Layout";
import { industries } from "@/data/siteData";
import { industryImages } from "@/data/imageMap"; // make sure this path matches
import { Link } from "react-router-dom";
import {
  Code,
  Heart,
  Landmark,
  Factory,
  Zap,
  ShoppingCart,
  Wifi,
  Plane,
} from "lucide-react";
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

const Industries = () => (
  <Layout>
    {/* Hero Section */}
    <section className="gradient-primary section-padding text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Industries We Serve
        </h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Specialized staffing solutions across diverse industry verticals.
        </p>
      </div>
    </section>

    {/* Industries Grid */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.slug} delay={i * 80}>
              <Link
                to={`/industries/${industry.slug}`}
                className="group relative block rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 h-[260px]"
              >
                {/* Background Image */}
                <img
                  src={industryImages[industry.slug]}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#254E8A]/90 via-[#3E6FAE]/80 to-[#6FA4DC]/60 opacity-90 group-hover:opacity-95 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
                  <div className="mb-3 bg-white/20 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-lg group-hover:bg-white/30 transition">
                    {iconMap[industry.icon]}
                  </div>

                  <h3 className="font-semibold text-lg mb-1">
                    {industry.title}
                  </h3>

                  <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                    {industry.shortDescription}
                  </p>

                  <span className="text-sm font-medium mt-2 underline underline-offset-4">
                    Learn More →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;