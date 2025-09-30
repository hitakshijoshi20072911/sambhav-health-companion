import { Shield, Database, RefreshCw, Video, Package, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeviceMockup from "@/components/DeviceMockup";

const Features = () => {
  const features = [
    {
      id: "ehr",
      icon: Database,
      title: "Core EHR",
      description: "Comprehensive patient records with visit history, vitals, medications, and immunization tracking",
      benefits: [
        "Voice-to-text visit notes for faster documentation",
        "Photo attachment for visual records (wounds, rashes, etc.)",
        "Structured checklists for ANC, immunizations, fever, NCD",
        "Offline patient search and queue management",
        "Automatic reminders for follow-up visits and vaccinations",
      ],
      mockupImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "safety",
      icon: Shield,
      title: "Safety Module (Women Safety)",
      description: "Persistent panic button for ASHA workers with silent alert capabilities",
      benefits: [
        "Short tap: Safety menu with quick-call buttons (police, NGO, family)",
        "Long press: Silent panic — sends encrypted location & evidence to trusted contacts",
        "Automated alerts to supervisor, district authorities, and nearby police",
        "Anonymous reporting option with haptic-only confirmation",
        "MLC-ready PDF generation with timestamp, location, and evidence",
      ],
      mockupImage: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "sync",
      icon: RefreshCw,
      title: "Sync & Offline",
      description: "Delta sync architecture with metadata-first, attachment-later strategy",
      benefits: [
        "Local IndexedDB/RxDB for instant offline access",
        "Metadata syncs first (visits, vitals), attachments queue in background",
        "Conflict resolution with server-wins policy for safety incidents",
        "SMS fallback for critical alerts when data unavailable",
        "Visual sync indicators: green (online), orange (pending), red (offline)",
      ],
      mockupImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "teleconsult",
      icon: Video,
      title: "Teleconsult",
      description: "Enable remote consultations between ASHAs, ANMs, and PHC doctors",
      benefits: [
        "WebRTC video/audio calls with low-bandwidth optimization",
        "Screen sharing for reviewing patient records together",
        "Call recording for medical-legal documentation (with consent)",
        "SMS notification fallback when push unavailable",
        "Scheduled teleconsult queue visible to all parties",
      ],
      mockupImage: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "stock",
      icon: Package,
      title: "Stock Management",
      description: "Track medicine inventory from PHC to ASHA with expiry alerts",
      benefits: [
        "Real-time stock levels visible to pharmacist, ANM, ASHA",
        "Expiry date alerts with 30/60/90 day warnings",
        "ASHA dispensation logs sync to central inventory",
        "Low-stock SMS alerts to ANM and PHC doctor",
        "Monthly consumption reports for supply chain planning",
      ],
      mockupImage: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "admin",
      icon: Settings,
      title: "Admin PWA",
      description: "Supervisor dashboard for device health, incident management, and KPIs",
      benefits: [
        "Device health map: last sync, pending items, offline duration",
        "Incident queue with priority triage (high/medium/low severity)",
        "KPI dashboard: daily active ASHAs, sync success rate, response times",
        "Bulk device registration and configuration push",
        "Exportable reports for government audits and MLC compliance",
      ],
      mockupImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features Built for the Field</h1>
          <p className="text-xl text-muted-foreground">
            Every feature designed with offline-first, low-literacy, and touch-friendly principles
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <section
              key={feature.id}
              id={feature.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Device Mockup */}
              <div className="flex-1 w-full max-w-md">
                <DeviceMockup
                  imageSrc={feature.mockupImage}
                  alt={`${feature.title} interface`}
                  showStatus
                  status={feature.id === "sync" ? "syncing" : "online"}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                
                <p className="text-lg text-muted-foreground">{feature.description}</p>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-success text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="mt-4 touch-target">
                  Learn More
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
