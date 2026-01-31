import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoIcon from "../../assets/Logo.png";

const navItems = [
  { label: "Collection", id: "showcase" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Videos", id: "presentation" },
  { label: "Technology", id: "technology" },
  { label: "Partnership", id: "collaboration" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="cursor-pointer hover:text-gray-900 flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={logoIcon} alt="Miftari Optical" className="h-10 w-10" />
              <span className="font-bold tracking-tight text-lg sm:text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Miftari Optical
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer hover:text-teal-600 text-sm text-gray-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:krenar@optikamiftari.com"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-teal-700 hover:to-cyan-700 transition-all shadow-sm hover:shadow-md"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-100">
              <div className="max-w-[1400px] mx-auto px-6 py-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors font-medium"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    href="mailto:krenar@optikamiftari.com"
                    className="mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-3 rounded-xl font-medium text-center hover:from-teal-700 hover:to-cyan-700 transition-all"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
