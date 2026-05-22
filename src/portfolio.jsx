import emoji from "react-easy-emoji";
import Franklin from "./assets/images/franklin-pre-apprenticeship.png";
import Kenzie from "./assets/images/kenzie.png";
import Best from "./assets/images/bestlogo.png";
import NoImage from "./assets/images/noimage.png";
import SportsProject from "./assets/images/sports.png";
import CryptoProject from "./assets/images/cryptoapp.png";
import FullStack from "./assets/images/fullstack.png";
import IBM from "./assets/images/ibm.png";
import Frontend from "./assets/images/frontend.png";

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Richard Hagenah",
  title: "Hi all, I'm Richard Hagenah",
  subTitle: emoji(
    "A passionate JavaScript Developer with a focus in React.js, have experience of building Web applications with JavaScript / React.js / Node.js. Kenzie Academy Software Enginnering Alum."
  ),
  resumeLink:
    "https://docs.google.com/document/d/10B8zI5aY6rnERtXXvgOhjuR4IQNtUSRc4mceoW3ZfSE/edit?tab=t.0",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Richie1136",
  linkedin: "https://www.linkedin.com/in/richardthagenah",
  gmail: "richardthagenah@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications."
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Franklin Apprenticeships",
      logo: Franklin,
      subHeader: "Franklin Apprentice",
      duration: "Aug 2021 - Oct 2021",
      desc: "Completed a 110+ hour self-paced online program, successfully completing 9 IBM z/OS badges designed to provide foundational mainframe knowledge.",
      descBullets: [
        "Gained a good understanding of introductory enterprise computing and mainframe commands and panels.",
        "Achieved a basic understanding of system programming.",
        "Demonstrated soft skills for design thinking, agile, and professional skills (including problem-solving and collaboration).",
      ]
    },
    {
      schoolName: "Kenzie Academy",
      logo: Kenzie,
      subHeader: "Software Engineering",
      duration: "July 2020 - July 2021",
      desc: "Enrolled in a 12 month Full-Stack Software Engineering Program.",
      descBullets: [
        "Excelled in an in-depth 12-month, project-based, Full-Stack Software Engineering program.",
        "Gathered requirements, met deadlines, and created real-world applications involving virtual environments, OOP, building and user authentication systems as a member of a remote agile team.",
        "Developed knowledge in Object-oriented programming, development, testing and debugging code, as well as designing interfaces.",
      ]
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer (Frontend) Consultant",
      company: "New York Life Insurance Company",
      companylogo: NoImage,
      date: "January 2023 – May 2026",
      descBullets: [
        "Developed a centralized design color system using Storybook, improving UI consistency and streamlining collaboration across teams.",
        "Contributed to the implementation of Storyblok CMS, enabling the business team to independently manage application content without developer involvement.",
        "Built React and Redux frontend functionality for a new Individual Disability Insurance feature, improving usability and user experience.",
        "Owned triage and resolution of production and non-production defects within the Platform Maintenance team, supporting QA, business stakeholders, and field operations."
      ]
    },
    {
      role: "Team Member",
      company: "BestYetMarket",
      companylogo: Best,
      date: "June 2017 – February 2021",
      descBullets: [
        "Developed knowledge about products and sales.",
        "Provided exceptional customer service during high-volume, fast-paced operations.",
        "Developed customer relationships through friendly interactions and consistent appreciation.",
        "Stock shelves, cases, bins and tables with new or transferred merchandise.",
        "Effectively communicated with coworkers and management to collaborate on work and cross-trained to assist other departments.",
        "Managed the quality of products presented on the aisle shelves.",
        "Followed directions and met expectations set by team lead and manager in a timely manner.",
        "Breakdown of trucks and retrieved shopping carts."
      ]
    }
  ]
};

const showGithubProfile = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Favorite Projects",
  projects: [
    {
      image: SportsProject,
      projectName: "Sports App",
      projectDesc: "Built a Sports App using React.js and sportsdata.io Api to fetch data about Teams, Players and the current standings in the MLB. Able to filter teams by division",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sports-app-react.vercel.app"
        }
      ]
    },
    {
      image: CryptoProject,
      projectName: "Crypto",
      projectDesc: "Created a Crypto currency application using React as well as rapidApi to fetch information about the crypto currency which includes the name, price, percent change and the market cap. Able to filter coins by name and get news about certain cryptocurrencies using rapidApi.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crypto-currency-react-api.vercel.app"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications, and Badges 🏆 "),

  achievementsCards: [
    {
      title: "IBM z/OS Pre-apprenticeship badges",
      subtitle:
        "Completed a 110+ hour self-paced online program, successfully completing 9 IBM z/OS badges designed to provide foundational mainframe knowledge.",
      image: IBM,
    },
    {
      title: "Full-Stack Web Development Certificate",
      subtitle:
        "12 month, Project-based, Front-end & Back-end Development training. Python, Django, Django Rest Framework and SQL",
      image: FullStack,
    },
    {
      title: "Front-End Web Development Certificate ",
      subtitle:
        "6 month, Project-based, Front-end Development training. HTML, CSS, JavaScript, React.js, Redux.js, Node.js, Express, MongoDB, Bootstrap",
      image: Frontend,

    },
  ],
  display: true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is always open, so shoot me a message.",
  number: "631-697-4200",
  email_address: "richardthagenah@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  showGithubProfile,
  bigProjects,
  achievementSection,
  contactInfo,
};
