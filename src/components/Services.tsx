import { Bot, Users, PenTool, CheckCircle, ArrowRight, Zap, BarChart3, Target, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "ai-automation",
    title: "AI-Powered SEO & Ads",
    icon: Bot,
    description: "Leverage cutting-edge AI technology to optimize your digital marketing campaigns and maximize ROI.",
    features: [
      "AI-driven keyword research and optimization",
      "Automated bid management and campaign optimization",
      "Real-time performance tracking and analytics",
      "Multi-channel campaign automation",
      "Predictive analytics for market trends",
      "24/7 campaign monitoring and adjustments",
      "Competitor analysis and benchmarking",
      "Custom reporting and insights dashboard"
    ],
    benefits: [
      "Increase ROAS by up to 40%",
      "Save 15+ hours per week on campaign management",
      "Improve conversion rates by 25%"
    ],
    price: "Starting at $2,500/mo",
    idealFor: "E-commerce, SaaS, and service-based businesses looking to scale their digital presence."
  },
  {
    id: "fractional-cmo",
    title: "Fractional CMO Services",
    icon: Users,
    description: "Get executive-level marketing leadership without the full-time cost. Strategic guidance when you need it.",
    features: [
      "Comprehensive marketing strategy development",
      "Market analysis and competitive positioning",
      "Growth roadmap creation and execution",
      "Marketing team leadership and mentoring",
      "Budget optimization and ROI tracking",
      "Brand development and positioning",
      "Marketing tech stack optimization",
      "Monthly performance reviews and adjustments"
    ],
    benefits: [
      "Save 70% compared to full-time CMO",
      "Access to enterprise-level expertise",
      "Faster market adaptation and growth"
    ],
    price: "Starting at $3,500/mo",
    idealFor: "Growing businesses needing strategic marketing leadership without full-time executive costs."
  },
  {
    id: "content-creation",
    title: "Content Creation & Strategy",
    icon: PenTool,
    description: "Data-driven content that engages your audience and drives conversions across all channels.",
    features: [
      "AI-assisted content writing and optimization",
      "SEO-optimized blog posts and articles",
      "Social media content creation and management",
      "Email marketing campaigns",
      "Video script writing and production",
      "Infographic and visual content design",
      "Content performance analytics",
      "Content calendar management"
    ],
    benefits: [
      "2x increase in organic traffic",
      "40% higher engagement rates",
      "Consistent brand messaging"
    ],
    price: "Starting at $1,500/mo",
    idealFor: "Businesses looking to establish authority and drive organic growth through quality content."
  }
];

const benefitIcons = {
  performance: BarChart3,
  target: Target,
  innovation: Brain
};

export const Services = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black to-accent/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 mb-6">Transform Your Digital Presence with AI-Powered Solutions</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm py-1.5 px-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Trusted by 200+ SMBs
            </Badge>
            <Badge variant="secondary" className="text-sm py-1.5 px-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              AI-Powered Solutions
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="ai-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="animate-fade-in">
              <Card className="border-none bg-black/40 backdrop-blur-sm shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 inline-block">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-primary mb-3">{service.title}</CardTitle>
                  <p className="text-gray-300 text-lg">{service.description}</p>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-4">Key Benefits</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-gray-300 bg-primary/5 p-3 rounded-lg animate-fade-in"
                            style={{ animationDelay: `${(index + 8) * 100}ms` }}
                          >
                            <Target className="w-5 h-5 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                        <h4 className="text-lg font-semibold text-primary mb-2">Ideal For</h4>
                        <p className="text-gray-300">{service.idealFor}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4 pb-8">
                  <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                  <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-xl">
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Data-Driven Results</h3>
            <p className="text-gray-300">Every strategy backed by comprehensive analytics and measurable outcomes</p>
          </div>
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-xl">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Targeted Solutions</h3>
            <p className="text-gray-300">Customized strategies aligned with your specific business goals and industry</p>
          </div>
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-xl">
            <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">AI Innovation</h3>
            <p className="text-gray-300">Cutting-edge AI technology to keep you ahead of market trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};