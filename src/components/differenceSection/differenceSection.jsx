import "./differenceSection.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "../../images/sec1.png"; // Use your desired background image

function DifferenceSection() {
  return (
    <div className="DifferenceSec">
      <div className="DifferenceSecHeading">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
          className="HeadingSec"
        >
          <p>Our Difference</p>
        </motion.div>
        <div className="ContentSec">
          <p>Trusted by Visionaries. Proven by Performance.</p>
        </div>
      </div>

      {/* UPDATED SECTION */}
      <div className="ImageSectionMain">
        <div className="ImageSectionInner withBg">
          <div className="ImageSectionBox">
            <div className="centeredText">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <h2>10+</h2>
                <p>Years of Experience</p>
              </motion.div>
            </div>
          </div>
          <div className="ImageSectionBox">
            <div className="centeredText">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <h2>$20+</h2>
                <p>Million Turnover</p>
              </motion.div>
            </div>
          </div>
          <div className="ImageSectionBox">
            <div className="centeredText">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <h2>500+</h2>
                <p>Happy Customers</p>
              </motion.div>
            </div>
          </div>
          <div className="ImageSectionBox">
            <div className="centeredText">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <h2>10+</h2>
                <p>Quality Checkpoints</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* END UPDATED SECTION */}

      <div>
        <motion.div 
        initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
            className="ContentInnerDiff">
          <p>
            Ratnashri Aluminium, an ISO 9001 and 14001 certified leader,
            specializes in precision aluminium extrusions for the boldest
            business projects. With a legacy of manufacturing excellence, we
            don’t just supply profiles—we empower progress for the world’s most
            demanding industries through quality, scale, and relentless
            innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default DifferenceSection;
