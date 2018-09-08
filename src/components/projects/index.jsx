import * as React from "react";

const imagesRowOne = [
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg"
];

const imagesRowTwo = [
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg",
  "/images/portfolio placeholder.jpg"
];

const Projects = ({ className }) => (
  <div className={`project-section ${className}`}>
    <div className="projectflex">
      {imagesRowOne.map((img, i) => (
        <a className="projectsrowone" key={i}>
          <img className="img-responsive" src={img} alt="projectthumbnail" />
        </a>
      ))}
    </div>
    <div className="projectflex">
      {imagesRowTwo.map((img, i) => (
        <a className="projectsrowtwo" key={i}>
          <img className="img-responsive" src={img} alt="projectthumbnail" />
        </a>
      ))}
    </div>
  </div>
);
export default Projects;
