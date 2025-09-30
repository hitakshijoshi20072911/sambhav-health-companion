import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import DeviceMockup from "@/components/DeviceMockup";
import SyncIndicator from "@/components/SyncIndicator";
import { 
  Users, Activity, Calendar, Shield, Phone, AlertTriangle, 
  CheckCircle, Clock, MapPin, Camera, Mic, FileText,
  Pill, Package, TrendingUp, Bell
} from "lucide-react";

const Dashboards = () => {
  return (
    <div className="w-full py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold">Role Dashboards</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the purpose-built interfaces for each role in the SAMBHAV ecosystem
            </p>
          </div>

          <Tabs defaultValue="asha" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
              <TabsTrigger value="asha" className="text-sm py-3">
                <span className="text-2xl mr-2">👩‍⚕️</span> ASHA
              </TabsTrigger>
              <TabsTrigger value="anm" className="text-sm py-3">
                <span className="text-2xl mr-2">👨‍⚕️</span> ANM
              </TabsTrigger>
              <TabsTrigger value="doctor" className="text-sm py-3">
                <span className="text-2xl mr-2">🩺</span> Doctor
              </TabsTrigger>
              <TabsTrigger value="pharmacist" className="text-sm py-3">
                <span className="text-2xl mr-2">💊</span> Pharmacist
              </TabsTrigger>
              <TabsTrigger value="supervisor" className="text-sm py-3">
                <span className="text-2xl mr-2">📊</span> Supervisor
              </TabsTrigger>
              <TabsTrigger value="safety" className="text-sm py-3">
                <span className="text-2xl mr-2">🚨</span> Safety
              </TabsTrigger>
            </TabsList>

            {/* ASHA Dashboard */}
            <TabsContent value="asha" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-primary text-white hover-zoom">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">ASHA Worker</h3>
                        <p className="text-white/80">Primary Field Worker Dashboard</p>
                      </div>
                      <SyncIndicator status="online" />
                    </div>
                  </Card>

                  {/* Interactive Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 hover-zoom cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-primary" />
                        <div>
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-sm text-muted-foreground">Visits Today</div>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 hover-zoom cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Activity className="h-8 w-8 text-warning" />
                        <div>
                          <div className="text-2xl font-bold">3</div>
                          <div className="text-sm text-muted-foreground">Pending Syncs</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Patient List with Interactive Elements */}
                  <Card className="p-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Today's Patients
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Priya Sharma", age: 28, status: "ANC Visit", priority: "high" },
                        { name: "Meena Devi", age: 45, status: "NCD Checkup", priority: "medium" },
                        { name: "Rajesh Kumar", age: 3, status: "Immunization", priority: "high" },
                      ].map((patient, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{patient.name}, {patient.age}y</div>
                              <div className="text-sm text-muted-foreground">{patient.status}</div>
                            </div>
                          </div>
                          <Badge variant={patient.priority === "high" ? "destructive" : "secondary"}>
                            {patient.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-primary">
                      <Users className="mr-2 h-4 w-4" />
                      Add New Visit
                    </Button>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="flex items-center justify-center hover-zoom">
                        <Mic className="mr-2 h-4 w-4" />
                        Voice Input
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center hover-zoom">
                        <Camera className="mr-2 h-4 w-4" />
                        Capture Photo
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center hover-zoom">
                        <Calendar className="mr-2 h-4 w-4" />
                        Reminders
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center hover-zoom">
                        <MapPin className="mr-2 h-4 w-4" />
                        Check-in
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="online" imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" alt="ASHA Dashboard" />
                  
                  {/* Safety Button - Always Visible */}
                  <Card className="p-6 border-2 border-safety bg-safety/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-safety" />
                        <div>
                          <h4 className="font-bold">Safety Module</h4>
                          <p className="text-sm text-muted-foreground">Persistent panic button</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Button variant="destructive" className="w-full" size="lg">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Emergency Alert
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Long press for silent panic • Short tap for menu
                    </p>
                  </Card>

                  {/* Offline Features */}
                  <Card className="p-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-primary" />
                      Offline Capabilities
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <span className="text-sm">Visit Recording</span>
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <span className="text-sm">Photo Attachment</span>
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <span className="text-sm">Voice Notes</span>
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <span className="text-sm">SMS Fallback</span>
                        <Clock className="h-5 w-5 text-warning" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Feature List */}
              <Card className="p-6">
                <h4 className="font-bold mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Voice-enabled visit tracking with local language support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Offline-first patient management with queue sync</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Persistent safety button with silent panic mode</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Photo/audio evidence capture and encrypted storage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Large touch targets and low-literacy friendly UI</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI assistant for step-by-step guidance</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            {/* ANM Dashboard */}
            <TabsContent value="anm" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-primary text-white hover-zoom">
                    <h3 className="text-2xl font-bold mb-2">ANM Dashboard</h3>
                    <p className="text-white/80">Field Data Validation & Incident Management</p>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Pending Approvals</h4>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">ASHA Visit Report #{i}</div>
                              <div className="text-sm text-muted-foreground">2 hours ago</div>
                            </div>
                          </div>
                          <Button size="sm" className="bg-primary hover-zoom">Review</Button>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Vaccination Schedule</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm font-medium">Upcoming: 12 children</span>
                        <Badge>This Week</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-warning/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm font-medium">Missed: 3 children</span>
                        <Badge variant="destructive">Overdue</Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="syncing" imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" alt="ANM Dashboard" />
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Validate field data and vitals from ASHAs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Manage incident queue and escalations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monitor ANC schedules and vaccination coverage</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* PHC Doctor Dashboard */}
            <TabsContent value="doctor" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-primary text-white hover-zoom">
                    <h3 className="text-2xl font-bold mb-2">PHC Doctor</h3>
                    <p className="text-white/80">Patient Queue & Teleconsult Management</p>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Patient Queue</h4>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                              {i}
                            </div>
                            <div>
                              <div className="font-medium">Patient #{i}</div>
                              <div className="text-sm text-muted-foreground">Waiting</div>
                            </div>
                          </div>
                          <Button size="sm" className="bg-primary hover-zoom">Call Next</Button>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Teleconsult Requests</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-20 hover-zoom">
                        <div className="text-center">
                          <Phone className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-xs">Active: 2</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-20 hover-zoom">
                        <div className="text-center">
                          <Clock className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-xs">Pending: 5</div>
                        </div>
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="online" imageSrc="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=400&q=80" alt="Doctor Dashboard" />
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Manage patient queue with synced records</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Handle teleconsult requests from field</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Review high-severity incident summaries</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Pharmacist Dashboard */}
            <TabsContent value="pharmacist" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-primary text-white hover-zoom">
                    <h3 className="text-2xl font-bold mb-2">Pharmacist</h3>
                    <p className="text-white/80">Inventory & Dispensation Management</p>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Package className="h-5 w-5 mr-2 text-primary" />
                      Medicine Inventory
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Paracetamol 500mg", stock: 500, alert: false },
                        { name: "ORS Sachets", stock: 45, alert: true },
                        { name: "Iron Tablets", stock: 200, alert: false },
                      ].map((med, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded cursor-pointer hover-zoom">
                          <div className="flex items-center space-x-3">
                            <Pill className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">{med.name}</div>
                              <div className="text-sm text-muted-foreground">Stock: {med.stock}</div>
                            </div>
                          </div>
                          {med.alert && (
                            <Badge variant="destructive">Low Stock</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-primary hover-zoom">
                      <Package className="mr-2 h-4 w-4" />
                      Update Inventory
                    </Button>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Today's Dispensation</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-primary">24</div>
                        <div className="text-sm text-muted-foreground">Items Dispensed</div>
                      </div>
                      <div className="text-center p-4 bg-warning/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-warning">3</div>
                        <div className="text-sm text-muted-foreground">Pending Confirms</div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="offline" imageSrc="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" alt="Pharmacist Dashboard" />
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Track medicine inventory with expiry alerts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Confirm ASHA dispensations offline</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SMS fallback for low stock notifications</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Supervisor Dashboard */}
            <TabsContent value="supervisor" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-primary text-white hover-zoom">
                    <h3 className="text-2xl font-bold mb-2">Supervisor</h3>
                    <p className="text-white/80">Device Health & KPI Monitoring</p>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      KPIs Overview
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-primary">42</div>
                        <div className="text-sm text-muted-foreground">Active ASHAs</div>
                      </div>
                      <div className="text-center p-4 bg-success/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-success">98%</div>
                        <div className="text-sm text-muted-foreground">Sync Success</div>
                      </div>
                      <div className="text-center p-4 bg-warning/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-warning">11m</div>
                        <div className="text-sm text-muted-foreground">Avg Response</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <div className="text-3xl font-bold text-primary">156</div>
                        <div className="text-sm text-muted-foreground">Visits Today</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-primary" />
                      Device Health Alerts
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-warning/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">3 devices offline &gt;24h</span>
                        <Button size="sm" variant="outline">Check</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">5 pending syncs</span>
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="online" imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" alt="Supervisor Dashboard" />
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monitor device health and sync status</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Manage incident queue and assignments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Export KPI dashboards and MLC reports</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Safety Module */}
            <TabsContent value="safety" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-safety text-white hover-zoom">
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-8 w-8" />
                      <h3 className="text-2xl font-bold">Emergency Safety</h3>
                    </div>
                    <p className="text-white/90">Women Safety & Incident Reporting Module</p>
                  </Card>

                  <Card className="p-6 border-2 border-safety">
                    <h4 className="font-bold mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-safety" />
                      Panic Button Features
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded cursor-pointer hover-zoom">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">Silent panic with haptic-only feedback</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded cursor-pointer hover-zoom">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">Automated location sharing</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded cursor-pointer hover-zoom">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">Encrypted evidence capture (photo/audio)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded cursor-pointer hover-zoom">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">Anonymous reporting option</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">Alert Recipients</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">Trusted Contacts</span>
                        <Badge>Immediate</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">Supervisor</span>
                        <Badge>Immediate</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">District Authorities</span>
                        <Badge variant="secondary">Within 5km</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded cursor-pointer hover-zoom">
                        <span className="text-sm">Police</span>
                        <Badge variant="secondary">Within 5km</Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <DeviceMockup status="online" imageSrc="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400&q=80" alt="Safety Module" />
                  
                  <Card className="p-6 bg-safety/5 border-2 border-safety">
                    <h4 className="font-bold mb-4 text-safety">Emergency Actions</h4>
                    <div className="space-y-3">
                      <Button variant="destructive" className="w-full hover-zoom" size="lg">
                        <Phone className="mr-2 h-5 w-5" />
                        Quick Call Police
                      </Button>
                      <Button variant="outline" className="w-full hover-zoom" size="lg">
                        <MapPin className="mr-2 h-5 w-5" />
                        Share Live Location
                      </Button>
                      <Button variant="outline" className="w-full hover-zoom" size="lg">
                        <Camera className="mr-2 h-5 w-5" />
                        Capture Evidence
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">MLC Report Generation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Automatic generation of Medico-Legal Case reports with timestamp, location, and encrypted evidence
                    </p>
                    <Button className="w-full bg-primary hover-zoom">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate MLC Report
                    </Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
