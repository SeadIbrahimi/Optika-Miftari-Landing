import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { Play, Eye, Sparkles } from "lucide-react";

import dioptryVideo from "../../assets/dioptry_demo.mp4";

export function VideoPresentation() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="presentation"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500 rounded-full filter blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full filter blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-4 sm:mb-6 border border-teal-500/30">
            <Play className="w-4 h-4" />
            <span>See Us In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Experience Our
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Optical Excellence
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Watch how we transform high-dioptric prescriptions into stylish,
            comfortable eyewear using our state-of-the-art lens laboratory.
          </p>
        </motion.div>

        {/* Video Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">17.0 Dioptry Demo</span>
          </div>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl opacity-50 blur-sm" />

            <div className="relative bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden">
              <video
                className="w-full h-auto aspect-video object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={dioptryVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 sm:mt-6 text-center px-2"
          >
            <p className="text-gray-400 text-sm sm:text-base">
              See how we craft high-index lenses for extreme prescriptions (17.0
              dioptry) maintaining both aesthetics and visual clarity.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Cards Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Precision Craftsmanship
            </h3>
            <p className="text-gray-400 text-sm">
              Every lens is crafted with meticulous attention to detail in our
              in-house laboratory.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              High-Index Technology
            </h3>
            <p className="text-gray-400 text-sm">
              Advanced lens materials for thinner, lighter lenses even at
              extreme prescriptions.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-emerald-500/50 transition-colors sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Modern Experience
            </h3>
            <p className="text-gray-400 text-sm">
              A welcoming retail environment where technology meets personalized
              care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
