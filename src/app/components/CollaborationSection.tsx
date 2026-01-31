import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Building2, Cog, Brain, Globe, Handshake, TrendingUp, Target, Shield } from 'lucide-react';
import { AnimatedLines } from '@/app/components/AnimatedLines';

const collaborationAreas = [
  {
    icon: Building2,
    title: 'Lens Lab Cooperation',
    description: 'Partnership opportunities for lens production, outsourcing, and capacity sharing.',
    details: [
      'White-label production',
      'Capacity overflow support',
      'Technical collaboration',
    ],
  },
  {
    icon: Cog,
    title: 'Production Technology',
    description: 'Collaboration on machinery, lab technology, and production optimization.',
    details: [
      'Equipment partnerships',
      'Technology transfer',
      'Process optimization',
    ],
  },
  {
    icon: Brain,
    title: 'Digital Innovation',
    description: 'Joint development of optical software, AI tools, and workflow automation.',
    details: [
      'Software integration',
      'AI implementation',
      'Digital transformation',
    ],
  },
  {
    icon: Globe,
    title: 'Cross-Border Services',
    description: 'B2B optical services and distribution across European markets.',
    details: [
      'Market expansion',
      'Distribution networks',
      'Regional partnerships',
    ],
  },
];

const partnershipValues = [
  {
    icon: Handshake,
    title: 'Mutual Benefit',
    description: 'Win-win partnerships where all parties grow together through shared success.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Thinking',
    description: 'Strategic relationships built for sustained growth, not quick wins.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Target,
    title: 'Clear Objectives',
    description: 'Well-defined goals and milestones that guide our collaboration forward.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Open communication and honest dealings form the foundation of our partnerships.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function CollaborationSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="collaboration" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <AnimatedLines />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-6">
            Strategic Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Open to Collaboration
            <br />
            <span className="text-teal-600">Across Europe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are actively seeking strategic partners and collaborators across Europe 
            to expand capabilities, share expertise, and build the future of optical services together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {collaborationAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Philosophy - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Partnership Philosophy
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strong partnerships are built on mutual benefit, technical understanding, and long-term thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`} />
                  
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full border border-teal-100">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Ready to explore collaboration opportunities
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
