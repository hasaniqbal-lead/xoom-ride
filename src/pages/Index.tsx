import { useState } from "react";
import { Menu } from "lucide-react";
import RiderView from "@/components/RiderView";
import DriverView from "@/components/DriverView";
import ModeToggle from "@/components/ModeToggle";
import DriverRegistration from "@/components/DriverRegistration";
import UserRegistration from "@/components/UserRegistration";
import { Button } from "@/components/ui/button";

type ViewType = "main" | "driver-register" | "user-register";

const Index = () => {
  const [mode, setMode] = useState<"rider" | "driver">("rider");
  const [currentView, setCurrentView] = useState<ViewType>("main");
  const [guestData, setGuestData] = useState<{ name: string; contact: string } | null>(null);

  const handleGuestContinue = (name: string, contact: string) => {
    setGuestData({ name, contact });
    setCurrentView("main");
  };

  if (currentView === "driver-register") {
    return <DriverRegistration onBack={() => setCurrentView("main")} />;
  }

  if (currentView === "user-register") {
    return <UserRegistration onBack={() => setCurrentView("main")} onGuestContinue={handleGuestContinue} />;
  }

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

            <div className="flex items-center gap-4">
              {!guestData && (
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentView("user-register")}
                  >
                    Register as Rider
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentView("driver-register")}
                  >
                    Register as Driver
                  </Button>
                </div>
              )}
              <ModeToggle mode={mode} onModeChange={setMode} />
            </div>
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
