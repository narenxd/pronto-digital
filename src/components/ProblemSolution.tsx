import { Clock, Cpu, Users } from "lucide-react";
import { useState } from "react";

export const ProblemSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    {
      problem: "Manual processes eating your time?",
      solution: "AI automation cuts workload by 50%",
      icon: Clock,
      color: "group-hover:text-[#3CBBB1]",
    },
    {
      problem: "Struggling to keep up with AI trends?",
      solution: "Fractional CMO guidance",
      icon: Cpu,
      color: "group-hover:text-[#3CBBB1]",
    },
    {
      problem: "No in-house marketing expertise?",
      solution: "Done-for-you content & ads",
      icon: Users,
      color: "group-hover:text-[#3CBBB1]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-accent hover:bg-accent/80 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white/80 backdrop-blur-sm">
                  <item.icon
                    className={`w-8 h-8 transition-colors duration-300 ${item.color}`}
                  />
                </div>

                <div className="relative h-16">
                  <h3
                    className={`absolute w-full text-xl font-semibold transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-0 transform -translate-y-2"
                        : "opacity-100 transform translate-y-0"
                    }`}
                  >
                    {item.problem}
                  </h3>
                  <p
                    className={`absolute w-full text-xl font-semibold text-[#3CBBB1] transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-2"
                    }`}
                  >
                    {item.solution}
                  </p>
                </div>

                <p className="text-gray-600 mt-4">
                  Transform your marketing strategy with our expert-led,
                  AI-powered solutions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};