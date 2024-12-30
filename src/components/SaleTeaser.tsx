import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <section className="py-20 bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Today's Flash Sale</h2>
          <div className="flex items-center justify-center gap-3 text-xl font-semibold text-white/90">
            <Clock className="w-6 h-6 text-primary" />
            <span>Multiple Drops Throughout The Day</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {saleItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden group relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800"
            >
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 backdrop-blur-[20px] bg-black/40 group-hover:backdrop-blur-[25px] transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  {item.type === "members" && (
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                      Members Only
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <div className="space-y-2">
                    <p className="text-lg line-through opacity-70">{item.originalPrice}</p>
                    <p className="text-2xl font-bold text-white">{item.salePrice}</p>
                    <p className="text-lg font-bold bg-white/20 px-4 py-1 rounded-full">
                      {item.discount} OFF
                    </p>
                    <p className="text-sm font-medium text-primary-foreground">
                      Only {item.quantity} pieces available
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="text-sm mb-2">
                      Unlocks at {item.unlockTime.hours}:{item.unlockTime.minutes.toString().padStart(2, '0')} PM
                    </div>
                    <div className="bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                      <p className="text-sm font-mono">{timeRemaining[item.id]}</p>
                    </div>
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