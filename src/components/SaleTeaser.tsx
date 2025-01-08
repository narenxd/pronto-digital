import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Tag, Lock, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

const saleItems = [
  {
    id: 1,
    name: "Royal Kanchipuram Silk",
    image: "/lovable-uploads/eba10039-94a3-419f-892b-dd5970bbb88d.png",
    originalPrice: "₹72,999",
    salePrice: "₹7,299",
    discount: "90%",
    type: "members",
    unlockTime: { hours: 14, minutes: 0 }, // 2:00 PM
    quantity: 3
  },
  {
    id: 2,
    name: "Contemporary Silk",
    image: "/lovable-uploads/65af042f-e798-4f89-9f37-d5b3399eec35.png",
    originalPrice: "₹58,999",
    salePrice: "₹29,499",
    discount: "50%",
    type: "public",
    unlockTime: { hours: 15, minutes: 30 }, // 3:30 PM
    quantity: 6
  },
  {
    id: 3,
    name: "Fusion Collection",
    image: "/lovable-uploads/ff476503-31c7-4bd9-8ec4-0f7fb1714bca.png",
    originalPrice: "₹65,999",
    salePrice: "₹19,799",
    discount: "70%",
    type: "members",
    unlockTime: { hours: 17, minutes: 0 }, // 5:00 PM
    quantity: 4
  }
];

export const SaleTeaser = () => {
  const [timeRemaining, setTimeRemaining] = useState<{ [key: number]: string }>({});
  const { toast } = useToast();

  useEffect(() => {
    const calculateTimeRemaining = (unlockTime: { hours: number, minutes: number }) => {
      const now = new Date();
      const saleDate = new Date();
      saleDate.setHours(unlockTime.hours, unlockTime.minutes, 0, 0);
      
      if (now > saleDate) {
        saleDate.setDate(saleDate.getDate() + 1);
      }
      
      const diff = saleDate.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const timer = setInterval(() => {
      const times = saleItems.reduce((acc, item) => ({
        ...acc,
        [item.id]: calculateTimeRemaining(item.unlockTime)
      }), {});
      setTimeRemaining(times);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = (itemName: string) => {
    toast({
      title: "Notification Set!",
      description: `We'll notify you when the ${itemName} sale starts.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <h2 className="text-lg font-semibold text-primary tracking-wide">FLASH SALE</h2>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Today's Special Offers</h2>
          <div className="flex items-center justify-center gap-3 text-xl font-medium text-white/80">
            <Clock className="w-6 h-6 text-primary" />
            <span>Multiple Drops Throughout The Day</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {saleItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden group relative bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-500"
            >
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 backdrop-blur-[90px] group-hover:backdrop-blur-[40px] bg-black/90 group-hover:bg-black/40 transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {item.type === "members" && (
                    <div className="absolute top-4 right-4 bg-primary/90 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                      Members Only
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{item.name}</h3>
                    
                    <div className="space-y-2">
                      <p className="text-base font-medium text-white/60 line-through">{item.originalPrice}</p>
                      <p className="text-4xl font-bold text-primary tracking-tight">{item.salePrice}</p>
                      <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full">
                        <p className="text-lg font-bold text-primary">
                          {item.discount} OFF
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-white/80">
                        <ShoppingBag className="w-4 h-4" />
                        <p className="text-sm font-medium">
                          Only {item.quantity} pieces available
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 text-white/80">
                        <Lock className="w-4 h-4" />
                        <p className="text-sm font-medium">
                          Unlocks at {item.unlockTime.hours}:{item.unlockTime.minutes.toString().padStart(2, '0')} PM
                        </p>
                      </div>
                      
                      <div className="bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                        <p className="text-lg font-mono font-bold text-white">{timeRemaining[item.id]}</p>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleNotifyMe(item.name)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};