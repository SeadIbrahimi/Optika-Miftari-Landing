import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { Building2, Target, Rocket, Award } from "lucide-react";
import { AnimatedLines } from "@/app/components/AnimatedLines";
import labImage from "../../assets/lab.jpeg";
import glassesImage from "../../assets/glasses_sun.jpeg";

const highlights = [
  {
    icon: Building2,
    title: "Independent & Agile",
    description:
      "As an independent business, we move fast and make clear decisions without corporate bureaucracy.",
  },
  {
    icon: Target,
    title: "Strategic Vision",
    description:
      "Long-term thinking drives our investments in people, technology, and partnerships.",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description:
      "Continuously exploring new markets, technologies, and collaboration opportunities.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "20+ years of operational excellence and satisfied customers across multiple markets.",
  },
];

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <AnimatedLines />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-6">
              Why Miftari Optical
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Built on Experience.
              <br />
              Focused on the Future.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over{" "}
              <span className="font-semibold text-gray-900">
                20 years of operational experience
              </span>{" "}
              in the optical industry, Miftari Optical operates at the
              intersection of traditional craftsmanship, cutting-edge
              technology, and smart business development.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We build partnerships based on{" "}
              <span className="font-semibold text-gray-900">
                transparency, reliability, and shared long-term value
              </span>
              . Our independent structure allows us to be flexible, responsive,
              and aligned with our partners' success.
            </p>

            <div className="flex gap-4 pt-6 ">
              <div className="flex-1">
                <div className="text-3xl font-bold text-teal-600 mb-1">
                  Kosovo
                </div>
                <div className="text-sm text-gray-600">
                  Headquarters & Retail
                </div>
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-teal-600 mb-1">
                  Sweden
                </div>
                <div className="text-sm text-gray-600">Market Presence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-evenly flex-col md:flex-row items-center gap-6"
          >
            <img
              src={labImage}
              alt="Optical Lab"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-lg"
            />
            <img
              src={glassesImage}
              alt="Premium Eyewear"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="bg-teal-50 text-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
