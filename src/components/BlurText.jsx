import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const BlurText = ({ text, delay = 0, stagger = 0.1, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={isInView ? {
            filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
            opacity: [0, 0.5, 1],
            y: [50, -5, 0],
          } : {}}
          transition={{
            duration: 0.7, // 0.35s * 2 steps
            delay: delay + index * stagger,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
          className="inline-block mr-[0.2em] mb-[0.1em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
