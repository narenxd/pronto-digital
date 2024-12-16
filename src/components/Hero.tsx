import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Timeless Elegance
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore our collection of handcrafted sarees, where traditional artistry meets contemporary fashion
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Shop Collection
          </Button>
        </div>
      </div>
    </div>
  );
};