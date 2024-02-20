import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isMobile = window.innerWidth <= 1000; // Adjust the threshold as needed
  const isInView = useInView(ref, { margin: isMobile ? "-50px" : "-100px" });

  return (
    <motion.div
      className="services"
      variants={isMobile ? {} : variants} // Apply animation only if not on mobile
      initial="initial"
      ref={ref}
      animate={isInView && !isMobile ? "animate" : ""}
    >
      <motion.div className="textContainer" variants={isMobile ? {} : variants}>
        <p>Explore the technologies that empower my work and expertise.</p>
        <hr />
      </motion.div>

      <motion.div className="listContainer" variants={isMobile ? {} : variants}>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="box"
            variants={isMobile ? {} : variants}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <div className="logo-container">
              <img
                src={`${tech.logo}`}
                alt={`${tech.title} `}
                // style={{ width: "100px", height: "100px" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const techStack = [
  {
    title: "Next.js",
    logo: "https://media.crystallize.com/crystallize_marketing/23/1/14/6/next_js_logo.svg",
  },
  {
    title: "React.js",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    title: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
  },
  {
    title: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  {
    title: "Express.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    title: "TypeScript",
    logo: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  {
    title: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
  },
  {
    title: "Tailwind CSS",
    logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png",
  },
  {
    title: "Redux",
    logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    title: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "CSS",
    logo: " https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  },
];

export default Services;
