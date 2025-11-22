import { useState } from "react";
import { Menu } from "lucide-react";
import RiderView from "@/components/RiderView";
import DriverView from "@/components/DriverView";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mode, setMode] = useState<"rider" | "driver">("rider");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="font-display text-2xl font-bold">
                <span className="text-primary">X</span>
                <span className="text-foreground">OOM</span>
              </h1>
            </div>

            <ModeToggle mode={mode} onModeChange={setMode} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="animate-fade-in">
        {mode === "rider" ? <RiderView /> : <DriverView />}
      </main>
    </div>
  );
};

export default Index;
