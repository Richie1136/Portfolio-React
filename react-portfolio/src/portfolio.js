import emoji from "react-easy-emoji";

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
    "https://docs.google.com/document/d/1g5fX1ysAR5xcW4STmYkKOI7wb_ktuMARsOJ6dZxN3n8/edit",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Richie1136",
  linkedin: "https://www.linkedin.com/in/richardthagenah",
  gmail: "richardthagenah@gmail.com",
  twitter: "https://twitter.com/hagenah_richie",

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
      logo: require("./assets/images/franklin-pre-apprenticeship.png").default,
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
      logo: require("./assets/images/kenzie.png").default,
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
      role: "Team Member",
      company: "BestYetMarket",
      companylogo: require("./assets/images/bestlogo.png").default,
      date: "June 2017 – February 2021",
      descBullets: [
        "Developed knowledge about products and sales",
        "Observed and organized departments.Effectively communicated with coworkers and management to collaborate on work.",
        "Provided exceptional customer service during high-volume, fast-paced operations",
        "Managed the quality of products presented on the aisle shelves.",
        "Followed directions and met expectations set by team lead and manager in a timely manner.",
        "Cross - trained to assist other departments.",
        "Breakdown of trucks and retrieve carts."
      ]
    },
    {
      role: "Assistant Manager",
      company: "Variety Gold Stamping Corp.",
      companylogo: require("./assets/images/noimage.png").default,
      date: "January 2012 – December 2015",
      descBullets: [
        "Assisted in daily tasks, including running the printing machine and stuffing cards into labels for luggage tags.",
        "Any other miscellaneous duties which were needed by the manager.",
        "Assisted customers via phone and email.",
        "Processed all orders that came through the mail.",
        "Helped keep track of inventory.",
      ]
    },
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
      image: require("./assets/images/sports.png").default,
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
      image: require("./assets/images/cryptoapp.png").default,
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
      image: require("./assets/images/ibm.png").default,
    },
    {
      title: "Full-Stack Web Development Certificate",
      subtitle:
        "12 month, Project-based, Front-end & Back-end Development training. Python, Django, Django Rest Framework and SQL",
      image: require("./assets/images/fullstack.png").default,
    },
    {
      title: "Front-End Web Development Certificate ",
      subtitle:
        "6 month, Project-based, Front-end Development training. HTML, CSS, JavaScript, React.js, Redux.js, Node.js, Express, MongoDB, Bootstrap",
      image: require("./assets/images/frontend.png").default,

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

// Twitter Section

const twitterDetails = {
  userName: "hagenah_richie",
  display: true
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
  twitterDetails
};
