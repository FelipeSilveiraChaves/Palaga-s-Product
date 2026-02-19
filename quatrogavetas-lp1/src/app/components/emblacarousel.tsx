"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { motion } from "motion/react";
import { useEffect, useCallback } from "react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.6 },
  } as const;


  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla iniciado");
    }
  }, [emblaApi]);

  return (
    <div className="w-screen">
      <div className="overflow-hidden" ref={emblaRef}>
        {/* container com margem negativa */}
        <div className="flex -ml-6">
          {/* slide: padding-left vira o “gap” */}
          <div className="pl-6 flex-[0_0_50%] min-w-0">
            <div className="bg-carbon-50 h-96 rounded-full flex items-center justify-center">
              Slide 1
            </div>
          </div>

          <div className="pl-6 flex-[0_0_50%] min-w-0">
            <div className="bg-carbon-50 h-96 rounded-full flex items-center justify-center">
              Slide 2
            </div>
          </div>

          <div className="pl-6 flex-[0_0_50%] min-w-0">
            <div className="bg-carbon-50 h-96 rounded-full flex items-center justify-center">
              Slide 3
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center gap-2 pt-4">
        <motion.button
          onClick={scrollPrev}
          {...motionProps}
          className="
            w-12 h-12 rounded-full 
            bg-carbon-800 text-carbon-0 
            flex items-center justify-center
          "
        >
          <FaChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={scrollNext}   
          {...motionProps}
          className="
            w-12 h-12 rounded-full 
            bg-carbon-800 text-carbon-0 
            flex items-center justify-center
          "
        >
          <FaChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}