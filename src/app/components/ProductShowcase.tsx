import { motion } from "motion/react";
import { useInView } from "@/app/hooks/useInView";

import stylishGlasses1 from "../../assets/stylish_glasses_1.jpeg";
import stylishGlasses2 from "../../assets/stylish_glasses_2.jpeg";
import glassesImage from "../../assets/glasses_sun.jpeg";
import labImage from "../../assets/lab.jpeg";
import img1 from "../../assets/image.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

const showcaseImages = [
  { src: img1, alt: "Image 1", label: "Image 1" },
  { src: img2, alt: "Image 2", label: "Image 2" },
  { src: img3, alt: "Image 3", label: "Image 3" },
  { src: img4, alt: "Image 4", label: "Image 4" },
  { src: img5, alt: "Image 5", label: "Image 5" },
  { src: img6, alt: "Image 6", label: "Image 6" },
  { src: img7, alt: "Image 7", label: "Image 7" },
];

// Duplicate array for seamless infinite scroll
const duplicatedImages = [
  ...showcaseImages,
  ...showcaseImages,
  ...showcaseImages,
  ...showcaseImages,
  ...showcaseImages,
  ...showcaseImages,
];

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
            From high-dioptric precision lenses to stylish designer frames, we
            deliver optical excellence for every vision need.
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
