import { Card } from "@/components/ui/card";

const collections = [
  {
    title: "Temple Collection",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Inspired by ancient temple architecture"
  },
  {
    title: "Contemporary Fusion",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Modern designs with traditional touches"
  },
  {
    title: "Bridal Series",
    image: "https://images.unsplash.com/photo-1610030469629-dc6b53aa7ac1",
    description: "Luxurious pieces for special occasions"
  }
];

export const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent/20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.title} className="group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-gray-600">{collection.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};