import "./precisionSection.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../images/prec_1.png";
import image2 from "../../images/sec2.png";
import image3 from "../../images/sec3.png";
import image4 from "../../images/sec4.png";
import DyeFrames from "@/components/Dye/page"
function PrecisionSection() {
  return (
    <div className="PrecisionSec">
      {/* <div className="PrecisionSecHeading">
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
          className="PrecisionHeadingSec"
        >
          <p style={{ display: "block" }}>Precision Dies.</p>
          <p style={{ display: "inline-block" }}>Seamless Extrusions.</p>
        </motion.div>
      </div> */}
      {/*  */}
      {/* <div className="ImageSectionMain">
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
      </div> */}
      {/*  */}
      <div>
        <DyeFrames />
        {/* <div className="PrecisionHeadingSecImage">
          <Image src={image1} alt="none" className="PrecisionHeadingSecImg"/>
        </div> */}
        {/* <motion.div
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
             className="PrecisionContentInnerDiff">
          <p
            
          >
            At Ratnashri, our in-house die production delivers unmatched
            precision and speed. Using cutting-edge technology and advanced
            simulation software like QexDD and Qform, we craft custom and
            standard dies that perfectly align with your project needs. This
            streamlined process ensures enhanced efficiency, superior quality,
            and timely delivery, empowering you with reliable extrusion
            solutions designed to elevate your business performance.
          </p>
        </motion.div> */}
      </div>
    </div>
  );
}
export default PrecisionSection;
