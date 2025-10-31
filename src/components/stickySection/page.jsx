import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "@/components/stickySection/time.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = [
  {
    step: "1",
    title: "Advancing",
    // texts: [
    //   "Register on the bSuite app.",
    //   "Get trained in our billboard academy."
    // ]
  },
  {
    step: "2",
    title: "Sustainability",
    // texts: ["It could be anyone who needs their business to become famous."]
  },
  {
    step: "3",
    title: "Efficiency",
    // texts: ["It may be a key location close to their business, or a location that will expose them to new audiences. The possibilities are endless."]
  },
  {
    step: "4",
    title: "Growth",
    // texts: ["Sign the contract and send the payment."]
  },
  // {
  //   step: "5",
  //   title: "Send the artwork to the platform",
  //   texts: []
  // },
  // {
  //   step: "6",
  //   title: "Receive your commissions and enjoy life!",
  //   texts: []
  // }
];

const CarouselSection = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

 useEffect(() => {
  const container = containerRef.current;
  const slides = slideRefs.current;

  gsap.set(slides, {
    yPercent: 125,
    opacity: 0,
    scale: 0.5
  });

  const tl = gsap.timeline({
    defaults: { ease: "none" }
  });

  slides.forEach((slide, i) => {
    if (i === 0) {  
      gsap.set(slide, { yPercent: 0, opacity: 1, scale: 1 });
      tl.add(`our-work-${i + 1}`, "+=0");
    } else {
      tl.to(slideRefs.current[i], {
        opacity: 1,
        yPercent: 0,
        scale: 1
      }, ">")
        .to(slideRefs.current[i - 1], {
          opacity: 0,
          yPercent: -125,
          scale: 0.5
        }, "<")
        .add(`our-work-${i + 1}`);
    }
  });

  ScrollTrigger.create({
    animation: tl,
    id: "st",
    trigger: container,
    start: "top top",
    end: "+=" + container.clientHeight * (slides.length - 1),
    pin: container,
    scrub: true,
    snap: { snapTo: 1 / (slides.length - 1) },
    markers: false,
    onUpdate: self => {
      const index = Math.round(self.progress * (slides.length - 1));
      setActiveIndex(index);
    }
  });

  return () => {
    ScrollTrigger.getById("st")?.kill();
    tl.kill();
  };
}, []);


  // Navigation dot click
  // const handleNavClick = idx => {
  //   const container = containerRef.current;
  //   const timeline = gsap.timeline();
  //   const trigger = ScrollTrigger.getById("st");
  //   if (!trigger) return;
  //   const percent = idx / (steps.length - 1);
  //   const scrollPos = trigger.start + (trigger.end - trigger.start) * percent;
  //   gsap.to(window, { duration: 2, scrollTo: scrollPos });
  //   setActiveIndex(idx);
  // };

 return (
<div className="WorkSectionMain">
    <section id="work" className="work-section" ref={containerRef}>
    <div className="work-grid">
      <div className="work-left">
        <h2 className="blurred-box__title fixed-title">
          {steps[0].title}
        </h2>
      </div>

      <div className="work-right">
        <div className="carousel__slider">
          {steps.slice(1).map((step, i) => (
            <div
              key={i}
              className="carousel__item"
              ref={(el) => (slideRefs.current[i] = el)}
            >
              <h2 className="blurred-box__title">{step.title}</h2>
              {/* {step.texts.map((text, idx) => (
                <p className="blurred-box__text" key={idx}>
                  {text}
                </p>
              ))} */}

              
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="TextGrid">
      <p>“Specialists in Precision Aluminium Extrusions” With decades of combined experience, our in-house engineers, die designers, and metallurgists ensure every profile is shaped with accuracy and durability. From custom tooling to complex cross-sections, we deliver solutions where precision matters most.</p>
      </div>
  </section>
</div>
);

};

export default CarouselSection;
