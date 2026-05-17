import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo.jsx";

export const FeaturesChess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Website Development",
      body: "Custom websites built with modern React and Next.js. Fully responsive. Tailored to your specific business needs.",
      button: "Get Started",
      gif: "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif",
    },
    {
      title: "E-Commerce Solutions",
      body: "Complete e-commerce platforms with payment integration, inventory, and admin panels. Scale your online store with ease.",
      button: "Get Started",
      gif: "/images/service_ecommerce.png",
    },
    {
      title: "3D Animation Website",
      body: "Immersive 3D experiences powered by Three.js and React Three Fiber. Interactive scenes that captivate visitors.",
      button: "Get Started",
      video: "/gemini_generated_video_62FD570C.mov",
    },
    {
      title: "Custom Web Apps",
      body: "Powerful web applications with real-time features, dashboards, and complex functionality. Built for performance.",
      button: "Get Started",
      gif: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    },
    {
      title: "UI/UX Design",
      body: "Beautiful, intuitive designs that convert visitors into customers. User-focused approach with rapid prototyping.",
      button: "Get Started",
      gif: "/images/service_uiux_design.png",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="pt-0 pb-32 bg-black px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 min-h-[500px]"
            >
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-white/60 font-body font-light text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                    {services[currentIndex].body}
                  </p>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="liquid-glass-strong rounded-full px-8 py-3.5 text-white font-medium hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    {services[currentIndex].button}
                  </button>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl"
                >
                  {services[currentIndex].video ? (
                    <div className="absolute inset-0">
                      <HlsVideo
                        src={services[currentIndex].video}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <img
                      src={services[currentIndex].gif}
                      alt={services[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between mt-16">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="liquid-glass-strong p-3 rounded-full text-white hover:bg-white/10 transition-all active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="liquid-glass-strong p-3 rounded-full text-white hover:bg-white/10 transition-all active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
