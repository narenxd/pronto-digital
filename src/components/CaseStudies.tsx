import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { ChartBarIcon, Star, Video, ArrowUp, User } from "lucide-react";

const caseStudies = [
  {
    metrics: {
      roi: "150%",
      timeframe: "3 months",
      hours: "20",
    },
    client: {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      quote: "Pronto's AI-driven ads saved us 20 hours/week while delivering exceptional results.",
    },
    videoUrl: "https://example.com/testimonial1.mp4", // Placeholder URL
  },
  {
    metrics: {
      roi: "200%",
      timeframe: "6 months",
      hours: "25",
    },
    client: {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "Growth Dynamics",
      quote: "The AI automation suite transformed our marketing operations completely.",
    },
    videoUrl: "https://example.com/testimonial2.mp4", // Placeholder URL
  },
  {
    metrics: {
      roi: "180%",
      timeframe: "4 months",
      hours: "15",
    },
    client: {
      name: "Emily Watson",
      role: "Digital Strategy Head",
      company: "Innovate Corp",
      quote: "The predictive analytics helped us stay ahead of market trends consistently.",
    },
    videoUrl: "https://example.com/testimonial3.mp4", // Placeholder URL
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <h2 className="text-lg font-semibold text-primary tracking-wide">CASE STUDIES</h2>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Real Results, Real Impact</h2>
          <p className="text-lg text-white/70">See how we've transformed businesses through AI-powered marketing</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="p-8 bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Metrics Section */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                          <ChartBarIcon className="w-6 h-6" />
                          <h3 className="text-xl font-semibold">Performance Metrics</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <ArrowUp className="w-5 h-5 text-green-500" />
                            <p className="text-white">
                              Increased ROI by <span className="text-green-500 font-bold">{study.metrics.roi}</span> in {study.metrics.timeframe}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <p className="text-white">
                              Saved <span className="text-yellow-500 font-bold">{study.metrics.hours} hours</span> per week
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Client Quote */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                          <User className="w-6 h-6" />
                          <h3 className="text-xl font-semibold">Client Testimonial</h3>
                        </div>
                        <blockquote className="border-l-2 border-primary pl-4 italic text-white/80">
                          "{study.client.quote}"
                        </blockquote>
                        <div className="text-white">
                          <p className="font-semibold">{study.client.name}</p>
                          <p className="text-sm text-white/60">{study.client.role}</p>
                          <p className="text-sm text-white/60">{study.client.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Video Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Video className="w-6 h-6" />
                        <h3 className="text-xl font-semibold">Video Testimonial</h3>
                      </div>
                      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800">
                        <p className="text-white/60">Video testimonial placeholder</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-gray-800">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-white font-semibold">Trusted by 200+ SMBs</span>
          </div>
        </div>
      </div>
    </section>
  );
};