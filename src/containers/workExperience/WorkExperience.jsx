import { useContext } from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeIn";


const WorkExperience = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div id="experience">
      <motion.div className="experience-container"
        id="workExperience"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}

                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default WorkExperience

