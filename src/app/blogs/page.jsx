// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./blogs.scss";

// const blogData = [
//   {
//     id: 1,
//     title: "AI Revolution in Healthcare",
//     desc: "Discover how artificial intelligence is transforming patient care, diagnosis, and medical research.",
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     title: "The Future of Cloud Computing",
//     desc: "Explore scalable cloud solutions that empower businesses to grow faster and smarter.",
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 3,
//     title: "Blockchain Beyond Cryptocurrency",
//     desc: "Understand how blockchain is reshaping supply chains, security, and identity management.",
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 4,
//     title: "5G & The Internet of Things",
//     desc: "A deep dive into how 5G connectivity powers smart cities, autonomous vehicles, and IoT devices.",
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export default function Blogs() {
//   return (
//     <section className="blogs">
//       <div className="BlogsContainer">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 80,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 1.5,
//             },
//           }}
//           viewport={{ once: true }}
//           className="heading"
//         >
//           Latest Blogs
//         </motion.div>
//         {/* <h2 className="blogs__title">Latest in Technology</h2> */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           navigation={false}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="blogs__slider"
//         >
//           {blogData.map((blog) => (
//             <SwiperSlide key={blog.id}>
//               <div className="blog-card">
//                 <img
//                   src={blog.img}
//                   alt={blog.title}
//                   className="blog-card__img"
//                 />
//                 <div className="blog-card__content">
//                   <h3 className="blog-card__title">{blog.title}</h3>
//                   <p className="blog-card__desc">{blog.desc}</p>
//                   <Link href={`/blogs/${blog.id}`} className="blog-card__btn">
//                     Read More
//                   </Link>

//                   {/* <button className="blog-card__btn">Read More</button> */}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
