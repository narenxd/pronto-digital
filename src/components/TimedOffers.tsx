import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TimedOffers = () => {
  const [isOfferActive, setIsOfferActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const { toast } = useToast();

  // Check if current time is between 2:00 PM and 2:30 PM
  const checkOfferTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Check if time is between 14:00 (2 PM) and 14:30 (2:30 PM)
    return hours === 14 && minutes >= 0 && minutes < 30;
  };

  // Calculate remaining time in seconds
  const calculateTimeRemaining = () => {
    const now = new Date();
    const endTime = new Date();
    endTime.setHours(14, 30, 0, 0); // Set to 2:30 PM
    
    if (now > endTime) {
      return 0;
    }
    
    return Math.floor((endTime.getTime() - now.getTime()) / 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const isActive = checkOfferTime();
      setIsOfferActive(isActive);
      
      if (isActive) {
        const remaining = calculateTimeRemaining();
        setTimeRemaining(remaining);
        
        if (remaining <= 0) {
          setIsOfferActive(false);
          toast({
            title: "Offer Ended",
            description: "The special discount period has ended. Check back tomorrow!",
          });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOfferActive) return null;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="bg-gradient-to-r from-primary/90 to-primary py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
      
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Special Offer!</h3>
              <p className="text-white/90">Exclusive 50% OFF on Premium Silk Sarees</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <div className="text-xl font-mono text-white">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
            
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};