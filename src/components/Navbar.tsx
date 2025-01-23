import { Search, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary tracking-wider">
            Pronto Digital
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Case Studies</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-white/90 hover:text-primary transition-colors">Contact</a>
            <div className="relative group">
              <Link to="/get-hired" className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                <Bot className="w-5 h-5" />
                <span>Get Hired</span>
              </Link>
              <div className="absolute bg-primary/10 px-2 py-1 rounded-md text-xs text-primary -top-4 -right-4">
                New
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};