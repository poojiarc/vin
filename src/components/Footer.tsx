import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/vinyxa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Vinyxa Softwares" className="h-10" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connecting businesses with result-oriented talent across IT, healthcare, engineering, and more.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/vinyxa_softwares?igsh=MWE0aG5wMjNtbmxtbw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Industries", path: "/industries" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India Office */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">India Office</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Sai Surya Towers, 5th floor, Srinivas Nagar West, Hyderabad, TS 500038</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:8985685622" className="hover:text-primary transition-colors">8985685622</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:infoVinyxa@gmail.com" className="hover:text-primary transition-colors">infoVinyxa@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* USA Office */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">USA Office</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>245 Park Avenue, Suite 1200, New York, NY 10167</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:+15559876543" className="hover:text-primary transition-colors">+1 555-987-6543</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@vinyxa.com" className="hover:text-primary transition-colors">info@vinyxa.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6">
        <div className="container-custom text-center space-y-1">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by <a href="https://staffarc.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">StaffArc</a>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Vinyxa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
