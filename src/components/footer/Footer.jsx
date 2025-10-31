"use client"
import "./footer.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";

import whatsapp from "../../images/whatsapp.svg";
import linkedin from "../../images/linkedin.svg";
import Logo1 from "../../images/LogoFin.svg";
import Link from "next/link";
// import { Link, useLocation } from "react-router-dom";
// import Form from "../form/Form";
const Footer = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper">
          {/* <div className="wrapper_f1">
            <div className="f1">
              <h3>About Company</h3>
              <p>
                We are one of the best Crystalline Solar PV Modules
                Manufacturers India with an exceptionally solid client base PAN
                India.
              </p>
            </div>
          </div> */}
          <div className="f2">
            <div className="col1">
              <h2>Quick Links</h2>
              <div className="f3">
                <Link href="/">Home</Link>
              </div>
              <div className="f3">
                <Link href="https://ratnashri.co.in/about-us/">About Us</Link>
              </div>
              <div className="f3">
                <Link href="https://ratnashri.co.in/products/">Products</Link>
              </div>
              <div className="f3">
                <Link href="https://ratnashri.co.in/segments/">Segments</Link>
              </div>
              <div className="f3">
                <Link href="https://ratnashri.co.in/technical-specification/">Technical Specification</Link>
              </div>
              <div className="f3">
                <Link href="https://ratnashri.co.in/quality-assurance/">Quality Assurance</Link>
              </div>
              {/* <div className="f3">
                <Link href="/">Blogs</Link>
              </div> */}
              <div className="f3">
                <Link href="https://ratnashri.co.in/contact-us/">Contact Us</Link>
              </div>
            </div>
            {/* 2 sections */}
            <div className="ColSection">
              <div className="col2">
                <h2 id="col2sp">Registered Office</h2>
                <div className="addressFirst">
                  1307, 13th floor, Phoenix, Vijay Cross Roads, Navrangpura,
                  Ahmedabad, Gujarat 380009, India.
                </div>
                {/* <div className="f3">
                <Link href="/">Products</Link>
              </div> */}
                {/* <div className="f3">
                <Link href="/">Career</Link>
              </div>
              <div className="f3">
                <Link href="/">Contact Us</Link>
              </div> */}
              </div>
              <div className="col2">
                <h2 id="col2spOne">Connect</h2>
                {/* <div className="link">
                <Link to={"tel:9925031915"}>+91 99250 31915</Link>
              </div> */}
                <div className="f3">
                  <Link href={"tel:+917927561333"}>+91 7927561333</Link>
                </div>
                <div className="f3">
                  <Link href={"tel:+919825627611"}>+91 9825627611</Link>
                </div>
                <div className="f3">
                  <Link href={"mailto:sales@ratnashri.co.in"}>
                    sales@ratnashri.co.in
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 sections */}
            {/* <div className="col3">
              <h2>Contact</h2>
              <div className="address">
                1402, 14th floor, Phoenix, Vijay Cross Rd, Navrangpura,
                Ahmedabad - 380009{" "}
                <Link href={"mailto:marketing@raajsolar.com"}>
                  marketing@raajsolar.com
                </Link>
              </div>
              <div className="link">
                <Link href={"tel:9925031915"}>+91 99250 31915</Link>
              </div>
            </div> */}
            <div className="col3">
              <h2 id="col2sp">Works</h2>

              <div className="address">
                Survey No. 1221 (Old Survey No. 672/1-2), B/h Madhu Textiles,
                Near Nandasan Crossroads, Village: Rajpur, Taluka: Kadi,
                District: Mehsana 382715.
                {/* 1402, 14th floor, Phoenix, Vijay Cross Rd, Navrangpura,
                Ahmedabad - 380009{" "}
                <Link to={"mailto:marketing@raajsolar.com"}>
                  marketing@raajsolar.com
                </Link> */}
              </div>
              {/* <div className="link">
                <Link to={"tel:9925031915"}>+91 99250 31915</Link>
              </div> */}
            </div>
          </div>
          <div className="copyright">
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              }}
              viewport={{ once: true }}
              className="copyright_text"
            >
              <Link href={"/"}>
                <Image src={Logo1} alt="none" className="LogoFinal" />
              </Link>
              <div className="copyright_textMain">
                <p className="copyright_textOne">
                  Ratnashri Aluminium Pvt. Ltd. is a joint venture of Raajratna
                  Group of Companies and Rolling Mills (India) engaged in
                  manufacturing of stainless steel products for more than four
                  decades.
                </p>
              </div>
              {/* <span>
                Copyright &copy; 2025 Ratnashri Aluminium, All Right Reserved.
                Designed & Developed by
              </span>
              <span>
                <Link target="_blank" href="https://www.humbeestudio.com/">
                  {"H/DS"}
                </Link>
              </span> */}
            </motion.div>
            {/* <div className="icons">
              <Link href="https://www.facebook.com/raajsolarpv" target="_blank">
                <div className="icon">
                  <Image src={facebook} alt="facebook" />
                </div>
              </Link>
              <Link href="https://www.instagram.com/raajsolar/" target="_blank">
                <div className="icon">
                  <Image src={instagram} alt="instagram" />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UClTvd-G682IozFadbSzBz4w"
                target="_blank"
              >
                <div className="icon">
                  <Image src={youtube} alt="youtube" />
                </div>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=https://wa.link/vzs04n&text=Hello%20Raaj%20Solar%20%20I%20am%20Looking%20For%20"
                target="_blank"
              >
                <div className="icon">
                  <Image src={whatsapp} alt="whatsapp" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/66936534/admin/"
                target="_blank"
              >
                <div className="icon">
                  <Image src={linkedin} alt="linkedin" />
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/* {location.pathname === "/raaj-solar" && <Form />} */}
    </div>
  );
};
export default Footer;
