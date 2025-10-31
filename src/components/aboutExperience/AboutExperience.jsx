import "./aboutExperience.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../images/aluminium01.png";

function AboutExperience() {
  return (
    <div className="aboutExperience">
      <div className="aboutExperience_wrapper">
        <div className="aboutExperience_wrapper_inner">
          <div className="aboutExperience_wrapper_inner_wrapper">
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              }}
              viewport={{ once: true }}
              className="heading"
            >
              One Metal. Endless Possibilities
            </motion.div>
            <div className="content">
              {
                "Aluminium’s versatility powers solutions across industries and challenges. From enabling sustainable architecture and renewable energy to elevating advanced engineering and innovative furniture design, our extrusions adapt to every vision. With Ratnashri Aluminium, a single material unlocks limitless innovation—built to empower your boldest business ambitions."
              }
            </div>
          </div>
        </div>
        {/* <div className="img">
          <Image
            src={image1}
            className="image2"
            width="100%"
            alt="none"
          ></Image>
        </div> */}
      </div>
    </div>
  );
}
export default AboutExperience;
