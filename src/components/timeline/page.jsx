"use client";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";
import styles from "@/components/timeline/time.module.css";

const Home = ({ loadUSP }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // Set canvas dimensions based on screen size
    const setCanvasSize = () => {
      const containerEl = container.current;
      const canvas = canvasRef.current;
      const context = contextRef.current;

      if (!containerEl || !canvas || !context) return;

      const originalWidth = 1632;
      const originalHeight = 918;
      const aspectRatio = originalWidth / originalHeight;

      // Get actual height of timeline section
      const containerHeight = containerEl.getBoundingClientRect().height;
      const containerWidth = containerEl.getBoundingClientRect().width;

      // Set canvas width to match container's width
      canvas.width = containerWidth;
      canvas.height = containerHeight;

      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;
    };


    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 314;
    const currentFrame = (index) =>
      `https://storage.googleapis.com/dweck-cdn/ratnashri/compressed/our_expertise_new/${(index + 1).toString().padStart(3, "0")}.webp`;

    imagesRef.current = []; // Clear in case re-renders

    let loadedImages = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);

      img.onload = () => {
        loadedImages++;
        // When first image loads, draw it to canvas
        if (i === 0) {
          render();
        }
      };
      imagesRef.current.push(img);
    }

    function render() {
      const frame = imagesRef.current[airpodsRef.current.frame];
      if (!frame || !frame.complete) return;

      const canvas = canvasRef.current;
      const context = contextRef.current;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const frameWidth = 450;
      const frameHeight =
        (frame.naturalHeight * frameWidth) / frame.naturalWidth;

      const xOffset = (canvasWidth - frameWidth) / 2;
      const yOffset = (canvasHeight - frameHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(frame, xOffset, yOffset, frameWidth, frameHeight);
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          start: "-=10%",
          // end: "+=110%",
          // markers: true,
          end: () => {
            const timeline = container.current;
            return timeline ? `+=${timeline.scrollHeight * 0.75}` : "+=75%";
          },
          //  end: () => `+=${container.current.offsetHeight}`, // use the height of timeline sectio
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);


  // console.log(loading ? "USP Loading" : "USP Complate");
  // console.log(loadUSP(loading));

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  // const createAnimation = () => {
  //   gsap.to(".triggered-element", {
  //     scrollTrigger: {
  //       trigger: container.current,
  //       scrub: 1,
  //       start: "top 80%",
  //       end: "bottom 40%",
  //       markers: "true",
  //     },
  //     opacity: 1,
  //     color: "#000",
  //     ease: "none",
  //     stagger: 0.9,
  //   });
  // };

  const createAnimation = () => {
    ScrollTrigger.batch(".triggered-element", {
      start: "top 80%",
      end: "bottom top",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          color: "#000",
          stagger: 0.3,
          ease: "power2.out",
          duration: 1,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          color: "#999",
          stagger: 0.1,
          ease: "power2.inOut",
          duration: 0.5,
        }),
    });
  };

  return (
    <div className={styles.display1}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
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
            className={styles.timeline_animation_text}
          >
            Our Expertise
          </motion.div>
          <div className={styles.timeline_animation_text_One}>
            <p>Crafting Aluminium. Elevating Enterprises.</p>
          </div>
          <div className={styles.timeline} ref={container}>
            {/* <div className={styles.line}></div> */}
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>01</p> */}
                <h2 className={styles.twoo}>General Engineering</h2>
                <p className={styles.contentInner}>
                  Forging the Backbone of Industry
                </p>
                <p className={styles.timeline_sec_comment}>
                  Our aluminium extrusion empower precision and resilience in a
                  range of engineering applications. From robust framework to
                  intricate machine components, we deliver tailored solutions
                  that ensure strength, reliability, and efficiency in every
                  project, helping our B2B partners innovate with confidence.
                </p>
              </div>
            </div>

            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>03</p> */}
                <h2 className={styles.twoo}>Architecture</h2>
                <p className={styles.contentInner}>Shaping Iconic Skylines</p>
                <p className={styles.timeline_sec_comment}>
                  We collaborate with visionary architects and builders to bring
                  modern structures to life. Our customizable aluminium profiles
                  enable sleek facades, striking interiors, and enduring
                  exteriors, blending form and function for landmark buildings
                  that redefine the spaces they occupy.
                </p>
              </div>
            </div>

            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>02</p> */}
                <h2 className={styles.twoo}>Renewables</h2>
                <p className={styles.contentInner}>
                  Advancing a Greener Tomorrow
                </p>
                <p className={styles.timeline_sec_comment}>
                  Our extrusions are engineered for the renewable energy sector,
                  providing lightweight yet durable solutions for solar modules,
                  wind power structures, and more. We fuel the transition to
                  sustainable power, supporting clients who are building a
                  cleaner, more efficient future.
                </p>
              </div>
            </div>

            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>04</p> */}
                <h2 className={styles.twoo}>Furniture & Hardware</h2>
                <p className={styles.contentInner}>Design Meets Durability</p>
                <p className={styles.timeline_sec_comment}>
                  With a commitment to aesthetics and endurance, our aluminium
                  profiles help furniture makers create distinctive products.
                  From minimalist designs to ergonomic innovations, we provide
                  the components that bring versatility, style, and lasting
                  quality into commercial and workspace environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canvas_side_outer}>
          <section className={styles.sectionX} ref={sectionRef}>
            <canvas className={styles.canvas_layer} ref={canvasRef}></canvas>
          </section>
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
