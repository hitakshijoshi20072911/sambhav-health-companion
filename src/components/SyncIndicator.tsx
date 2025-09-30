import { RefreshCw, Wifi, WifiOff, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type SyncStatus = "online" | "syncing" | "offline" | "synced";

interface SyncIndicatorProps {
  status: SyncStatus;
  className?: string;
}

const SyncIndicator = ({ status, className }: SyncIndicatorProps) => {
  const getIcon = () => {
    switch (status) {
      case "online":
        return <Wifi className="h-4 w-4" />;
      case "syncing":
        return <RefreshCw className="h-4 w-4 animate-spin" />;
      case "offline":
        return <WifiOff className="h-4 w-4" />;
      case "synced":
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getStyles = () => {
    switch (status) {
      case "online":
        return "bg-success/10 text-success border-success/30";
      case "syncing":
        return "bg-warning/10 text-warning border-warning/30";
      case "offline":
        return "bg-safety/10 text-safety border-safety/30 offline-pulse";
      case "synced":
        return "bg-success/10 text-success border-success/30";
    }
  };

  const getLabel = () => {
    switch (status) {
      case "online":
        return "Online";
      case "syncing":
        return "Syncing...";
      case "offline":
        return "Offline";
      case "synced":
        return "Synced";
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-medium",
        getStyles(),
        className
      )}
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </div>
  );
};

export default SyncIndicator;
