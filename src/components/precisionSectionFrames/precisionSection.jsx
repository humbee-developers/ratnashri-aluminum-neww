import "./precisionSection.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../images/sec1.png";
import image2 from "../../images/sec2.png";
import image3 from "../../images/sec3.png";
import image4 from "../../images/sec4.png";

function PrecisionSection() {
  return (
    <div className="PrecisionSec">
      <div className="PrecisionSecHeading">
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
      </div>
      {/*  */}
      <div className="PrecisionImageSectionMain">
        <div className="PrecisionImageSectionInner">
          <div className="PrecisionImageSectionImg">
            <Image src={image1} alt="none" />
          </div>
          <div className="PrecisionImageSectionImg">
            <Image src={image2} alt="none" />
          </div>
          <div className="PrecisionImageSectionImg">
            <Image src={image3} alt="none" />
          </div>
          <div className="PrecisionImageSectionImg">
            <Image src={image4} alt="none" />
          </div>
        </div>
      </div>
      {/*  */}
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
          className="PrecisionContentInnerDiff"
        >
          <p>
            At Ratnashri, our in-house die production delivers unmatched
            precision and speed. Using cutting-edge technology and advanced
            simulation software like QexDD and Qform, we craft custom and
            standard dies that perfectly align with your project needs. This
            streamlined process ensures enhanced efficiency, superior quality,
            and timely delivery, empowering you with reliable extrusion
            solutions designed to elevate your business performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
export default PrecisionSection;
