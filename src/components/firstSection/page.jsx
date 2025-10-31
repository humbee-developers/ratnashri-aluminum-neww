import "./firstSection.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FirstSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 13000); // 8 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, []);

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
