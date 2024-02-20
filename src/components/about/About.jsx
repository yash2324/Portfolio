import { useRef, useState } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="intitial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>About Me:</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>
            I am a CSE Sophmore who loves to code .I am a passionate developer
            with expertise in full-stack development. I love creating
            user-friendly, responsive, and visually appealing web applications.
            I am dedicated to delivering high-quality solutions that meet the
            unique needs of each project.
          </h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
