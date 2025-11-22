import { useState } from "react";
import { MapPin, Users, Navigation, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationInput from "./LocationInput";
import VehicleSelector from "./VehicleSelector";
import PassengerCounter from "./PassengerCounter";

const RiderView = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showShared, setShowShared] = useState(false);

  const handleRequestRide = () => {
    if (!pickupLocation || !dropLocation || !selectedVehicle) {
      return;
    }
    // Handle ride request logic
    console.log("Requesting ride...", { pickupLocation, dropLocation, passengers, selectedVehicle });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Map Area */}
      <div className="relative h-[45vh] bg-xoom-surface border-b border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce" />
            <p className="text-muted-foreground">Map integration placeholder</p>
          </div>
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-background/80 to-transparent">
          <div className="flex gap-2">
            <Button 
              variant={showSchedule ? "default" : "secondary"}
              size="sm"
              onClick={() => setShowSchedule(!showSchedule)}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Schedule
            </Button>
            <Button 
              variant={showShared ? "default" : "secondary"}
              size="sm"
              onClick={() => setShowShared(!showShared)}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Shared Ride
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Panel */}
      <div className="animate-slide-up">
        <div className="px-4 py-6 space-y-4">
          {/* Location Inputs */}
          <div className="space-y-3">
            <LocationInput
              icon={<Navigation className="w-5 h-5 text-primary" />}
              placeholder="Pickup location"
              value={pickupLocation}
              onChange={setPickupLocation}
            />
            <LocationInput
              icon={<MapPin className="w-5 h-5 text-destructive" />}
              placeholder="Drop location"
              value={dropLocation}
              onChange={setDropLocation}
            />
          </div>

          {/* Passenger Counter */}
          <PassengerCounter value={passengers} onChange={setPassengers} />

          {/* Vehicle Selection */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3">Select XOOM Type</h3>
            <VehicleSelector 
              selectedVehicle={selectedVehicle}
              onSelectVehicle={setSelectedVehicle}
            />
          </div>

          {/* Price Estimate */}
          {selectedVehicle && pickupLocation && dropLocation && (
            <Card className="xoom-surface-elevated p-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground text-sm">Estimated Fare</p>
                  <p className="font-display text-2xl font-bold text-primary">₹ 145</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  ~15 min
                </Badge>
              </div>
            </Card>
          )}

          {/* Request Button */}
          <Button 
            className="w-full h-14 text-lg font-semibold xoom-gradient hover:opacity-90 transition-opacity"
            size="lg"
            onClick={handleRequestRide}
            disabled={!pickupLocation || !dropLocation || !selectedVehicle}
          >
            Request a XOOM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RiderView;
