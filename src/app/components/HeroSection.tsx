import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedGeometricPattern } from "@/app/components/AnimatedGeometricPattern";
import { AnimatedLines } from "@/app/components/AnimatedLines";
import { FloatingElements } from "@/app/components/FloatingElements";
import logoImage from "../../assets/Logo.png";
import presentationVideo from "../../assets/presentation.mp4";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pt-20"
    >
      {/* Animated Lines Background */}
      <AnimatedLines />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <AnimatedGeometricPattern />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
      {/* <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" /> */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          {/* Left Content - Text First on Mobile */}
          <div className="text-center lg:col-span-2 lg:text-left order-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-sm text-teal-700 mb-6 lg:mb-8"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                Based in Kosovo • Active in Sweden • Serving Europe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight tracking-tight"
            >
              Independent Optical
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Retail & Lens Lab
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Modern optical business combining premium retail experience,
              in-house lens production, and a strategic vision for European
              collaboration. Built on 20+ years of expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="https://www.linkedin.com/company/optika-miftari"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl hover:shadow-teal-500/25 w-full sm:w-auto justify-center"
              >
                Connect on LinkedIn
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:krenar@optikamiftari.com"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-gray-50 transition-all border border-gray-200 shadow-sm hover:shadow-md w-full sm:w-auto justify-center"
              >
                Schedule a Conversation
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-200/70"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                  2
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  Active Markets
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                  B2C+B2B
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  Service Models
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Video with Faded Edges (Second on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-2"
          >
            <div className="relative">
              {/* Video Container with Faded Edges */}
              <div className="relative">
                {/* The video */}
                <div className="relative rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-2xl"
                  >
                    <source src={presentationVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(0,0,0,0.05)] pointer-events-none" />
              </div>

              {/* Floating Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-gray-100">
                  <img
                    src={logoImage}
                    alt="Miftari Optical"
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
              </motion.div>

              {/* Floating Sparkle */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-gradient-to-br from-teal-500 to-cyan-500 p-2 sm:p-3 rounded-full shadow-lg z-20"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>

              {/* Decorative gradient blobs behind video */}
              <div className="absolute -z-10 top-4 -left-4 sm:top-8 sm:-left-8 w-full h-full rounded-3xl bg-gradient-to-br from-teal-200/50 to-cyan-200/50 blur-sm" />
              <div className="absolute -z-20 top-8 -left-8 sm:top-16 sm:-left-16 w-full h-full rounded-3xl bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 blur-md" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-teal-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
