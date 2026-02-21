import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/vinyxa-logo.png";
import { services, industries } from "@/data/siteData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services", dropdown: "services" },
    { label: "Industries", path: "/industries", dropdown: "industries" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Vinyxa Softwares" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.dropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path || (item.dropdown && location.pathname.startsWith(item.path))
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.dropdown ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown Panel */}
              {item.dropdown && activeDropdown === item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-card rounded-2xl shadow-xl border border-border w-[320px] max-h-[70vh] overflow-y-auto animate-fade-in">
                    <div className="p-3">
                      {(item.dropdown === "services" ? services : industries).map((entry) => (
                        <Link
                          key={entry.slug}
                          to={`/${item.dropdown === "services" ? "services" : "industries"}/${entry.slug}`}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {entry.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="gradient-primary-horizontal text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <nav className="md:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.dropdown ? null : item.dropdown!)}
                      className={`w-full flex items-center justify-between py-3 px-2 text-sm font-medium rounded-lg ${
                        location.pathname.startsWith(item.path) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.dropdown ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === item.dropdown && (
                      <div className="pl-4 pb-2 animate-fade-in">
                        <Link
                          to={item.path}
                          className="block py-2 px-3 text-sm font-semibold text-primary hover:bg-secondary rounded-lg"
                        >
                          View All {item.label}
                        </Link>
                        {(item.dropdown === "services" ? services : industries).map((entry) => (
                          <Link
                            key={entry.slug}
                            to={`/${item.dropdown === "services" ? "services" : "industries"}/${entry.slug}`}
                            className="block py-2 px-3 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                          >
                            {entry.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-2 text-sm font-medium rounded-lg ${
                      location.pathname === item.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="gradient-primary-horizontal text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
