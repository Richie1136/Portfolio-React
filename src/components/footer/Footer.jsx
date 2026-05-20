import { useContext } from "react";
import "./Footer.css";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made by Richard Hagenah")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Footer
