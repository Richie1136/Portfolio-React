import { useContext } from "react";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeIn";

const Achievement = () => {
  const { isDark } = useContext(StyleContext);
  const { title, subtitle, achievementsCards } = achievementSection
  return (
    <motion.div className="main"
      id="achievements"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementsCards.map((card, i) => {
              const { title, subtitle, image } = card;
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: title,
                    description: subtitle,
                    image: image,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement

