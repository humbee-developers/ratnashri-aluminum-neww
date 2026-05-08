"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import usp1 from "@/images/genEngOne.png";
import usp2 from "@/images/building.png";
import usp3 from "@/images/solar.png";
import usp4 from "@/images/furniture.png";
import styles from "@/components/timeline/time.module.css";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cards = [
  {
    img: usp1,
    title: "General Engineering",
    subtitle: "Forging the Backbone of Industry",
    body: "Our aluminium extrusion empower precision and resilience in a range of engineering applications. From robust framework to intricate machine components, we deliver tailored solutions that ensure strength, reliability, and efficiency in every project, helping our B2B partners innovate with confidence.",
  },
  {
    img: usp2,
    title: "Architecture",
    subtitle: "Shaping Iconic Skylines",
    body: "We collaborate with visionary architects and builders to bring modern structures to life. Our customizable aluminium profiles enable sleek facades, striking interiors, and enduring exteriors, blending form and function for landmark buildings that redefine the spaces they occupy.",
  },
  {
    img: usp3,
    title: "Renewables",
    subtitle: "Advancing a Greener Tomorrow",
    body: "Our extrusions are engineered for the renewable energy sector, providing lightweight yet durable solutions for solar modules, wind power structures, and more. We fuel the transition to sustainable power, supporting clients who are building a cleaner, more efficient future.",
  },
  {
    img: usp4,
    title: "Furniture & Hardware",
    subtitle: "Design Meets Durability",
    body: "With a commitment to aesthetics and endurance, our aluminium profiles help furniture makers create distinctive products. From minimalist designs to ergonomic innovations, we provide the components that bring versatility, style, and lasting quality into commercial and workspace environments.",
  },
];

const Page2 = () => {
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
          <div className={styles.timeline}>
            {cards.map((card) => (
              <div className={styles.section} key={card.title}>
                <motion.div
                  className={styles.contentX}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.img_main_outer}>
                    <Image src={card.img} alt={card.title} className={styles.img_main} />
                  </div>
                  <h2 className={styles.twoo}>{card.title}</h2>
                  <p className={styles.contentInner}>{card.subtitle}</p>
                  <p className={styles.timeline_sec_comment}>{card.body}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
