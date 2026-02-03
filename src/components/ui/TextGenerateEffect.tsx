"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  // Variants for parent div to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each word
  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: filter ? "blur(10px)" : "none",
    },
    visible: {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <motion.div
          className="dark:text-white text-white leading-snug tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              variants={wordVariants}
              className={`${
                idx > 3 ? "text-purple-300" : "dark:text-white text-white"
              } inline-block`}
              style={{
                marginRight: "0.25rem",
                textShadow: `
  0 2px 8px rgba(0,0,0,0.4),
  0 8px 24px rgba(0,0,0,0.3),
  0 16px 48px rgba(0,0,0,0.22)
`,
              }} // keep spacing between words
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
