import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import sambhavLogo from "@/assets/sambhav-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="container py-12">
        {/* Metrics & Pilot Block - Informational Only */}
        <div className="mb-12 p-6 bg-white/10 rounded-lg border border-white/20 shadow-soft">
          <h3 className="text-lg font-bold mb-4 text-white">Pilots & Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-white/70">ASHAs Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-1">98%</div>
              <div className="text-sm text-white/70">Offline Sync Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">&lt;12 min</div>
              <div className="text-sm text-white/70">Avg. Incident Response</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={sambhavLogo} alt="SAMBHAV" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-white/70">
              गाँव गाँव तक सेहत — Offline-first EHR & ASHA safety platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/70 hover:text-primary transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/dashboards" className="text-white/70 hover:text-primary transition-colors">
                  Role Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-white/70 hover:text-primary transition-colors">
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:support@sambhav.health" className="text-white/70 hover:text-primary transition-colors">
                  support@sambhav.health
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/70 hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-white/70">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2025 SAMBHAV. All data encrypted and anonymized. MLC-compliant incident reporting.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
