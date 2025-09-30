import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ValuePropCard from "@/components/ValuePropCard";
import { ArrowRight, Shield, Users, Database, Activity } from "lucide-react";
import sambhavLogo from "@/assets/sambhav-logo.png";

const Index = () => {
  const roles = [
    {
      title: "ASHA Worker",
      description: "Voice-enabled visit tracking, offline-first patient management, and persistent safety button",
      icon: "👩‍⚕️",
      link: "/dashboards#asha",
    },
    {
      title: "ANM",
      description: "Validate field data, manage incidents, monitor vaccinations and ANC schedules",
      icon: "👨‍⚕️",
      link: "/dashboards#anm",
    },
    {
      title: "PHC Doctor",
      description: "Patient queue management, teleconsult, referrals, and incident oversight",
      icon: "🩺",
      link: "/dashboards#doctor",
    },
    {
      title: "Pharmacist",
      description: "Inventory tracking, dispensation logs, expiry alerts, and SMS fallback",
      icon: "💊",
      link: "/dashboards#pharmacist",
    },
    {
      title: "Supervisor",
      description: "Device health monitoring, incident management, KPI dashboards, and admin controls",
      icon: "📊",
      link: "/dashboards#supervisor",
    },
  ];

  return (
    <div className="w-full">
      {/* Intro Video Section */}
      <section className="relative w-full bg-black">
        <video 
          className="w-full h-auto max-h-[70vh] object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white space-y-4 fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">SAMBHAV</h1>
            <p className="text-xl md:text-2xl">गाँव गाँव तक सेहत</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src={sambhavLogo} alt="" className="w-2/3 max-w-2xl" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
            <div className="inline-flex items-center justify-center mb-6">
              <img src={sambhavLogo} alt="SAMBHAV" className="h-32 w-auto float" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              SAMBHAV
            </h1>
            
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              गाँव गाँव तक सेहत
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Offline-first EHR & ASHA safety companion — empowering frontline workers with voice-enabled patient care, encrypted incident reporting, and seamless sync
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/auth?mode=signup">
                <Button variant="hero" size="lg" className="text-lg h-14 px-8 touch-target">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 touch-target border-2 hover:border-primary">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for India's Frontline Health Warriors</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="text-primary font-bold text-lg mb-2">✓ Works Offline</div>
                <p className="text-muted-foreground text-sm">Queue visits, sync later. No connectivity? No problem.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="text-primary font-bold text-lg mb-2">✓ Voice First</div>
                <p className="text-muted-foreground text-sm">Low-literacy friendly with voice input & local language support</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="text-primary font-bold text-lg mb-2">✓ Women Safety</div>
                <p className="text-muted-foreground text-sm">Silent panic button, encrypted alerts, MLC-ready reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Dashboards Teaser */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Every Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From field workers to supervisors, each dashboard is designed for its user
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Link key={index} to={role.link} className="group">
                <div className="bg-primary text-white border-2 border-primary hover:border-primary-dark rounded-lg p-6 h-full hover-zoom">
                  <div className="text-5xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{role.title}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{role.description}</p>
                  <div className="mt-4 text-white text-sm font-medium flex items-center">
                    View Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Strip - Bottom of Page */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValuePropCard
              icon={Database}
              title="Offline-First"
              description="Work without connectivity. Data queued locally, syncs when online — no patient visit lost."
              delay={0}
            />
            <ValuePropCard
              icon={Users}
              title="ASHA-First UX"
              description="Voice input, large buttons, local language. Built for field workers, by understanding their world."
              delay={100}
            />
            <ValuePropCard
              icon={Shield}
              title="Safety Module"
              description="Silent panic alerts, location sharing, encrypted evidence. Protection for those who protect communities."
              delay={200}
            />
            <ValuePropCard
              icon={Activity}
              title="Role Dashboards"
              description="Each user sees what they need — ASHA, ANM, Doctor, Pharmacist, Supervisor. Purpose-built workflows."
              delay={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
