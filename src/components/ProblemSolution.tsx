import { Clock, Cpu, Users } from "lucide-react";
import { useState } from "react";

export const ProblemSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    {
      problem: "Manual processes eating your time?",
      solution: "AI automation cuts workload by 50%",
      icon: Clock,
      description: "Automate repetitive tasks and focus on strategy with AI-powered workflows",
      image: "/lovable-uploads/65af042f-e798-4f89-9f37-d5b3399eec35.png"
    },
    {
      problem: "Struggling to keep up with AI trends?",
      solution: "Fractional CMO guidance",
      icon: Cpu,
      description: "Get expert guidance on implementing the latest AI marketing technologies",
      image: "/lovable-uploads/9f3dd44c-c57f-4a4c-b133-1e370d37c193.png"
    },
    {
      problem: "No in-house marketing expertise?",
      solution: "Done-for-you content & ads",
      icon: Users,
      description: "Let our team handle your entire marketing operation with AI efficiency",
      image: "/lovable-uploads/e7a9c04b-1abf-428e-97a9-4c0515c98e3a.png"
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-primary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Common Challenges, <span className="text-primary">Solved</span>
          </h2>
          <p className="text-gray-400">
            We combine AI technology with marketing expertise to solve your biggest challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.problem}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                <div 
                  className={`mb-8 p-4 rounded-full bg-primary/20 transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110' : ''
                  }`}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {hoveredIndex === index ? item.solution : item.problem}
                  </h3>
                  
                  <p className={`text-gray-300 transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};