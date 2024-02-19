import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "FlixAI",
    TechStack: " React.js , Tailwind CSS , Firebase , Redux , OpenAI ,TMDB API",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708365673/Portfolio/ijn4dxogasi8y2errjpn.png",
    desc: "FlixAI, replicates an OTT platform with integrated ChatGPT for personalized movie recommendations. Developed with React, Firebase, and Redux, it ensures real-time updates, seamless authentication, and a mobile-friendly design.",
    link: "https://flix-ai.vercel.app",
    Github: "https://github.com/yash2324/FlixAI",
  },

  {
    id: 2,
    title: "Swift Flavours",
    TechStack: " React.js , Tailwind CSS , Redux , Formik , Shimmer UI , Jest",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1707853866/Portfolio/Swiftflavours-screenshots/sip56zuqbp8pmyg4ica7.png",
    desc: "I made a food ordering app's UI fetching realtime restaurant data from Swiggy's API. Also used Redux to build the cart functionality and make the site more efficient. Also, made the website very mobile friendly",
    link: "https://swift-flavours.vercel.app/",
    Github: "https://github.com/yash2324/Swift-Flavours",
  },

  {
    id: 3,
    title: "Meme Generator",
    TechStack: "React.js , HTML , CSS , JavaScript",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708366940/Portfolio/Swiftflavours-screenshots/dron8hyjrqtbpjtdj22g.png",
    desc: "I created a meme Generator using React.js. It fetches latest meme templates from an API and users can make memes on them ",
    link: "https://meme-generator-yg.netlify.app/",
    Github: "https://github.com/yash2324/Meme-Generator-2",
  },

  {
    id: 4,
    title: "Smart Secure",
    TechStack: " React.js , Tailwind CSS , Python , Flask",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708367290/Portfolio/Swiftflavours-screenshots/uho0j8ikcle9bzejnjcy.png",
    desc: "Made the front-end for a Crime Analysis System , using the past crimes data of India the model predicts the crime stats of a particular district for the upcoming years and also visualises the past stats of that district and area",
    link: "https://smartsecure.netlify.app/",
    Github: "https://github.com/yash2324/smart-secure",
  },
  {
    id: 5,
    title: "Tenzies",
    TechStack: " React.js , JavaScript, HTML , CSS",
    img: "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708367458/Portfolio/Swiftflavours-screenshots/a15pncxqojzwy3zrshrw.png",
    desc: "I made a basic tenzies Game , using React made the game more fun by adding confetti, Also used hooks to manage the state of the game",
    link: "https://tenzies-game-yg.netlify.app/",
    Github: "https://github.com/yash2324/Tenzies",
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
            <p>{item.TechStack}</p>
            <p>{item.desc}</p>
            <div className="btns_links">
              <a href={item.link} target="_blank">
                <button>See Demo</button>
              </a>
              <a href={item.Github} target="__blank">
                <FaGithub
                  className="icons"
                  style={{ width: "40px", height: "40px" }}
                  color="white"
                />
              </a>
            </div>
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
    damping: 20,
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
