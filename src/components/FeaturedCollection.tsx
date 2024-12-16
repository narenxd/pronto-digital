import { Button } from "./ui/button";

const collections = [
  {
    title: "Royal Kanchipuram Silk",
    image: "/lovable-uploads/eba10039-94a3-419f-892b-dd5970bbb88d.png",
    description: "Exquisite silk sarees with traditional temple borders and rich zari work",
    price: "From ₹35,999"
  },
  {
    title: "Contemporary Silk",
    image: "/lovable-uploads/65af042f-e798-4f89-9f37-d5b3399eec35.png",
    description: "Modern silk sarees with a perfect blend of tradition and contemporary design",
    price: "From ₹28,999"
  },
  {
    title: "Fusion Collection",
    image: "/lovable-uploads/ff476503-31c7-4bd9-8ec4-0f7fb1714bca.png",
    description: "Innovative designs combining classic silk with modern aesthetics",
    price: "From ₹32,999"
  }
];

export const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600">Discover our most sought-after silk sarees, each piece a testament to timeless elegance and craftsmanship</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-sm mb-3 opacity-90">{collection.description}</p>
                  <p className="text-lg font-semibold mb-4">{collection.price}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};