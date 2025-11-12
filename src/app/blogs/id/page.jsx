"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./blogDetail.scss";

const blogData = [
  {
    id: 1,
    title: "Aluminium Profiles in Solar Energy: Powering India’s Renewable Future",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    html: `
      <p>India is on a fast track to becoming one of the world’s largest producers of renewable energy. With ambitious targets of achieving <strong>500 GW</strong> of renewable energy capacity by 2030, solar power is leading the way. But behind every solar panel that converts sunlight into clean energy lies an unsung hero — <strong>aluminium profiles</strong>.</p>

      <p>Lightweight, corrosion-resistant, and endlessly recyclable, aluminium sections and extrusions are the backbone of modern solar structures. Let’s dive into how aluminium is shaping the solar energy revolution in India and why it’s the material of choice for this future-focused industry.</p>

      <h3>Why Aluminium is Essential in Solar Energy</h3>
      <p>When it comes to solar power, efficiency and durability are everything. Solar panels are expected to perform for <strong>25+ years</strong> under varying conditions — heat, humidity, rain, and even storms. That’s where aluminium extrusions and profiles come in.</p>

      <ul>
        <li><strong>Lightweight yet strong:</strong> Aluminium weighs about one-third of steel but provides excellent strength, making it easier to transport, install, and maintain solar structures.</li>
        <li><strong>Corrosion resistance:</strong> Unlike other metals, aluminium naturally resists rust, ensuring long-lasting solar panel frames and mounting systems.</li>
        <li><strong>Design flexibility:</strong> Custom aluminium profiles can be extruded into complex shapes, providing flexibility to meet unique solar project requirements.</li>
      </ul>

      <h3>Aluminium Profiles in Solar Panel Mounting Systems</h3>
      <p>Mounting systems are the backbone of solar installations. They hold panels securely in place and ensure they’re angled correctly to capture maximum sunlight.</p>

      <ul>
        <li><strong>Ground-mounted systems:</strong> Widely used in large-scale solar farms, these rely on aluminium sections for strength and lightweight performance.</li>
        <li><strong>Rooftop installations:</strong> Aluminium’s lightness ensures that solar panels don’t add unnecessary weight to roofs, making them safer and more sustainable.</li>
        <li><strong>Floating solar projects:</strong> Aluminium extrusions provide the perfect mix of strength and resistance to environmental conditions.</li>
      </ul>

      <h3>The Sustainability Advantage</h3>
      <p>Choosing aluminium in solar energy projects isn’t just practical — it’s sustainable. Aluminium is 100% recyclable without losing its properties, making it a true circular-economy material.</p>

      <ul>
        <li>Recycling aluminium saves <strong>95%</strong> of the energy compared to producing it from raw bauxite.</li>
        <li>Around <strong>75%</strong> of aluminium ever produced</strong> is still in use today.</li>
      </ul>

      <h3>Aluminium and India’s Renewable Energy Growth</h3>
      <p>India is innovating at every stage of solar energy. Aluminium plays a central role in this journey:</p>
      <ul>
        <li><strong>Solar panel frames:</strong> Protect panels from mechanical stress and weather damage.</li>
        <li><strong>Mounting structures:</strong> Provide lightweight, durable support across terrains.</li>
        <li><strong>Cable trays and supports:</strong> Ensure safety and organisation of wiring in solar farms.</li>
      </ul>

      <p>Companies like <strong>Ratnashri Aluminium</strong> are providing custom solutions tailored to the solar industry’s needs.</p>

      <h3>Conclusion</h3>
      <p>The solar energy revolution in India isn’t just about harnessing sunlight — it’s about building reliable, efficient, and sustainable systems that stand the test of time. Aluminium profiles and extrusions make that possible.</p>
      <p><strong>At Ratnashri Aluminium</strong>, we provide custom aluminium sections and profiles designed to meet the unique requirements of solar energy projects. Together, let’s power India’s renewable future with innovation and sustainability.</p>
    `,
  },
  // Add more blogs here (with `html` content for each)
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="blog-detail__notfound">Blog not found</div>;
  }

  return (
    <motion.section
      className="blog-detail"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="blog-detail__container">
        <img src={blog.img} alt={blog.title} className="blog-detail__img" />
        <h1 className="blog-detail__title">{blog.title}</h1>

        {/* Render raw HTML content safely */}
        <div
          className="blog-detail__content"
          dangerouslySetInnerHTML={{ __html: blog.html }}
        ></div>

        <Link href="/#blogs-section" className="blog-detail__back">
          ← Back to Blogs
        </Link>
      </div>
    </motion.section>
  );
}
