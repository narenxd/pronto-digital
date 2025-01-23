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
    },
    {
      problem: "Struggling to keep up with AI trends?",
      solution: "Fractional CMO guidance",
      icon: Cpu,
      description: "Get expert guidance on implementing the latest AI marketing technologies",
    },
    {
      problem: "No in-house marketing expertise?",
      solution: "Done-for-you content & ads",
      icon: Users,
      description: "Let our team handle your entire marketing operation with AI efficiency",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Common Challenges, Solved</h2>
          <p className="text-gray-600">We combine AI technology with marketing expertise to solve your biggest challenges</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-500 border border-accent hover:border-secondary"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-4 rounded-full bg-accent/30 group-hover:bg-secondary/10 transition-colors duration-500">
                  <item.icon
                    className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500"
                  />
                </div>

                <div className="min-h-[120px] flex flex-col items-center justify-center">
                  <div className="relative mb-2">
                    <h3 className="text-xl font-semibold text-primary leading-tight">
                      {item.problem.split(' ').map((word, i) => (
                        <span
                          key={i}
                          className={`block transition-all duration-500 ${
                            hoveredIndex === index
                              ? "opacity-0 transform -translate-y-2"
                              : "opacity-100 transform translate-y-0"
                          }`}
                        >
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <div className="relative">
                    <p
                      className={`text-xl font-semibold text-secondary transition-all duration-500 absolute top-0 left-0 w-full ${
                        hoveredIndex === index
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-2"
                      }`}
                    >
                      {item.solution}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mt-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};