"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/components/Dye/dye.module.css";
import "./precisionSectionDye.scss";

const FRAME_COUNT = 134;
const frameUrl = (index) =>
  `https://storage.googleapis.com/dweck-cdn/ratnashri/compressed/webp_frames/${(index + 1)
    .toString()
    .padStart(4, "0")}.webp`;

const AirpodsAnimation = () => {
  const wrapperRef = useRef(null);
  const canvasRef  = useRef(null);
  const imagesRef  = useRef([]);
  const frameRef   = useRef(0);
  const rafRef     = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const sizeCanvas = () => {
      canvas.width  = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = Math.round(window.innerHeight * 0.62);
      drawFrame();
    };
    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);

    function drawFrame() {
      const img = imagesRef.current[frameRef.current];
      if (!img || !img.complete || !img.naturalWidth) return;
      const w     = canvas.width;
      const h     = canvas.height;
      const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
      const fw    = img.naturalWidth  * scale;
      const fh    = img.naturalHeight * scale;
      const x     = (w - fw) / 2;
      const y     = (h - fh) / 2;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, x, y, fw, fh);
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      imagesRef.current.push(img);
      img.onload = () => { if (i === 0) drawFrame(); };
      img.src = frameUrl(i);
    }
    requestAnimationFrame(drawFrame);

    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect        = wrapper.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled  = -rect.top;
      const progress  = Math.max(0, Math.min(1, scrolled / totalScroll));
      const nextFrame = Math.round(progress * (FRAME_COUNT - 1));
      if (nextFrame !== frameRef.current) {
        frameRef.current = nextFrame;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(drawFrame);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className={styles.fixed_bg_wrapper}>
      <div ref={wrapperRef} className={styles.dye_scroll_wrapper}>
        <div className={styles.dye_sticky}>
          <div className="PrecisionSecHeading">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
              viewport={{ once: true }}
              className="PrecisionHeadingSec"
            >
              <p style={{ display: "block" }}>Precision Dies.</p>
              <p style={{ display: "inline-block" }}>Seamless Extrusions.</p>
            </motion.div>
          </div>
          <canvas className={styles.canvas_factory_settings} ref={canvasRef} />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
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
    </section>
  );
};

export default AirpodsAnimation;
