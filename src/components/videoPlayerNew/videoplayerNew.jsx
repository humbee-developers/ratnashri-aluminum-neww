"use client";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import styles from "@/components/videoPlayerNew/videoplayerNew.module.css";

export default function VideoPlayer() {
  // const playerRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlayPause = () => {
  //   setIsPlaying((prev) => !prev);
  // };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
        viewport={{ once: true }}
        className={styles.containerOneText}
      >
        <p className={styles.containerOneInner}>
          How We Shape Aluminium Inside Ratnashri Aluminium
        </p>
      </motion.div>

      <div className={styles.containerOne}
       
      >
        {/* <ReactPlayer
          ref={playerRef}
          
          url="https://www.youtube.com/watch?v=fzXZr_L6sAM"
          playing={isPlaying}
          controls={true}
          width="100%"
          height="100%"
          className={styles.video}
        /> */}
        <ReactPlayer
          className={styles.video}
          controls={true}
          width="100%"
          height="100%"
          // playing={true}
          src="https://www.youtube.com/watch?v=qThH76yTfsU"
        />

        {/* <button className={styles.playButton} onClick={togglePlayPause}>
          {isPlaying ? "❚❚" : "▶"}
        </button> */}
      </div>
    </div>
  );
}
