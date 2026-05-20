import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import StyleContext from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.css";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref);

  const changeTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      <div className={isDark ? "dark-mode" : ""}>
        <Header />
        <Greeting />
        <Skills />
        <Education />
        <WorkExperience />
        <StartupProject />
        <Achievement />
        <Profile />
        <Footer />
        <Top />
      </div>
    </StyleContext.Provider>
  );
};

export default Main;
