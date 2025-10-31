'use client'
import styles from "@/components/navbar/nav_style.module.css"
import { useEffect, useState } from 'react';
import Nav from "@/components/navbar/nav";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Image1 from "@/images/LogoFin.svg"
import Link from "next/link";
export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className={styles.main}>

        <div className={styles.ImgBanner}>
          <Link href="/">
            <Image src={Image1} alt="Logo" className={styles.ImgInner} />
          </Link>
        </div>
        <div className={styles.header}>

          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}
