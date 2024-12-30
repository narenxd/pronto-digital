import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const SALE_TIME = {
  hours: 14, // 2 PM
  minutes: 0,
  duration: 30 // 30 minutes
};

const saleItems = [
  {
    id: 1,
    name: "Royal Kanchipuram Silk",
    image: "/lovable-uploads/eba10039-94a3-419f-892b-dd5970bbb88d.png",
    originalPrice: "₹72,999",
    salePrice: "₹36,499",
  },
  {
    id: 2,
    name: "Contemporary Silk",
    image: "/lovable-uploads/65af042f-e798-4f89-9f37-d5b3399eec35.png",
    originalPrice: "₹58,999",
    salePrice: "₹29,499",
  },
  {
    id: 3,
    name: "Fusion Collection",
    image: "/lovable-uploads/ff476503-31c7-4bd9-8ec4-0f7fb1714bca.png",
    originalPrice: "₹65,999",
    salePrice: "₹32,999",
  }
];

export const SaleTeaser = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>("Loading...");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const saleDate = new Date();
      saleDate.setHours(SALE_TIME.hours, SALE_TIME.minutes, 0, 0);
      
      if (now.getHours() >= SALE_TIME.hours + 1) {
        saleDate.setDate(saleDate.getDate() + 1);
      }
      
      const diff = saleDate.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Today's Flash Sale</h2>
          <div className="flex items-center justify-center gap-3 text-xl font-semibold">
            <Clock className="w-6 h-6 text-primary" />
            <span>Sale Starts In: </span>
            <span className="font-mono text-primary">{timeRemaining}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {saleItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group relative">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 backdrop-blur-xl bg-black/20 group-hover:backdrop-blur-lg transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <div className="space-y-2">
                    <p className="text-lg line-through opacity-70">{item.originalPrice}</p>
                    <p className="text-2xl font-bold text-primary">{item.salePrice}</p>
                  </div>
                  <div className="mt-4 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                    <p className="text-sm">Unlocks in {timeRemaining}</p>
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