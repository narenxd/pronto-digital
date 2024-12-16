import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;