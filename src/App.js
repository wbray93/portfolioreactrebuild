import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </div>
  </Router>
);

export default App;
