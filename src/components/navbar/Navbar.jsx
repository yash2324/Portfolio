import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a
            href="https://github.com/yash2324"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub
              className="icons"
              style={{ width: "40px", height: "40px" }}
              color="white"
            />
          </a>

          <a
            href="https://linkedin.com/in/yash-gupta-012769206/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin
              className="icons"
              style={{ width: "40px", height: "40px" }}
              color="white"
            />
          </a>

          <a
            href="https://twitter.com/yashgupta023"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1w_AY_fYKSz_Dp9UXZb-nc5JpUIy6cLBF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2125/2125395.png"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
