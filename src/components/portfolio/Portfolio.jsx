import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nike Clone",
    img: "https://assets.materialup.com/uploads/862bdeb9-2bde-4967-b4eb-985cac51fb44/attachment.png",
    desc: "I created a Nike clone using ReactJs and Bootstrap CSS. I created the design by taking inspiration from official Nike web page and creating the design through Figma.",
  },

  {
    id: 2,
    title: "Crypto Dashboard",
    img: "https://s3.envato.com/files/428881927/02_preview.png",
    desc: "I created front-end of a crypto currency transaction website using ReactJs. I created a dashboard of crypto trading website in a better way by optimising the design significantly using Figma.",
  },

  {
    id: 3,
    title: "Spotify Clone",
    img: "https://community.spotify.com/t5/image/serverpage/image-id/55514i8AFC0460BFEFB92C?v=v2",
    desc: "I created a Spotify clone using ReactJs and SAAS. I created the design by taking inspiration from official Spotify web page and creating the design through Figma. I also used the useSound hook to give a smooth experience to the music app",
  },

  {
    id: 4,
    title: "Netflix Clone",
    img: "https://assets.materialup.com/uploads/455710a0-6d36-4a9d-95cb-dfa280604dd3/preview.png",
    desc: "I created a Netflix clone using ReactJs and SAAS. I created the design by taking inspiration from official Netflix web page and creating the design through Figma. Also used basics of NextJs to create multi-page ReactJs website.",
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
