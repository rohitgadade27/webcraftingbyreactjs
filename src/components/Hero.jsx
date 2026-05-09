import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { BlurText } from "./BlurText";


export const Hero = () => {
  const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

  return (
    <section id="home" className="relative w-full h-[75vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video (Local) */}
      <video
        src="/gemini_generated_video_62FD570C.mov"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover object-center scale-110 md:scale-100"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black to-transparent z-[15] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center w-full px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto">


        {/* Heading */}
        <div className="mb-8 w-full max-w-4xl mx-auto">
          <BlurText
            text="Build Your Business Website with Vexiqon"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading !text-white leading-[0.9] tracking-tight justify-center"
            delay={0.1}
            stagger={0.08}
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-lg !text-white/70 font-body font-light leading-relaxed max-w-2xl mb-10 px-4"
        >
          Modern, fast, and scalable websites for your business growth. Powered by cutting-edge React and AI technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6"
        >
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="liquid-glass-strong w-full sm:w-auto rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white w-full sm:w-auto text-black rounded-full px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all flex items-center justify-center"
          >
            View Pricing
          </button>
        </motion.div>

        {/* Satisfaction Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-1"
        >
          <span className="text-4xl font-heading !text-white">99%</span>
          <span className="text-[10px] uppercase tracking-[0.4em] !text-white/60 font-bold">Satisfaction</span>
        </motion.div>
      </div>


    </section>

  );
};
