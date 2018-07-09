import * as React from "react";
import "./style.css";
import "../../components/professionalimage";
import Form from "../../components/form";
import Social from "../../components/social media";
import Professionalimage from "../../components/professionalimage";

const Home = () => (
  <div className="home">
    <Professionalimage />
    <Form />
    <Social />
  </div>
);

export default Home;
