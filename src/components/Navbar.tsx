import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">Saree Elite</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">New Arrivals</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Heritage</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};