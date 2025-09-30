import { Users, Shield, Stethoscope, Pill, BarChart3, AlertTriangle, Database, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyncIndicator from "@/components/SyncIndicator";

const Dashboards = () => {
  return (
    <div className="w-full py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Role-Based Dashboards</h1>
          <p className="text-xl text-muted-foreground">
            Every user sees exactly what they need — purpose-built interfaces for field, clinic, and admin
          </p>
        </div>

        {/* Tabs for Each Role */}
        <Tabs defaultValue="asha" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
            <TabsTrigger value="asha" className="touch-target">
              <Users className="h-4 w-4 mr-2" />
              ASHA
            </TabsTrigger>
            <TabsTrigger value="anm" className="touch-target">
              <Stethoscope className="h-4 w-4 mr-2" />
              ANM
            </TabsTrigger>
            <TabsTrigger value="doctor" className="touch-target">
              <Stethoscope className="h-4 w-4 mr-2" />
              Doctor
            </TabsTrigger>
            <TabsTrigger value="pharmacist" className="touch-target">
              <Pill className="h-4 w-4 mr-2" />
              Pharmacist
            </TabsTrigger>
            <TabsTrigger value="supervisor" className="touch-target">
              <BarChart3 className="h-4 w-4 mr-2" />
              Supervisor
            </TabsTrigger>
            <TabsTrigger value="safety" className="touch-target">
              <Shield className="h-4 w-4 mr-2" />
              Safety
            </TabsTrigger>
          </TabsList>

          {/* ASHA Dashboard */}
          <TabsContent value="asha" id="asha" className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">ASHA Worker Dashboard</h2>
                <SyncIndicator status="synced" />
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Voice-first, offline-capable, touch-friendly interface for primary field workers
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Voice Input</span>
                <span className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">Offline-First</span>
                <span className="px-3 py-1 bg-warning/10 text-warning text-sm rounded-full">Low-Literacy</span>
                <span className="px-3 py-1 bg-safety/10 text-safety text-sm rounded-full">Safety Button</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Home / Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                    <span>Patients Visited Today</span>
                    <span className="font-bold text-primary">12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                    <span>Pending Syncs</span>
                    <span className="font-bold text-warning">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                    <span>Upcoming Visits</span>
                    <span className="font-bold text-primary">8</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    • Large tiles with icons<br />
                    • Voice prompt: "Tell me my schedule"<br />
                    • Quick access to new visit button
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Patients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">RM</div>
                      <div>
                        <div className="font-bold">Rashmi Devi</div>
                        <div className="text-xs text-muted-foreground">32 yrs • ANC Visit</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    • Voice/text search<br />
                    • Patient cards: photo, age, badges (ANC, NCD)<br />
                    • Tap to view visit history, reminders, safety notes<br />
                    • Color-coded urgency (red = overdue)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>New Visit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <div className="p-2 bg-success/10 border border-success/30 rounded text-success text-xs">
                      ✓ Patient selected: Rashmi Devi
                    </div>
                    <div className="p-2 bg-muted/50 rounded text-xs">
                      Checklist: ANC, Immunization, Fever, NCD
                    </div>
                    <div className="p-2 bg-muted/50 rounded text-xs">
                      Voice input: "Patient complains fever 2 days"
                    </div>
                    <div className="p-2 bg-muted/50 rounded text-xs">
                      📷 Photo attachment ready
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    • Structured checklists<br />
                    • Voice-to-text notes<br />
                    • Photo/audio attach<br />
                    • Save locally, queue for sync
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-safety/50">
                <CardHeader>
                  <CardTitle className="text-safety flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Safety / Panic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-4 bg-safety/10 rounded-lg text-center">
                    <div className="w-16 h-16 bg-safety rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                      SOS
                    </div>
                    <p className="text-xs font-medium">Persistent bottom-right button</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    • <strong>Short tap:</strong> Safety menu (quick-call police, NGO, family)<br />
                    • <strong>Long press:</strong> Silent panic (haptic only)<br />
                    • Sends location, photo/audio to trusted contacts<br />
                    • Encrypted, anonymous reporting option<br />
                    • SMS fallback if offline
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reminders / Calendar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <div className="p-2 bg-warning/10 border-l-4 border-warning rounded text-xs">
                      Today: Rashmi Devi ANC checkup
                    </div>
                    <div className="p-2 bg-primary/10 border-l-4 border-primary rounded text-xs">
                      Tomorrow: Vaccine camp @ Village Center
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    • Color-coded urgency<br />
                    • Push notifications when online<br />
                    • Quick "Mark done" button<br />
                    • Sync with supervisor calendar
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Help / AI Assistant</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/5 rounded border">
                    <p className="text-xs mb-2 text-muted-foreground">Ask me anything...</p>
                    <p className="text-xs">"How to handle high fever in infant?"</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    • Step-by-step guidance<br />
                    • Translation (Hindi, Punjabi)<br />
                    • Incident summary for reporting<br />
                    • Offline Q&A cache
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ANM Dashboard */}
          <TabsContent value="anm" id="anm" className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-2">ANM Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Supervise ASHA work, validate field data, manage incidents and vaccination schedules
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Home Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>ASHAs in Area</span>
                      <span className="font-bold">8</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>Visits Today</span>
                      <span className="font-bold">47</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>Pending Approvals</span>
                      <span className="font-bold text-warning">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Patient Review</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Validate visit details & vitals<br />
                  • Add comments or corrections<br />
                  • Approve or flag for re-visit<br />
                  • View ASHA notes & photos
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incident Management</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Incident queue with priority<br />
                  • Approve escalations<br />
                  • AI-generated summaries<br />
                  • MLC-ready report export
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vaccination / ANC</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Calendar view of schedules<br />
                  • Flag missed appointments<br />
                  • Send reminders to ASHAs<br />
                  • Coverage reports
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medicines / Stock</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Dispensed vs remaining stock<br />
                  • Flag shortages<br />
                  • SMS to PHC pharmacist<br />
                  • Expiry alerts
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* PHC Doctor Dashboard */}
          <TabsContent value="doctor" id="doctor" className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-2">PHC Doctor Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Patient queue, teleconsults, referrals, and incident oversight
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Queue</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Synced patient list from ASHAs<br />
                  • Visit summaries & vitals<br />
                  • Priority triage (urgent first)<br />
                  • Click to view full EHR
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teleconsult</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Scheduled calls with ASHA/ANM<br />
                  • Video/audio with patient<br />
                  • Screen share patient records<br />
                  • Record call for MLC
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Referrals & Follow-up</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Accept referrals from ANM<br />
                  • Refer to district hospital<br />
                  • Schedule follow-up with ASHA<br />
                  • Track referral outcomes
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incident Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • High-severity incidents only<br />
                  • AI-generated medical summaries<br />
                  • Review evidence (photos/audio)<br />
                  • Coordinate with authorities
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Daily patient stats<br />
                  • Missed visits & coverage gaps<br />
                  • Vaccination progress<br />
                  • Stock consumption trends
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pharmacist Dashboard */}
          <TabsContent value="pharmacist" id="pharmacist" className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-2">Pharmacist Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Inventory management, dispensation tracking, and expiry alerts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medicine Inventory</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Real-time stock levels<br />
                  • Filter by category (tablets, syrups, etc.)<br />
                  • Search by name or code<br />
                  • Color-coded stock alerts
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dispensed Today</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • List of medicines given<br />
                  • ASHA dispensation logs<br />
                  • Patient-wise breakdown<br />
                  • Offline updates queued
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expiry Alerts</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • 30/60/90 day warnings<br />
                  • Highlight expired items (red)<br />
                  • Generate disposal reports<br />
                  • Notify ANM for removal
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Low Stock Alerts</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Auto-notify ANM & PHC doctor<br />
                  • SMS fallback when offline<br />
                  • Reorder suggestions<br />
                  • Track pending orders
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Supervisor / Admin Dashboard */}
          <TabsContent value="supervisor" id="supervisor" className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-2">Supervisor / Admin Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Device health, incident management, KPIs, and system administration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Device Health</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Map view of ASHA devices<br />
                  • Last sync timestamp per device<br />
                  • Pending items count<br />
                  • Offline usage stats<br />
                  • Battery & storage alerts
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incident Queue</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Pending / Acknowledged / Resolved<br />
                  • Priority triage (high/med/low)<br />
                  • Assign caseworkers<br />
                  • Request additional evidence<br />
                  • Generate MLC reports
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KPIs / Metrics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Daily active ASHAs<br />
                  • Sync success rate (%)<br />
                  • Avg incident response time<br />
                  • Vaccination coverage<br />
                  • Exportable reports (CSV/PDF)
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Bulk device registration<br />
                  • Role assignment (ASHA/ANM/etc.)<br />
                  • Push config updates<br />
                  • Deactivate/reactivate users
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Safety Module Dashboard */}
          <TabsContent value="safety" id="safety" className="space-y-8">
            <div className="bg-gradient-to-br from-safety/10 to-warning/10 rounded-2xl p-8 mb-8 border-2 border-safety/30">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-safety mr-3" />
                <h2 className="text-3xl font-bold text-safety">Emergency / Safety Module</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Persistent panic button, encrypted alerts, anonymous reporting, and MLC-ready documentation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-safety/50">
                <CardHeader>
                  <CardTitle className="text-safety">Panic Button Behavior</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="bg-safety/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">Short Tap:</p>
                    <p className="text-muted-foreground">Opens Safety Menu with quick-call buttons (police, NGO, family, supervisor)</p>
                  </div>
                  <div className="bg-safety/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">Long Press (3 sec):</p>
                    <p className="text-muted-foreground">Silent panic mode — haptic feedback only, no UI. Sends encrypted location & evidence to trusted contacts.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-warning/50">
                <CardHeader>
                  <CardTitle className="text-warning">Automated Alert Flow</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  • Encrypted alert to trusted contacts<br />
                  • Notification to supervisor dashboard<br />
                  • Alert to district authorities<br />
                  • Police station within radius notified<br />
                  • SMS fallback if no data connectivity
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Location Sharing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • GPS coordinates captured<br />
                  • Nearby landmarks identified<br />
                  • Timestamp logged<br />
                  • Live location shared with trusted contacts<br />
                  • Location history for audit
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Discreet Evidence</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Photo/audio captured (if safe)<br />
                  • Uploaded to encrypted vault<br />
                  • Only accessible by authorized personnel<br />
                  • Evidence chain of custody maintained<br />
                  • Auto-deleted after legal proceedings
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anonymous Reporting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • Option to report anonymously<br />
                  • Identity masked from reports<br />
                  • Supervisor sees incident, not identity<br />
                  • Haptic-only confirmation<br />
                  • Legal protection for whistleblowers
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incident Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  • States: Pending → Acknowledged → Investigating → Resolved<br />
                  • AI-generated incident summary<br />
                  • Evidence review (photos/audio/location)<br />
                  • Caseworker assignment<br />
                  • Export MLC-ready PDF
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/30">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-2 text-primary" />
                MLC-Ready Report Generation
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold mb-2">Report Contents:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Timestamp & location (GPS)</li>
                    <li>• Incident type & severity</li>
                    <li>• Evidence attachments (encrypted)</li>
                    <li>• Witness statements (if any)</li>
                    <li>• Medical examination notes</li>
                    <li>• Chain of custody log</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Legal Compliance:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Complies with IPC sections</li>
                    <li>• Formatted per MLC guidelines</li>
                    <li>• Digital signature support</li>
                    <li>• Tamper-proof PDF export</li>
                    <li>• Court-admissible evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Global Dashboard Principles */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Universal Dashboard Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Database className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-bold mb-2">Offline-First</h3>
              <p className="text-sm text-muted-foreground">All actions work offline, queue for sync</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Role-Based Access</h3>
              <p className="text-sm text-muted-foreground">See only what's relevant to your role</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-bold mb-2">Low-Literacy UX</h3>
              <p className="text-sm text-muted-foreground">Icons, voice, minimal text</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-safety/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Activity className="h-6 w-6 text-safety" />
              </div>
              <h3 className="font-bold mb-2">Visual Feedback</h3>
              <p className="text-sm text-muted-foreground">Sync status, urgency colors, haptics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
