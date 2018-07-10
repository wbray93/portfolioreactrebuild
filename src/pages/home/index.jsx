import * as React from "react";
import "./style.css";
import "../../components/professionalimage";
import Form from "../../components/form";
import Social from "../../components/social media";
import Professionalimage from "../../components/professionalimage";
import Skills from "../../components/skills"

const Home = () => (
  <div className="home">
    <Professionalimage />
    <Skills />
    <Form />
    <Social />
  </div>
);

export default Home;
