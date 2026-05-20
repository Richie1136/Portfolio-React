import { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeIn";

const StartupProject = () => {
  const openUrlInNewTab = (url) => {
    if (!url) {
      return;
    }
    let win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <motion.div variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} initial="hidden" animate="visible" exit="hidden">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="more-projects-div">
            <Button
              text={"More Projects"}
              className="more-projects-button"
              href={socialMediaLinks.github}
              newTab={true}
            />
          </div>
          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>);
}

export default StartupProject
