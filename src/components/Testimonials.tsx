import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion Blogger",
    content: "The quality and craftsmanship of these sarees are exceptional. Each piece feels like a work of art.",
    rating: 5,
    gradient: "from-primary/10 to-primary/5"
  },
  {
    name: "Anita Desai",
    role: "Wedding Planner",
    content: "I always recommend this collection to my clients. The bridal series is absolutely stunning.",
    rating: 5,
    gradient: "from-primary/15 to-primary/5"
  },
  {
    name: "Maya Patel",
    role: "Art Curator",
    content: "The fusion of traditional motifs with modern designs is perfectly executed. Truly unique pieces.",
    rating: 5,
    gradient: "from-primary/20 to-primary/5"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <h2 className="text-lg font-semibold text-primary tracking-wide">TESTIMONIALS</h2>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-lg text-white/70">Discover why our customers love our collection</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className={`p-8 hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${testimonial.gradient} border-gray-800 bg-black/50 hover:border-gray-700`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 mb-8 text-lg font-medium leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};