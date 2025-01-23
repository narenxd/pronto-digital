import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  company: z.string().min(2, "Company name is required"),
  challenges: z.string().min(10, "Please describe your challenges"),
  budget: z.string().min(1, "Please select your budget"),
});

export const Hero = () => {
  const { toast } = useToast();
  const [captchaToken, setCaptchaToken] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      challenges: "",
      budget: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!captchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the captcha verification",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
    setIsDialogOpen(false);
    console.log(data);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-primary/20"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transform Your Marketing with AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Supercharge Your Growth
              <span className="block text-primary mt-2">With AI-Powered Marketing</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join 200+ businesses achieving 3x ROI with our AI-driven marketing solutions. 
              Ready to scale your business?
            </p>

            <Button 
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full group"
            >
              Get Your Free AI Marketing Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-accent/80 backdrop-blur-md border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">Discover Your Growth Potential</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 000-0000" 
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

              <FormField
                control={form.control}
                name="challenges"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">What are your main marketing challenges?</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Tell us about your current challenges..." 
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
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Monthly Marketing Budget</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="w-full bg-white/10 border-white/20 text-white rounded-md px-3 py-2"
                        >
                          <option value="">Select budget range</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <div className="flex justify-center">
                <HCaptcha
                  sitekey="10000000-ffff-ffff-ffff-000000000001"
                  onVerify={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold"
              >
                Get Your Free Analysis
                <Bot className="ml-2" />
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
