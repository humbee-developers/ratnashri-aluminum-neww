"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/components/timeline/time.module.css";

const cardVariant = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CARDS = [
  {
    title: "General Engineering",
    sub:   "Forging the Backbone of Industry",
    body:  "Our aluminium extrusion empower precision and resilience in a range of engineering applications. From robust framework to intricate machine components, we deliver tailored solutions that ensure strength, reliability, and efficiency in every project, helping our B2B partners innovate with confidence.",
  },
  {
    title: "Architecture",
    sub:   "Shaping Iconic Skylines",
    body:  "We collaborate with visionary architects and builders to bring modern structures to life. Our customizable aluminium profiles enable sleek facades, striking interiors, and enduring exteriors, blending form and function for landmark buildings that redefine the spaces they occupy.",
  },
  {
    title: "Renewables",
    sub:   "Advancing a Greener Tomorrow",
    body:  "Our extrusions are engineered for the renewable energy sector, providing lightweight yet durable solutions for solar modules, wind power structures, and more. We fuel the transition to sustainable power, supporting clients who are building a cleaner, more efficient future.",
  },
  {
    title: "Furniture & Hardware",
    sub:   "Design Meets Durability",
    body:  "With a commitment to aesthetics and endurance, our aluminium profiles help furniture makers create distinctive products. From minimalist designs to ergonomic innovations, we provide the components that bring versatility, style, and lasting quality into commercial and workspace environments.",
  },
];

const FRAME_COUNT = 314;
const frameUrl = (i) =>
  `https://storage.googleapis.com/dweck-cdn/ratnashri/compressed/our_expertise_new/${(i + 1)
    .toString()
    .padStart(3, "0")}.webp`;

const Home = () => {
  const wrapperRef  = useRef(null);
  const canvasRef   = useRef(null);
  const imagesRef   = useRef([]);
  const frameRef    = useRef(0); // current frame index
  const rafRef      = useRef(null);

  useEffect(() => {
    const canvas  = canvasRef.current;
    const ctx     = canvas.getContext("2d");

    // ── Canvas sizing ─────────────────────────────────────────────
    const sizeCanvas = () => {
      const w = canvas.parentElement.clientWidth || window.innerWidth * 0.5;
      const h = Math.round(window.innerHeight * 0.78);
      canvas.width  = w;
      canvas.height = h;
      drawFrame();
    };
    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);

    // ── Draw ──────────────────────────────────────────────────────
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

    // ── Preload all frames ────────────────────────────────────────
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      imagesRef.current.push(img);
      img.onload = () => { if (i === 0) drawFrame(); };
      img.src = frameUrl(i);
    }
    requestAnimationFrame(drawFrame);

    // ── Scroll handler — directly maps scroll progress → frame ────
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect        = wrapper.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled  = -rect.top; // how far we've scrolled into the wrapper
      const progress  = Math.max(0, Math.min(1, scrolled / totalScroll));
      const nextFrame = Math.round(progress * (FRAME_COUNT - 1));

      if (nextFrame !== frameRef.current) {
        frameRef.current = nextFrame;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(drawFrame);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync on mount

    return () => {
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.display1}>
      <div ref={wrapperRef} className={styles.first_timeline_outer}>

        {/* LEFT — scrolls naturally */}
        <div className={styles.first_timeline_inner}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
            className={styles.timeline_animation_text}
          >
            Our Expertise
          </motion.div>
          <div className={styles.timeline_animation_text_One}>
            <p>Crafting Aluminium. Elevating Enterprises.</p>
          </div>
          <div className={styles.timeline}>
            {CARDS.map((card) => (
              <div className={styles.section} key={card.title}>
                <motion.div
                  className={styles.contentX}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h2 className={styles.twoo}>{card.title}</h2>
                  <p className={styles.contentInner}>{card.sub}</p>
                  <p className={styles.timeline_sec_comment}>{card.body}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — sticky canvas */}
        <div className={styles.canvas_side_outer}>
          <canvas className={styles.canvas_layer} ref={canvasRef} />
        </div>

      </div>

      <div className={styles.OuterTimelineContent}>
        <p>
          From robust standard sections to complex custom profiles, our advanced
          facility near Ahmedabad delivers reliability across every extrusion.
          We partner with top architects, OEMs, infrastructure developers, and
          manufacturers with tailored solutions for
        </p>
      </div>
    </div>
  );
};

export default Home;
