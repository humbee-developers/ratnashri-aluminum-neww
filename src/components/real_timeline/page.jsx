"use client"
import React from "react";
import Image from "next/image";
import img1 from "@/images/sec1.png";
import img2 from "@/images/sec2.png";
import img3 from "@/images/sec3.png";
import img4 from "@/images/sec4.png";
// import img5 from "@/images/sec1.png";
// import img6 from "@/images/sec2.png";
// import img7 from "@/images/sec3.png";
// import img8 from "@/images/sec4.png";
// import img9 from "@/images/sec1.png";
// import img10 from "@/images/sec2.png";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/real_timeline/real_timeline.module.css";
const Page = () => {
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    create();
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createText();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createBoll();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 10%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 1.8,
      stagger: 0.9,
    });
  };

  const create = () => {
    gsap.to(".triggered-section", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      scale: 2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };
  const createText = () => {
    gsap.to(".triggered-text", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      scale: 1.2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };

  const createBoll = () => {
    gsap.to(".triggered-bead", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      backgroundColor: "#0584C7",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 2.2,
      stagger: 0.9,
    });
  };

  return (
    <div>
      <div className={styles.timeline_outer}>
        <div className={styles.timeline_wrapper}>
          <h2 className={styles.timeline_heading}>Our Expertise</h2>
          <div className={styles.timeline_main_outer}>
            <div className={styles.timeline_width}>
              <div className={styles.timeline} ref={container}>
                {/* <div className={styles.line}></div> */}
                <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    General Engineering 
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                   From robust standard sections to complex custom profiles, our advanced facility near Ahmedabad delivers reliability across every extrusion. We partner with top architects, OEMs, infrastructure developers, and manufacturers with tailored solutions for
                  </p>
                  {/* <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div> */}
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img1}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    1999
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    From robust standard sections to complex custom profiles, our advanced facility near Ahmedabad delivers reliability across every extrusion. We partner with top architects, OEMs, infrastructure developers, and manufacturers with tailored solutions for
                  </p>
                  {/* <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div> */}
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img2}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2002
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                   From robust standard sections to complex custom profiles, our advanced facility near Ahmedabad delivers reliability across every extrusion. We partner with top architects, OEMs, infrastructure developers, and manufacturers with tailored solutions for
                  </p>
                  {/* <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div> */}
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img3}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2006
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                   From robust standard sections to complex custom profiles, our advanced facility near Ahmedabad delivers reliability across every extrusion. We partner with top architects, OEMs, infrastructure developers, and manufacturers with tailored solutions for
                  </p>
                  {/* <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div> */}
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img4}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div>

                {/* <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2012
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Established Another compact & extiorior laminate factory in
                    Ahmedabad
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img5}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div> */}

                {/* <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2017
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Expanded production capacity by 35%
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img6}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div> */}

                {/* <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2018
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Launched Royale Touche Wooden Floorings Pan India
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img7}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div> */}

                {/* <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2020
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Installed A new Press Increased Production by 30%
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img8}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div> */}

                {/* <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2023
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Laminate Prodiction Unit Production Capacity expanded by 25%
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img9}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={`${styles.timeline_year} triggered-section`}>
                    2023
                  </div>
                  <p className={`${styles.timeline_comment} triggered-text`}>
                    Plywood Manufacturing Unit Installed with production
                    capacity of 1,25,00,000 NA/50,000 M3 In Ahemdabad
                  </p>
                  <div className={styles.bead_outer}>
                    <div className={`${styles.bead} triggered-bead`}></div>
                  </div>
                  <div className={`${styles.content} triggered-element`}>
                    <Image
                      src={img10}
                      alt="Your Image"
                      className={styles.timeline_image}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
