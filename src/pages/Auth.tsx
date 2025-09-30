import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import sambhavLogo from "@/assets/sambhav-logo.png";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "signin";
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [role, setRole] = useState<string>("asha");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    district: "",
    ashaId: "",
    deviceName: "",
    organizationName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication - replace with real authentication logic
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: mode === "signup" ? "Account created!" : "Welcome back!",
        description: mode === "signup" 
          ? `Your ${role.toUpperCase()} account has been created successfully.`
          : `You've been signed in as ${role.toUpperCase()}.`,
      });
      
      // Navigate to appropriate dashboard
      navigate("/dashboards#" + role);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const roles = [
    { value: "asha", label: "ASHA Worker" },
    { value: "anm", label: "ANM" },
    { value: "doctor", label: "PHC Doctor" },
    { value: "pharmacist", label: "Pharmacist" },
    { value: "supervisor", label: "Supervisor / Admin" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 py-12 px-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={sambhavLogo} alt="SAMBHAV" className="h-16 w-auto" />
          </div>
          <CardTitle className="text-2xl">
            {mode === "signup" ? "Create Account" : "Sign In"}
          </CardTitle>
          <CardDescription>
            {mode === "signup"
              ? "Join SAMBHAV to access your role-based dashboard"
              : "Welcome back! Sign in to continue."}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="touch-target">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sign Up Fields */}
            {mode === "signup" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="touch-target"
                  />
                </div>

                {role === "asha" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ashaId">ASHA ID</Label>
                      <Input
                        id="ashaId"
                        type="text"
                        placeholder="Your ASHA identification"
                        value={formData.ashaId}
                        onChange={(e) => handleChange("ashaId", e.target.value)}
                        required
                        className="touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        type="text"
                        placeholder="Your district"
                        value={formData.district}
                        onChange={(e) => handleChange("district", e.target.value)}
                        required
                        className="touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deviceName">Device Name (Optional)</Label>
                      <Input
                        id="deviceName"
                        type="text"
                        placeholder="e.g., My Work Phone"
                        value={formData.deviceName}
                        onChange={(e) => handleChange("deviceName", e.target.value)}
                        className="touch-target"
                      />
                    </div>
                  </>
                )}

                {role === "supervisor" && (
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your organization"
                      value={formData.organizationName}
                      onChange={(e) => handleChange("organizationName", e.target.value)}
                      required
                      className="touch-target"
                    />
                  </div>
                )}
              </>
            )}

            {/* Common Fields */}
            {(mode === "signup" || role !== "asha") && (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="touch-target"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                required
                className="touch-target"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full touch-target bg-primary hover:bg-primary-dark text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading
                ? "Processing..."
                : mode === "signup"
                ? "Create Account"
                : "Sign In"}
            </Button>

            {/* Toggle Mode */}
            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
                className="text-primary hover:underline"
              >
                {mode === "signup"
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>

            {/* Privacy Note */}
            <div className="text-xs text-muted-foreground text-center pt-4 border-t">
              <p>
                🔒 Your data is encrypted and protected. Anonymous reporting available for safety incidents.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
