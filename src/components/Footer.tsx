import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6">
              The Kanchi Project
            </h3>
            <p className="text-gray-400">
              Crafting timeless elegance through traditional silk sarees, where heritage meets contemporary design.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Visit Us</h4>
            <address className="text-gray-400 not-italic">
              The Kanchi Project<br />
              123 Silk Avenue<br />
              Kanchipuram, Tamil Nadu<br />
              India - 631502
            </address>
            <p className="mt-4 text-gray-400">
              Phone: +91 98765 43210<br />
              Email: info@kanchiproject.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Kanchi Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};