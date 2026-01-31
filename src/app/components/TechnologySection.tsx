import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { Cpu, Database, Workflow, BarChart3 } from "lucide-react";
import { AnimatedLines } from "@/app/components/AnimatedLines";
import lensImage from "../../assets/lenses.jpeg";

const technologies = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Implementing AI for inventory optimization, demand forecasting, and quality control automation.",
  },
  {
    icon: Database,
    title: "Digital Systems",
    description:
      "Modern ERP and CRM systems that streamline operations and improve customer experience.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automated production workflows reduce errors and accelerate turnaround times.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Business intelligence tools provide actionable insights for strategic decision-making.",
  },
];

export function TechnologySection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="technology"
      ref={ref}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <AnimatedLines />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={lensImage}
                alt="Optical Lenses"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium mb-6">
              Technology & Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Investing in Tomorrow's
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Optical Solutions
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We actively explore and implement automation, digital systems, and
              AI-driven tools that improve operational efficiency and elevate
              optical services for the future.
            </p>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
