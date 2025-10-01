import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Mic, Languages } from "lucide-react";
import { useState } from "react";
import sambhavLogo from "@/assets/sambhav-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const languages = [
    { code: "en" as Language, label: "English" },
    { code: "hi" as Language, label: "हिंदी" },
    { code: "pa" as Language, label: "ਪੰਜਾਬੀ" },
    { code: "bn" as Language, label: "বাংলা" },
    { code: "ta" as Language, label: "தமிழ்" },
    { code: "te" as Language, label: "తెలుగు" }
  ];

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/features", label: t("features") },
    { path: "/how-it-works", label: t("howItWorks") },
    { path: "/dashboards", label: t("roleDashboards") },
    { path: "/contact", label: t("contact") },
  ];

  const handleLanguageChange = (lang: { code: Language; label: string }) => {
    setLanguage(lang.code);
    toast.success(`Language changed to ${lang.label}`);
  };

  const handleVoiceNavigation = () => {
    setIsListening(true);
    toast.info("Voice navigation activated. Say 'Home', 'Features', 'Dashboards', etc.");
    
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      toast.success("Voice command processed");
    }, 3000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={sambhavLogo} alt="Sambhav Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button
                variant="ghost"
                className={
                  isActive(link.path)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-accent/50"
                }
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Voice Nav + Language + CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="touch-target"
            onClick={handleVoiceNavigation}
          >
            <Mic className={`h-5 w-5 ${isListening ? 'text-primary animate-pulse' : ''}`} />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="touch-target">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={language === lang.code ? "bg-accent" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/auth">
            <Button variant="outline" className="touch-target">
              {t("signIn")}
            </Button>
          </Link>
          <Link to="/auth?mode=signup">
            <Button className="touch-target bg-primary hover:bg-primary-dark text-primary-foreground">
              {t("getStarted")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden touch-target"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start touch-target ${
                    isActive(link.path) ? "bg-accent text-accent-foreground font-medium" : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full touch-target">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full touch-target bg-primary hover:bg-primary-dark text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
