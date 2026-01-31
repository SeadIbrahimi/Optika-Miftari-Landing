import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';

import stylishGlasses1 from '../../assets/stylish_glasses_1.jpeg';
import stylishGlasses2 from '../../assets/stylish_glasses_2.jpeg';
import glassesImage from '../../assets/glasses_sun.jpeg';
import labImage from '../../assets/lab.jpeg';
import lensesImage from '../../assets/lenses.jpeg';

const showcaseImages = [
  { src: stylishGlasses1, alt: 'High Index Stylish Glasses', label: 'High Index Lenses' },
  { src: stylishGlasses2, alt: 'Premium Dioptric Eyewear', label: 'Premium Dioptric' },
  { src: glassesImage, alt: 'Designer Sunglasses', label: 'Designer Sunglasses' },
  { src: labImage, alt: 'Optical Laboratory', label: 'Lens Laboratory' },
  { src: lensesImage, alt: 'Precision Lenses', label: 'Precision Optics' },
];

// Duplicate array for seamless infinite scroll
const duplicatedImages = [...showcaseImages, ...showcaseImages, ...showcaseImages];

export function ProductShowcase() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="showcase"
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-6">
            Our Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Craftsmanship Meets
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Modern Style
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From high-dioptric precision lenses to stylish designer frames,
            we deliver optical excellence for every vision need.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Gallery - Row 1 (Left to Right) */}
      <div className="relative mb-6">
        <div className="flex animate-scroll-left">
          {duplicatedImages.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-80 h-56 mx-3 group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium text-sm bg-teal-600/90 px-3 py-1 rounded-full">
                    {image.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Gallery - Row 2 (Right to Left) */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...duplicatedImages].reverse().map((image, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-72 h-48 mx-3 group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium text-sm bg-cyan-600/90 px-3 py-1 rounded-full">
                    {image.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
}
