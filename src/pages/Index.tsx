import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { TimedOffers } from "@/components/TimedOffers";
import { SaleTeaser } from "@/components/SaleTeaser";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <TimedOffers />
      <CaseStudies />
      <SaleTeaser />
      <FeaturedCollection />
      <Testimonials />
      <FinalCTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;