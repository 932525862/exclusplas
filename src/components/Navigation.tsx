import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/assets/лого.png";

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.services"), path: "/services" },
  ];

  const languages = [
    { code: 'uz', name: "O'zbekcha" },
    { code: 'ru', name: "Русский" },
    { code: 'en', name: "English" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#015436] backdrop-blur-sm shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Exclusive Plast Logo" className="h-12 w-auto" />
            <div
              className="text-2xl font-bold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(#FFD700,#FFD700)" }}
            >
              EXCLUSIVE PLAST
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-[#FFD700] ${
                  isActive(link.path)
                    ? "text-[#FFD700] border-b-2"
                    : "text-primary-foreground"
                }`}
                style={isActive(link.path) ? { borderColor: "#FFD700" } : {}}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:opacity-80"
                  style={{ backgroundColor: "#FFD700", color: "black" }}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? "bg-[#FFD700]/20" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <Button
              asChild
              className="hover:opacity-80"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              <a href="#contact">{t("nav.contact")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-[#FFD700]"
                    : "text-primary-foreground hover:text-[#FFD700]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile language buttons */}
            <div className="flex gap-2 pt-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  size="sm"
                  onClick={() => changeLanguage(lang.code)}
                  className="flex-1 hover:opacity-80"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "black",
                    border: "none"
                  }}
                >
                  {lang.name}
                </Button>
              ))}
            </div>

            {/* Mobile Contact */}
            <Button
              asChild
              className="w-full hover:opacity-80"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                {t("nav.contact")}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
