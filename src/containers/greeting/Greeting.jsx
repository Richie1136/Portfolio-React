import { useContext } from "react";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import me from '../../assets/images/me.JPG'

import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { fadeUp } from "../../animations/fadeIn";



const Greeting = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div className="greet-main"
      id="greeting"
      variants={fadeUp}
      initial="hidden"
      animate="visible">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
              <img className='propic' src={me} alt="Profile img" />
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Greeting
