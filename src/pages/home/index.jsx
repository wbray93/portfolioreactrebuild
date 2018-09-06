import * as React from "react";
import "./style.css";
import "../../components/professionalimage";
import Form from "../../components/form";
import Social from "../../components/social media";
import Professionalimage from "../../components/professionalimage";
import Skills from "../../components/skills";
import Paragraph from "../../components/paragraph";
import Projects from "../../components/projects";

const Home = () => (
  <div className="home">
    <div className="home-page-description">
      <Professionalimage />
      <Paragraph className="desktop-only professional-description">
        I believe that life is an adventure, and the greatest adventures come
        from learning, and growing as a person. My goal in life is to, "Live
        like I am writing my own biography." I am passionate about web
        development, especially front end development. When using my skills in
        front end development, not only am I constantly in pursuit of more
        knowledge, I am also creating interactive, responsive, and beautiful
        experiences for other people. This is what keeps me passionate about
        front end development.
        <br />
        -William Bray
      </Paragraph>
    </div>
    <Skills />
    <div className="home">
      <Projects className="desktop-only" />
    </div>

    <Form />
    <Social />
  </div>
);

export default Home;
