"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./blogs.scss";
import ImageBlog1 from "@/images/blog1.jpg";
import ImageBlog2 from "@/images/blog2.jpg";
import ImageBlog3 from "@/images/blogthree.jpg";
import ImageBlog4 from "@/images/blog4.jpg";

const blogData = [
  {
    id: 1,
    title:
      "Aluminium in Modern Architecture and Design: A Testament to Innovation and Aesthetics",
    desc: "Aluminium has become synonymous with modern architectural excellence. Known for its lightweight properties, durability, and design versatility, aluminium extrusions have transformed facades and interiors into canvases of contemporary art. In this blog, we explore how innovative architectural designs incorporate aluminium to achieve sleek, modern aesthetics and enhanced performance. We also present real-world examples and data to illustrate the benefits of using aluminium in modern construction.",
    img1: ImageBlog1,
    link: "https://ratnashri.co.in/blog-1-aluminium-in-modern-architecture/",
  },
  {
    id: 2,
    title: "Future Trends: Innovations in Aluminium Extrusion Technology",
    desc: "The aluminium extrusion industry is rapidly evolving with advances in materials science, digital simulation, and smart manufacturing. New alloys, enhanced process simulation tools, and integrated digital systems are transforming how extrusions are designed and produced. In this post, we explore emerging technologies that promise to revolutionize the way aluminium is used, while backing our discussion with real data and industry examples.",
    img1: ImageBlog2,
    link: "https://ratnashri.co.in/blog-2-future-trends-innovations-in-aluminium-extrusion-technology/",
  },
  {
    id: 3,
    title: "How to Choose the Right Aluminium Section for Your Industrial Needs",
    desc: "In the world of industrial manufacturing, infrastructure, and engineering, aluminium sections play a critical role. From lightweight frames to complex machinery components, aluminium offers unmatched versatility, corrosion resistance, and design flexibility. But when it comes to choosing the right aluminium section for your industrial needs, it’s a one-size-fits-all solution. At Ratnashri Aluminium, a leading manufacturer of custom aluminium extrusions, profiles, and sections in India, we understand that choosing the right section involves multiple considerations – from application and strength requirements to size, finish, and customization options. In this blog, well walk you through the key factors to consider when selecting the perfect aluminium section for your project - along with real-world examples, tips, and industry insights.",
    img1: ImageBlog3,
    link: "https://ratnashri.co.in/blog-3-how-to-choose-the-right-aluminium-section-for-your-industrial-needs/",
  },
  {
    id: 4,
    title: "How Custom Aluminium Profiles Enhance Product Performance and Design Flexibility",
    desc: "In the fast-evolving world of modern manufacturing, engineering, and architecture, custom aluminium profiles are no longer a luxury — they’re a strategic necessity. Whether you’re building cutting-edge machinery, smart solar installations, sleek furniture, or futuristic infrastructure, customised aluminium profiles can significantly enhance both performance and design flexibility.",
    img1: ImageBlog4,
    link: "https://ratnashri.co.in/blog-4-how-custom-aluminium-profiles-enhance-product-performance-and-design-flexibility/",
  },
];

export default function Blogs() {
  return (
    <section className="blogs" id="blogs-section">
      <div className="BlogsContainer">
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
          className="heading"
        >
          Latest Blogs
        </motion.div>
        {/* <h2 className="blogs__title">Latest in Technology</h2> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="blogs__slider"
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog-card">
                {/* <img
                  src={blog.img}
                  alt={blog.title}
                  className="blog-card__img"
                /> */}
                 <Image
                    src={blog.img1}
                    alt={blog.title}
                    className="blog-card__img"
                  />
                <div className="blog-card__content">
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <p className="blog-card__desc">{blog.desc}</p>
                  {/* <Link href={`/blogs/${blog.id}`} className="blog-card__btn">
                    Read More
                  </Link> */}
                  <Link
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-card__btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
