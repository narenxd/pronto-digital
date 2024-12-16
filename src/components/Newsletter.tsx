import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to receive updates about new collections, exclusive offers, and styling tips
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};