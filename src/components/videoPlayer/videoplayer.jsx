"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "@/components/videoPlayer/videoplayer.module.css";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
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
        className={styles.containerOneText}
      >
        <p className={styles.containerOneInner}>
          How We Shape Aluminium Inside Ratnashri Aluminium
        </p>
      </motion.div>
      <div className={styles.containerOne}>
        <video
          ref={videoRef}
          className={styles.video}
          src="video/finalVideo.mp4"
          preload="metadata"
          onClick={togglePlayPause}
        />

        <button className={styles.playButton} onClick={togglePlayPause}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}
