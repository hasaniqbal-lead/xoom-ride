import { User, CarFront } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  mode: "rider" | "driver";
  onModeChange: (mode: "rider" | "driver") => void;
}

const ModeToggle = ({ mode, onModeChange }: ModeToggleProps) => {
  return (
    <div className="xoom-surface rounded-full p-1 flex gap-1">
      <button
        onClick={() => onModeChange("rider")}
        className={cn(
          "flex-1 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full transition-all",
          mode === "rider" 
            ? "xoom-gradient text-primary-foreground font-semibold" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <User className="w-4 h-4" />
        <span>Rider</span>
      </button>
      <button
        onClick={() => onModeChange("driver")}
        className={cn(
          "flex-1 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full transition-all",
          mode === "driver" 
            ? "xoom-gradient text-primary-foreground font-semibold" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <CarFront className="w-4 h-4" />
        <span>Driver</span>
      </button>
    </div>
  );
};

export default ModeToggle;
