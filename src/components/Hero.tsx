import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e7a9c04b-1abf-428e-97a9-4c0515c98e3a.png')] bg-cover bg-center">
          {/* Gradient overlay for the right side */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
        </div>
      </div>
      
      <div className="relative container h-screen flex items-center justify-end">
        <div className="w-[40%] space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-white/90 tracking-wider">
              THE KANCHI PROJECT
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Timeless Silk
              <span className="text-primary block mt-2">Heritage Weaves</span>
            </h1>
          </div>
          
          <p className="text-lg text-white/80">
            Discover our exquisite collection of handcrafted silk sarees, where tradition meets elegance.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90 text-lg group"
          >
            Explore Collection
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};