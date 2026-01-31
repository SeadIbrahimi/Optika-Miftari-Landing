import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";
import { Mail, Linkedin, ArrowRight, MessageSquare } from "lucide-react";
import { AnimatedLines } from "@/app/components/AnimatedLines";

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <AnimatedLines />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-sm text-teal-700 mb-8">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Interested in collaboration, technology partnerships, or scaling
            optical services? We'd love to hear from you and explore
            opportunities together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://www.linkedin.com/company/miftari-optical/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:krenar@optikamiftari.com"
              className="group inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all border border-gray-200 shadow-sm w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              krenar@optikamiftari.com
            </a>
          </div>

          <div className="pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-4 font-medium">Direct Contact</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>krenar@optikamiftari.com</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-teal-600" />
                <span>Miftari Optical on LinkedIn</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
