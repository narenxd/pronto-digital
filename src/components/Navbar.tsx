import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl font-bold text-primary tracking-wider">
            <span className="text-white">The</span> Kanchi <span className="text-white">Project</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-primary transition-colors">New Arrivals</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Heritage</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};