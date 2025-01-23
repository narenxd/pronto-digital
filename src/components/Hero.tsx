import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, ChartBarIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A2463] to-[#3CBBB1]">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Marketing Solutions</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Transform Your Marketing
              <span className="block text-[#3CBBB1]">With AI and Expert CMOs</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl">
              Get data-driven results and strategic guidance from fractional CMOs powered by cutting-edge AI technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#3CBBB1] hover:bg-[#3CBBB1]/90 text-white border-2 border-[#3CBBB1] hover:border-[#3CBBB1]/90 text-lg group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              View Case Studies
              <ChartBarIcon className="ml-2" />
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-white/80">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">300%</span>
              <span className="text-sm">Average ROI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">50+</span>
              <span className="text-sm">Active Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-sm">AI Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};