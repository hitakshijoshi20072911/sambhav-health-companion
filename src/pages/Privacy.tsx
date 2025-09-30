import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="w-full py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy and data security are our top priorities
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-medium">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All patient data and health records are encrypted both in transit and at rest using industry-standard 
                    AES-256 encryption. We comply with India's Personal Data Protection regulations and maintain strict 
                    access controls to ensure only authorized personnel can view sensitive information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-safety/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-safety" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Anonymous Reporting</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Safety incident reports can be submitted anonymously. When anonymous mode is enabled, the reporter's 
                    identity is masked from all reports and only incident details are shared with authorities. We employ 
                    zero-knowledge architecture to ensure complete anonymity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-warning" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Data Access & Control</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have full control over your data. Users can request to view, download, or delete their personal 
                    information at any time. Role-based access ensures that users only see information relevant to their 
                    responsibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-success" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">MLC Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All medico-legal case (MLC) documentation follows Indian legal standards. Evidence chains of custody 
                    are maintained, timestamps are tamper-proof, and reports are formatted to be court-admissible while 
                    protecting victim privacy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-6 text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Last Updated:</strong> January 2025
            </p>
            <p>
              For detailed information about our data practices, please contact{" "}
              <a href="mailto:privacy@sambhav.health" className="text-primary hover:underline">
                privacy@sambhav.health
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
