import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import sambhavLogo from "@/assets/sambhav-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        {/* Metrics & Pilot Block - Informational Only */}
        <div className="mb-12 p-6 bg-background rounded-lg border shadow-soft">
          <h3 className="text-lg font-bold mb-4 text-foreground">Pilots & Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">ASHAs Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Offline Sync Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">&lt;12 min</div>
              <div className="text-sm text-muted-foreground">Avg. Incident Response</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={sambhavLogo} alt="Sambhav" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              गाँव गाँव तक सेहत — Offline-first EHR & ASHA safety platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/dashboards" className="text-muted-foreground hover:text-primary transition-colors">
                  Role Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:support@sambhav.health" className="text-muted-foreground hover:text-primary transition-colors">
                  support@sambhav.health
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Sambhav. All data encrypted and anonymized. MLC-compliant incident reporting.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
