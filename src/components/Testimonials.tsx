import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion Blogger",
    content: "The quality and craftsmanship of these sarees are exceptional. Each piece feels like a work of art.",
    rating: 5
  },
  {
    name: "Anita Desai",
    role: "Wedding Planner",
    content: "I always recommend this collection to my clients. The bridal series is absolutely stunning.",
    rating: 5
  },
  {
    name: "Maya Patel",
    role: "Art Curator",
    content: "The fusion of traditional motifs with modern designs is perfectly executed. Truly unique pieces.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Hear from our valued customers about their experience with our collections</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};