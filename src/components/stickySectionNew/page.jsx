"use client";
import styles from "./time.module.scss";

const ScrollingWords = () => {
  return (
    <div>
      <div className={styles.scrollingWordsContainer}>
        <span className={styles.AdvanceWord}>Advancing</span>
        <div className={styles.scrollingWordsBox}>
          <ul>
            <li className={styles.InnerWord}>Sustainability</li>
            <li className={styles.InnerWord}>Efficiency</li>
            <li className={styles.InnerWord}>Growth</li>
            <li className={styles.InnerWord}>Innovation</li>
            <li className={styles.InnerWord}>Precision</li>
          </ul>
        </div>
      </div>
      <div className={styles.TextWord}>
        <p>
          “Specialists in Precision Aluminium Extrusions” With decades of
          combined experience, our in-house engineers, die designers, and
          metallurgists ensure every profile is shaped with accuracy and
          durability. From custom tooling to complex cross-sections, we deliver
          solutions where precision matters most.
        </p>
      </div>
    </div>
  );
};

export default ScrollingWords;
