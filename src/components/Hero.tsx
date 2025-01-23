import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL").optional(),
});

export const Hero = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Audit Request Received!",
      description: "We'll analyze your marketing and get back to you within 24 hours.",
    });
    console.log(data);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A2463] to-[#3CBBB1]">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Marketing Solutions</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Scale Your Marketing
                <span className="block text-[#3CBBB1]">10x Faster with AI & CMO Expertise</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-xl">
                Pronto Digital delivers done-for-you SEO, content creation, and automation—no hiring headaches, no wasted budgets.
              </p>
            </div>
            
            <div className="flex items-center gap-8 text-white/80">
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

            <Button 
              size="lg" 
              className="bg-[#3CBBB1] hover:bg-[#3CBBB1]/90 text-white border-2 border-[#3CBBB1] hover:border-[#3CBBB1]/90 text-lg group"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Audit Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free AI Marketing Audit</h3>
                <p className="text-white/80">Discover untapped growth opportunities in 24 hours</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Work Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@company.com" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Company Website</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://company.com" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-[#0A2463] hover:bg-white/90 text-lg font-semibold"
                  >
                    Get Free Audit
                    <Bot className="ml-2" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};