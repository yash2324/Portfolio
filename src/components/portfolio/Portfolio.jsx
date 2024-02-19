import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "FlixAI",
    TechStack: " React.js , Tailwind CSS , Firebase , Redux , OpenAI ,TMDB API",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708365673/Portfolio/ijn4dxogasi8y2errjpn.png",
    desc: "FlixAI, replicates an OTT platform with integrated ChatGPT for personalized movie recommendations. Developed with React, Firebase, and Redux, it ensures real-time updates, seamless authentication, and a mobile-friendly design.",
    link: "https://flix-ai.vercel.app",
    Github: "",
  },

  {
    id: 2,
    title: "Swift Flavours",
    TechStack: " React.js , Tailwind CSS , Firebase , Redux , OpenAI ,TMDB API",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1707853866/Portfolio/Swiftflavours-screenshots/sip56zuqbp8pmyg4ica7.png",
    desc: "I created front-end of a crypto currency transaction website using ReactJs. I created a dashboard of crypto trading website in a better way by optimising the design significantly using Figma.",
    link: "https://swift-flavours.vercel.app/",
    Github: "",
  },

  {
    id: 3,
    title: "Spotify Clone",
    TechStack: " React.js , Tailwind CSS , Firebase , Redux , OpenAI ,TMDB API",
    img: "https://community.spotify.com/t5/image/serverpage/image-id/55514i8AFC0460BFEFB92C?v=v2",
    desc: "I created a Spotify clone using ReactJs and SAAS. I created the design by taking inspiration from official Spotify web page and creating the design through Figma. I also used the useSound hook to give a smooth experience to the music app",
    link: "",
    Github: "",
  },

  {
    id: 4,
    title: "Netflix Clone",
    TechStack: " React.js , Tailwind CSS , Firebase , Redux , OpenAI ,TMDB API",
    img: "https://assets.materialup.com/uploads/455710a0-6d36-4a9d-95cb-dfa280604dd3/preview.png",
    desc: "I created a Netflix clone using ReactJs and SAAS. I created the design by taking inspiration from official Netflix web page and creating the design through Figma. Also used basics of NextJs to create multi-page ReactJs website.",
    link: "",
    Github: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start" , "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <a href={item.link} target="_blank">
              <img src={item.img} alt="" />
            </a>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>

        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} link={item.link} />
      ))}
    </div>
  );
};

export default Portfolio;
