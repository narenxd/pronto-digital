import { Bot, Brain, Rocket, TrendingUp } from "lucide-react";
import { useState } from "react";

export const ProblemSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    {
      problem: "Manual processes eating your time?",
      solution: "AI automation cuts workload by 50%",
      icon: Bot,
      description: "Automate repetitive tasks and focus on strategy with AI-powered workflows",
      gradient: "from-primary/20 via-primary/10 to-transparent"
    },
    {
      problem: "Struggling to keep up with AI trends?",
      solution: "Fractional CMO guidance",
      icon: Brain,
      description: "Get expert guidance on implementing the latest AI marketing technologies",
      gradient: "from-primary/30 via-primary/15 to-transparent"
    },
    {
      problem: "No in-house marketing expertise?",
      solution: "Done-for-you content & ads",
      icon: Rocket,
      description: "Let our team handle your entire marketing operation with AI efficiency",
      gradient: "from-primary/40 via-primary/20 to-transparent"
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-primary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Solutions That Scale</span>
          </div>
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
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-accent/30 backdrop-blur-sm border border-white/5"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                <div 
                  className={`mb-8 p-6 rounded-full bg-primary/20 transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 bg-primary/30' : ''
                  }`}
                >
                  <item.icon className={`w-12 h-12 transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-primary' : 'text-white/80'
                  }`} />
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

                {/* Netflix-style hover line animation */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};