import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/9f3dd44c-c57f-4a4c-b133-1e370d37c193.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      </div>
      
      <div className="relative container h-screen flex items-center">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Lustrous
            <span className="text-primary block mt-2">Heirloom</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore delightful sarees in refreshing hues and luxurious fabrics for various celebrations. Each piece embodies timeless elegance and cultural heritage.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              Shop Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};