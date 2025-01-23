import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Get Hired Faster
              <span className="block text-blue-600">with AI!</span>
            </h1>
            
            <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto mt-8">
              {[
                "1-Click Resumes",
                "Apply to 1,000 Jobs Automatically",
                "No Tech Skills Needed!"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full group mt-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};