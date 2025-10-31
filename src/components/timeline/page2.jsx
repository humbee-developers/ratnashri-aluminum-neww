import { useRef, useEffect } from "react";
import Image from "next/image";
import usp1 from "@/images/genEngOne.png";
import usp2 from "@/images/building.png";
import usp3 from "@/images/solar.png";  
import usp4 from "@/images/furniture.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";
const Page2 = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    // gsap.to(".triggered-element", {
    //   scrollTrigger: {
    //     trigger: container.current,
    //     scrub: 1,
    //     start: "top 10%",
    //     end: "bottom ",
    //   },
    //   opacity: 0,
    //   color: "white",
    //   ease: "none",
    //   stagger: 0.9,
    // });
  };
  return (
    <div className={styles.display}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <h1>
            <div className={styles.timeline_animation_text}>Our Expertise</div>
          </h1>
          <div className={styles.timeline_animation_text_One}>
            <p>Crafting Aluminium. Elevating Enterprises.</p>
          </div>
          <div className={styles.timeline} ref={container}>
            {/* <div className={styles.line}></div> */}
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp1} alt="image" className={styles.img_main} />
                </div>
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
                <div className={styles.img_main_outer}>
                  <Image src={usp2} alt="image" className={styles.img_main} />
                </div>
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
                <div className={styles.img_main_outer}>
                  <Image src={usp3} alt="image" className={styles.img_main} />
                </div>
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
                <div className={styles.img_main_outer}>
                  <Image src={usp4} alt="image" className={styles.img_main} />
                </div>
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
      </div>
    </div>
  );
};

export default Page2;
