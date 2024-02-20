import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="TechStack">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="My Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="About Me">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
