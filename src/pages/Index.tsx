import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimedOffers } from "@/components/TimedOffers";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TimedOffers />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;