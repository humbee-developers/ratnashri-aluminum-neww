import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anime";
import Image from "next/image";
import logo from "@/images/LogoFin.svg";
import styles from "@/components/preloader/style.module.css";

export default function Preloader({ counter }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [loadedFrames, setLoadedFrames] = useState(0);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    setLoadedFrames(counter);
  }, [counter]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1], delay: 2.95 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {/* <motion.div variants={opacity} initial="initial" animate="enter">
        <div className={styles.loader}></div>
      </motion.div> */}

      {/* Blinking logo in center */}
      <div className={styles.svgLogoCenter}>
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={logo}
            alt="Loading logo"
            className={styles.svgLogoCenterInner}
          />
        </motion.div>
      </div>

      {/* Curve Path Animation */}
      <div>
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
        ></motion.path>
      </div>
    </motion.div>
  );
}
