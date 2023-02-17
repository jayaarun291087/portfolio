import React from "react";
import "./Projects.css";
import { Element } from "react-scroll";
import ProjectList from "../ProjectList/ProjectList";

function Projects() {
  const miniprojects = [
    {
      img: "./assests/onlineshop.jpg",
      title: "ONLINE-SHOP",
      description: "Online shopping done using ReactJs & NodeJs",
      link: "https://onlineshop-jaya.netlify.app/",
    },
    {
      img: "./assests/gridlayout.jpg",
      title: "SLIDESHOW",
      description:
        " Grid layout done using HTML ,CSS Bootstrap",
      link: "https://gridlayout-css.netlify.app/",
    },
    {
      img: "./assests/recharge.jpg",
      title: "RECHARGE",
      description: "Recharge page done dynamically using ReactJs",
      link: "https://pricingtable-jaya.netlify.app/",
    },
    {
      img: "./assests/calculator.jpg",
      title: "Calculator",
      description: "Calculator done using DOM ,HTML,CSS",
      link: "https://calculator-jaya.netlify.app/",
    },
    {
      img: "./assests/restcountries.jpg",
      title: "REST COUNTRIES API",
      description: "Displaying country details",
      link: "https://restcountriespi-jaya.netlify.app/",
    },
    
  ];
  return (
    <Element className="project_container" id="projects">
      <h1>MINI PROJECTS</h1>
      <p>Here is the glimpse of mini-projects I have done</p>
      <div className="projects_images">
        {miniprojects.map((project, index) => {
          return (
            <ProjectList
              key={index}
              img={project.img}
              title={project.title}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </Element>
  );
}
export default Projects;