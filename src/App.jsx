import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from "./pages/home";
import ProjectsMobilePage from "./pages/projectsmobilepage";
import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.css";

// prettier-ignore
const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={ProjectsMobilePage} />
        </div>
    </Router>)
export default App;