import { Database, Upload, RefreshCw, CheckCircle, MessageSquare, MapPin, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const syncFlow = [
    {
      icon: Database,
      title: "Local Storage",
      description: "Visit data, vitals, and notes saved instantly to IndexedDB — no waiting for network",
    },
    {
      icon: RefreshCw,
      title: "Metadata Sync",
      description: "When online, metadata (text data) syncs first — fast and lightweight",
    },
    {
      icon: Upload,
      title: "Attachment Upload",
      description: "Photos and audio queue in background, upload when bandwidth available",
    },
    {
      icon: CheckCircle,
      title: "Server Reconciliation",
      description: "Server validates, resolves conflicts (server-wins for safety), confirms sync",
    },
  ];

  const safetyFlow = [
    {
      step: "1",
      title: "Panic Triggered",
      description: "ASHA long-presses safety button — haptic feedback only, no UI",
    },
    {
      step: "2",
      title: "Location Captured",
      description: "GPS coordinates, nearby landmarks, and timestamp recorded",
    },
    {
      step: "3",
      title: "Encrypted Alert",
      description: "Alert sent to trusted contacts, supervisor, district authorities, police within radius",
    },
    {
      step: "4",
      title: "Evidence Queue",
      description: "If possible, photo/audio evidence uploaded to secure vault",
    },
    {
      step: "5",
      title: "SMS Fallback",
      description: "If no data, SMS with location and incident code sent to authorities",
    },
  ];

  const glossary = [
    { term: "Offline-First", definition: "Architecture where local data is primary; sync is secondary" },
    { term: "Delta Sync", definition: "Only changes (deltas) are synchronized, not full datasets" },
    { term: "Attachment Queue", definition: "Large files (photos/audio) queued for later upload to save bandwidth" },
    { term: "SMS Fallback", definition: "Text messages used when data network unavailable" },
    { term: "MLC-Ready", definition: "Reports formatted per Medico-Legal Case requirements for legal proceedings" },
    { term: "Conflict Resolution", definition: "Logic to handle simultaneous edits (server-wins policy for safety)" },
  ];

  return (
    <div className="w-full py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How SAMBHAV Works</h1>
          <p className="text-xl text-muted-foreground">
            Offline-first architecture with intelligent sync and safety-first design
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-strong flex items-center justify-center scale-in">
            <div className="text-center space-y-4 p-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Video: SAMBHAV in Action</h3>
              <p className="text-muted-foreground">Upload coming soon</p>
              <p className="text-sm text-muted-foreground/70">
                This section will feature a video walkthrough showing real-world usage
              </p>
            </div>
          </div>
        </div>

        {/* Sync Flow */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sync Architecture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How data flows from field to server and back
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {syncFlow.map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-medium transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/10">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
                {index < syncFlow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Flow */}
        <section className="mb-20 bg-gradient-to-br from-safety/5 to-warning/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-safety">Safety Alert Flow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How the panic button protects ASHA workers in emergency situations
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {safetyFlow.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-background/80 backdrop-blur rounded-lg p-6 shadow-soft fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0 w-12 h-12 bg-safety/10 rounded-full flex items-center justify-center text-safety font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 max-w-4xl mx-auto bg-warning/10 border border-warning/30 rounded-lg p-6">
            <MapPin className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-warning mb-2">SMS Fallback Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                When data network is unavailable, SMS with incident code and GPS coordinates is automatically sent to pre-configured emergency contacts and local police station
              </p>
            </div>
          </div>
        </section>

        {/* Conflict Handling */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conflict Resolution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What happens when the same data is edited offline by multiple users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Patient Records</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Last-Write-Wins:</strong> Most recent update takes precedence. Users notified of conflict via toast message.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-safety/30">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-safety/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-safety" />
                </div>
                <h3 className="text-xl font-bold">Safety Incidents</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Server-Wins:</strong> Safety data never overwritten by local edits. All versions preserved for audit.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Glossary */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Glossary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key terms explained in simple language
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {glossary.map((item, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <h3 className="font-bold text-primary mb-2">{item.term}</h3>
                <p className="text-sm text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
