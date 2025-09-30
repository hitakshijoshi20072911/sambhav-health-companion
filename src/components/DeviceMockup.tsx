import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  showStatus?: boolean;
  status?: "online" | "offline" | "syncing";
}

const DeviceMockup = ({ imageSrc, alt, className, showStatus, status = "online" }: DeviceMockupProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-success";
      case "offline":
        return "bg-safety";
      case "syncing":
        return "bg-warning";
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Device Frame */}
      <div className="relative bg-foreground rounded-[2.5rem] p-3 shadow-strong group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
        {/* Screen */}
        <div className="bg-background rounded-[2rem] overflow-hidden relative">
          {/* Status Indicator */}
          {showStatus && (
            <div className="absolute top-3 right-3 z-10">
              <div className={cn("w-3 h-3 rounded-full", getStatusColor(), status === "syncing" && "sync-heartbeat")} />
            </div>
          )}
          
          {/* Screen Content */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Home Button */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-background/30 rounded-full" />
      </div>
    </div>
  );
};

export default DeviceMockup;
