import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610174622758-c2a7855ea2a0')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
      </div>
      
      <div className="relative container h-screen flex items-center">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover the Art of
            <span className="text-primary block mt-2">Silk Elegance</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore our curated collection of handcrafted silk sarees, where centuries-old artistry meets contemporary fashion. Each piece tells a story of heritage and grace.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              Shop Collection
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