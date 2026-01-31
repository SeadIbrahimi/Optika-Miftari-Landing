import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Store, Factory, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { AnimatedLines } from '@/app/components/AnimatedLines';

const services = [
  {
    icon: Store,
    title: 'Premium Optical Retail',
    description: 'Customer-focused optical retail built on trust, clinical precision, and long-term relationships.',
    features: [
      'Personalized vision care consultations',
      'Curated eyewear collections',
      'Advanced eye examination technology',
      'Post-purchase support & adjustments',
    ],
  },
  {
    icon: Factory,
    title: 'In-House Lens Laboratory',
    description: 'State-of-the-art lens production facility serving both retail and B2B optical partners.',
    features: [
      'Fast turnaround times',
      'Quality control at every stage',
      'Wide range of lens types & coatings',
      'Scalable production capacity',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Innovation & Growth',
    description: 'Continuous investment in technology, automation, and AI-driven solutions for the optical industry.',
    features: [
      'Digital workflow optimization',
      'AI-powered inventory management',
      'Automated production systems',
      'Data-driven business insights',
    ],
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Every decision prioritizes customer experience and satisfaction.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control ensures consistent excellence.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Optimized processes deliver results quickly without compromise.',
  },
];

export function ServicesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <AnimatedLines />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-6">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive Optical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From retail excellence to advanced lens production, we deliver end-to-end optical services 
            that combine traditional craftsmanship with modern innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-200/50">
                <div className="bg-teal-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 p-6 bg-teal-50/50 rounded-xl border border-teal-100/50"
            >
              <div className="bg-teal-600 text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}