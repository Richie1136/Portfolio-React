import React, { createRef, useContext } from "react";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";
import { fadeLeft, slideLeftBorder } from "../../animations/fadeIn";

const EducationCard = ({ school }) => {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
      : null;
  };
  const { isDark } = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <motion.div className="education-card" variants={fadeLeft} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="education-card-left">
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <p
              className={`${isDark ? "dark-mode" : ""
                } education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="education-card-border" variants={slideLeftBorder} viewport={{ once: true, amount: 0.2 }} initial="hidden" animate="visible" whileInView={"visible"}>
      </motion.div>
    </div>
  );
}

export default EducationCard
