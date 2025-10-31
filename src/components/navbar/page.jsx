"use client"
import React from "react";
// import Link from "next/link";
import Image from "next/image";
import logo from "@/images/heroLogo.svg";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/index"
const Page = () => {
  const router = useRouter();
  return (
    <>

   <nav className={styles.nav_parent}>
   
   <div className={styles.nav_menu_names}>
     <Image src={logo} alt="logo" />
   </div>
   <div>
   <ul className={styles.nav_testing}>
   {/* <li className={styles.nav_menu_names}>
     <Link href="/">
       <p>Home</p>
     </Link>
   </li>
   <li className={styles.nav_menu_names}>
     <Link href="/aboutUs">
       <p>About Us</p>
     </Link>
   </li>
   <li className={styles.nav_menu_names}>
     <Link href="/products">
       <p>Products</p>
     </Link>
   </li>
   <li className={styles.nav_menu_names}>
     <Link href="/quality">
       <p>Quality</p>
     </Link>
   </li>
   <li className={styles.nav_menu_names}>
     <Link href="/findStore">
       <p>Find Store</p>
     </Link>
   </li>
   <li className={styles.nav_menu_names}>
     <Link href="/contactUs">
       <p>Contact Us</p>
     </Link>
   </li> */}
  {/* <button className={styles.nav_button} onClick={()=>router.push("/")}>New Arrivals</button> */}

  <div className={styles.nav_ham_button}>
  <Navbar/>
  </div>
 </ul>
   
   </div>
   
   </nav>
     
     

    </>
  );
};

export default Page;
