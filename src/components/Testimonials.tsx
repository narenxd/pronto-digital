import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion Blogger",
    content: "The quality and craftsmanship of these sarees are exceptional. Each piece feels like a work of art.",
    rating: 5,
    gradient: "from-rose-500/10 to-teal-500/10"
  },
  {
    name: "Anita Desai",
    role: "Wedding Planner",
    content: "I always recommend this collection to my clients. The bridal series is absolutely stunning.",
    rating: 5,
    gradient: "from-fuchsia-500/10 to-blue-500/10"
  },
  {
    name: "Maya Patel",
    role: "Art Curator",
    content: "The fusion of traditional motifs with modern designs is perfectly executed. Truly unique pieces.",
    rating: 5,
    gradient: "from-violet-500/10 to-amber-500/10"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-gray-400">Hear from our valued customers about their experience with our collections</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className={`p-8 hover:shadow-xl transition-shadow duration-500 bg-gradient-to-br ${testimonial.gradient} border-gray-800 bg-gray-900/50`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 text-lg italic">{testimonial.content}</p>
              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};