import "./firstSection.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FirstSection = ({ startNow = false }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startNow) {
      setStartAnimation(true);
      return;
    }
    // Fallback: if no preloader signal, start after a short delay
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [startNow]);

  return (
    <div className="FirstSectionWarpper" id="Background_Add">
      <div className="InnerSectionWrapper">
        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={
            startAnimation
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                  },
                }
              : {}
          }
          className="InnerWapper"
        >
          Shaping the Future with Precision
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={
            startAnimation
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                    delay: 0.3, // delay between two lines if needed
                  },
                }
              : {}
          }
          className="InnerWapper"
          id="Wrap"
        >
          Aluminium Extrusions
        </motion.p>
      </div>
    </div>
  );
};

export default FirstSection;
