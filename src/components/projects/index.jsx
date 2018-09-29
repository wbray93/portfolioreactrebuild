import * as React from "react";

const projects = [
  {
    name: "readinglist",
    image: "/images/myreadinglist.png",
    link: "https://my-reading-list-and-wishlist.herokuapp.com/"
  },
  {
    name: "placeholder2",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placehokder3",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placeholder4",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placeholder5",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placeholder6",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placeholder7",
    image: "/images/portfolio placeholder.jpg"
  },
  {
    name: "placeholder8",
    image: "/images/portfolio placeholder.jpg"
  }
];

let projectsByRow = [];

// Add projects by row with max of 4 elements
while(projects.length > 4) {
  projectsByRow.push(projects.splice(0,4));
}

// Push remaining into last row
projectsByRow.push(projects);

const Projects = ({ className }) => (
  <div className={className}>
    <div>
        { // Map each individual row
          projectsByRow.map(row => (
          <div className="projects-row">
          {// Map each individual project (image)
            row.map(project => (
            <a href={project.link} key={project.name}>
              <img className="project" src={project.image} alt={project.name} />
            </a>
          ))
          }
          </div>
        ))}
    </div>
  </div>
);
export default Projects;
