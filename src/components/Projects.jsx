import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "E-commerce Website",
      img: "/projects/1.png",
      gLink: "https://github.com/asuhaib2002",
      lLink: "http://suhaibshariff.pythonanywhere.com/",
    },
    {
      title: "Weather APP",
      img: "/projects/2.png",
      gLink: "https://github.com/asuhaib2002",
      lLink: "http://suhaibshariff.pythonanywhere.com/",
    },
    {
      title: "Hospital management System",
      img: "/projects/3.png",
      gLink: "https://github.com/asuhaib2002",
      lLink: "http://suhaibshariff.pythonanywhere.com/",
    },
    {
      title: "Quiz App Api",
      img: "/projects/4.png",
      gLink: "https://github.com/asuhaib2002",
      lLink: "http://suhaibshariff.pythonanywhere.com/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/asuhaib2002"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                All of these projects are made using Django Web framework and deployed on heroku or pythonanywhere.com
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;