import { useRef, useState } from "react";
import "./contact.scss";
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
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <a href="mailto:thisisyashgpt@gmail.com">thisisyashgpt@gmail.com</a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Delhi,India</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8447761361</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
