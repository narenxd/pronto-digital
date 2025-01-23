import { Robot, Users, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "ai-automation",
    title: "AI-Powered SEO & Ads",
    icon: Robot,
    features: ["Predictive analytics", "Multi-channel automation", "24/7 campaign optimization", "Real-time performance tracking"],
    price: "Starting at $2,500/mo"
  },
  {
    id: "fractional-cmo",
    title: "Fractional CMO Services",
    icon: Users,
    features: ["Strategic planning", "Market analysis", "Growth roadmapping", "KPI tracking & reporting"],
    price: "Starting at $3,500/mo"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: PenTool,
    features: ["AI-assisted writing", "SEO optimization", "Multi-format content", "Social media management"],
    price: "Starting at $1,500/mo"
  }
];

export const Services = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Trusted by 200+ SMBs
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="ai-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <Card className="border-none shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-accent inline-block">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-600 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-semibold text-primary mb-4">{service.price}</p>
                </CardContent>
                <CardFooter className="justify-center pb-8">
                  <Button size="lg">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};