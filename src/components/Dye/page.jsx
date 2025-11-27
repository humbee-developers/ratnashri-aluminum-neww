"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "@/components/Dye/dye.module.css";
import "./precisionSectionDye.scss"
gsap.registerPlugin(ScrollTrigger);

const AirpodsAnimation = ({ loadImage }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);

  // const [imgLoad, setImgLoad] = useState(true);
  // console.log(loadImage(imgLoad));
  console.log("Dye loading", loading);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // const setCanvasSize = () => {
    //   const windowWidth = window.innerWidth;
    //   const windowHeight = window.innerHeight;

    //   if (windowWidth >= 1700) {
    //     canvas.width = 2000; // Width remains constant for desktop screens
    //     canvas.height = windowHeight * 1; // Adjust the height for desktop screens
    //   } else if (windowWidth >= 1600) {
    //     canvas.width = 1600; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 1; // Adjust the height for tablet screens
    //   } else if (windowWidth >= 1599) {
    //     canvas.width = 1600; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 1; // Adjust the height for tablet screens
    //   } else if (windowWidth >= 1200) {
    //     canvas.width = 1600; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 1; // Adjust the height for tablet screens
    //   } else if (windowWidth >= 1024) {
    //     canvas.width = 1200; // Adjust the width for screen width 1024
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
    //   } else if (windowWidth >= 768) {
    //     canvas.width = 1200; // Adjust the width for screen width 425
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 425
    //   } else if (windowWidth >= 430) {
    //     canvas.width = 900; // Adjust the width for screen width 425
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 425
    //   } else if (windowWidth >= 425) {
    //     canvas.width = 900; // Adjust the width for screen width 425
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 425
    //   } else if (windowWidth >= 375) {
    //     canvas.width = 800; // Adjust the width for screen width 375
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 425
    //   } else if (windowWidth >= 320) {
    //     canvas.width = 800; // Adjust the width for screen width 375
    //     canvas.height = windowHeight * 1; // Adjust the height for screen width 425
    //   } else {
    //     canvas.width = 400; // Adjust the width for screen width 320
    //     canvas.height = windowHeight * 0.6; // Adjust the height for screen width 320
    //   }

    //   ScrollTrigger.update();
    // };

    // const setCanvasSize = () => {
    //   const originalWidth = 1632;
    //   const originalHeight = 918;
    //   const aspectRatio = originalWidth / originalHeight;
    //   const availableWidth = window.innerWidth;

    //   if (availableWidth < 200) {
    //     canvas.width = originalWidth / 2;
    //     canvas.height = originalHeight / 2;
    //     canvas.style.width = "1301px";
    //     canvas.style.height = "80vh";
    //   } else {
    //     canvas.width = originalWidth;
    //     canvas.height = originalHeight;
    //     canvas.style.width = "100%";
    //     canvas.style.height = "80vh";
    //   }
    // };
// const setCanvasSize = () => {
//   const originalWidth = 1632;
//   const originalHeight = 918;
//   const aspectRatio = originalWidth / originalHeight;
//   const availableWidth = window.innerWidth;

//   canvas.width = originalWidth;
//   canvas.height = originalHeight;
//   // Apply height conditions based on screen width
//   if (availableWidth < 345) {
//     canvas.style.height = "25vh";
//   } else if (availableWidth < 375) {
//     canvas.style.height = "30vh";
//   } 
//   else if (availableWidth < 475) {
//     canvas.style.height = "35vh";
//   } 
//   else if (availableWidth < 675) {
//     canvas.style.height = "45vh";
//   } else if (availableWidth < 768) {
//     canvas.style.height = "65vh";
//   } else if (availableWidth < 1200) {
//     canvas.style.height = "70vh";
//   } else if (availableWidth < 1500) {
//     canvas.style.height = "60vh";
//   } else {
//     canvas.style.height = "60vh";
//   }

//   // if (availableWidth < 475) {
//   //   canvas.style.height = "35vh";
//   // } else if (availableWidth < 575) {
//   //   canvas.style.height = "50vh";
//   // } else if (availableWidth < 770) {
//   //   canvas.style.height = "65vh";
//   // }
//   //   else if (availableWidth < 1900) {
//   //   canvas.style.height = "85vh";
//   // } else {
//   //   canvas.style.height = "80vh";
//   // }

//   canvas.style.width = "100%";
// };

const setCanvasSize = () => {
  const originalWidth = 1632;
  const originalHeight = 918;
  const canvasScale = 0.5; // 50% smaller

  // Set canvas drawing resolution (keeps quality)
  canvas.width = originalWidth;
  canvas.height = originalHeight;

  // Set canvas visual size (scale down)
  canvas.style.width = `${originalWidth * canvasScale}px`;
  canvas.style.height = `${originalHeight * canvasScale}px`;

  // Make sure it's responsive and centered
  canvas.style.display = "block";
  canvas.style.margin = "0 auto";
  canvas.style.maxWidth = "100%";
  canvas.style.height = "auto";

  // Optional: update ScrollTrigger on resize
  ScrollTrigger.update();
};

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 134;
    // const prefix = process.env.NODE_ENV === "production" ? "/ratnashri-aluminum" : "";
    const currentFrame = (index) =>
      // `${prefix}/Machine_Frames/${(
      `https://storage.googleapis.com/dweck-cdn/ratnashri/compressed/webp_frames/${(index + 1).toString().padStart(4, "0")}.webp`;
    // https://plywoodassets.royaletouche.com/assets/newframes/factoryzoom/F000.webp
    // https://plywoodassets.royaletouche.com/assets/compressed/factoryzoom/F000.jpg
    let imgL = [];

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
      // fetch(img.src)
      //   .then((res) => res.statusText)
      //   .then((data) => console.log("data", setImgLoad(data)))
      //   .catch((error) => console.error("error", error));
    }
    // imgL.map((imageUrl) => {
    //   return new Promise((resolve) => {
    //     const img = new Image();
    //     img.src = imageUrl;
    //     img.onload = () => resolve();
    //   });
    // });

    // Promise.all(imgL).then(() => {
    //   setLoading(false);
    // });

    const loadImages = async () => {
      try {
        const loadImagePromises = imgL.map((imageUrl) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => resolve();
          });
        });

        await Promise.all(loadImagePromises);
        setLoading(false);
        console.log("✅ Factory frames loaded successfullyy");
        // ✅ Notify parent (Home) that loading is complete
        if (typeof onFramesLoaded === "function") {
          onFramesLoaded();
        }
      } catch (error) {
        console.error("Error loading images:", error);
        // Handle error loading images
      }
    };
    loadImages();

    console.log(imgL);

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=500%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  console.log(loading ? "Loading" : "Complate");
  // console.log(loadImage(loading));

  const phrase =
    "For those who accept nothing less than the finest. A ply that has it all. Carefully engineered using proprietary 4-stage preservative treatment of select hardwood species, cross-bonded with 100% BWP grade phenolic resins using 4 press technology, a ply that is safe for your home and loved ones with E-0 emissions and fire retardant properties.";

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top 90%`,
        end: `+=${window.innerHeight / 1.55}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      color: "#c3a464",
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <section  className={styles.fixed_bg_wrapper}>
      <section ref={sectionRef}>
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
        <canvas
          className={styles.canvas_factory_settings}
          ref={canvasRef}
        ></canvas>
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
        </motion.div>
      </section>
      {/* <div className={styles.scroll_text_wrapper}>
        <div ref={container} className={styles.main}>
          <div ref={body} className={styles.body}>
            {splitWords(phrase)}
            <h1 className={styles.scroll_text_header}>
              Royale Touché Performance Ply
            </h1>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AirpodsAnimation;
