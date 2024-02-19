import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="intitial"
          animate="animnate"
        >
          <motion.h2 variants={textVariants}>YASH GUPTA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer & DSA Enthusiast
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>My Projects</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

          <motion.img
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            variants={textVariants}
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        YASH GUPTA
      </motion.div>
    </div>
  );
};

export default Hero;
