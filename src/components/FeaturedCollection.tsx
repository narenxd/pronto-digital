import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Temple Collection",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Inspired by ancient temple architecture and traditional motifs",
    price: "From ₹15,999"
  },
  {
    title: "Contemporary Fusion",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Modern designs with a perfect blend of traditional elements",
    price: "From ₹12,999"
  },
  {
    title: "Bridal Series",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Luxurious pieces for your special occasions",
    price: "From ₹25,999"
  }
];

export const FeaturedCollection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600">Discover our most sought-after pieces, crafted with precision and adorned with traditional motifs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.title} className="group overflow-hidden border-none shadow-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{collection.price}</span>
                  <Button variant="ghost" className="hover:text-primary">View Collection</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};