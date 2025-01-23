import { Bot, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const GetHired = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="relative min-h-[calc(100vh-80px)]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-primary/20"></div>
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full text-primary">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Job Applications</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Get Hired While You Sleep!
                <span className="block text-primary mt-2">Let AI Apply to 1,000 Jobs for You</span>
              </h1>
              
              {/* Features List */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg text-white/80">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Trial Info */}
              <p className="text-white/60 text-sm">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const features = [
  "Custom Resumes in 1 Click",
  "Beat Robot Screeners",
  "Free 7-Day Trial"
];

export default GetHired;