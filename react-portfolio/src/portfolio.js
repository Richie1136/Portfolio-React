/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Richie Hagenah",
  title: "Hi all, I'm Richie",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having experience of building Web applications with JavaScript / Reactjs / Nodejs / Python and Django. Kenzie Academy Software Enginnering Alum."
  ),
  resumeLink:
    "https://docs.google.com/document/d/14h7swrGDiX6U9kERokmQew0FaQs47UKRY-b7MIkCldA/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Richie1136",
  linkedin: "https://www.linkedin.com/in/richardthagenah",
  gmail: "richardthagenah@gmail.com",
  facebook: "https://www.facebook.com/richie.hagenah/",
  twitter: "https://twitter.com/hagenah_richie",
  instagram: "https://www.instagram.com/richie1136/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "django",
      fontAwesomeClassname: "fab fa-django"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kenzie Academy",
      logo: require("./assets/images/kenzie.png"),
      subHeader: "Software Engineering",
      duration: "July 2020 - July 2021",
      desc: "Enrolled in a 12 month Full-Stack Software Engineering Program.",
      descBullets: [
        "Established foundations in Front-end and Back-end development.",
        "Productive and efficient member of a remote agile team.",
        "Gathered requirements, met deadlines, and created real-world applications involving virtual environments, OOP, building and user authentication systems."
      ]
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Member",
      company: "BestYetMarket",
      companylogo: require("./assets/images/bestlogo.png"),
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
      companylogo: require("./assets/images/noimage.png"),
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Favorite Projects",
  projects: [
    {
      image: require("./assets/images/connect4.png"),
      projectName: "Connect Four",
      projectDesc: "Built a Connect Four game using HTML,CSS and JavaScript in a 4 person team.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://connect-four-richie1136.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/countdown.png"),
      projectName: "Birthday Countdown",
      projectDesc: "Created a birthday countdown using HTML,CSS and JavaScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://birthday-count-down.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications, and Badges 🏆 "),

  achievementsCards: [
    {
      title: "Front-End Web Development Certificate ",
      subtitle:
        "6 month, Project-based, Front-end Development training.",
      image: require("./assets/images/frontend.png"),

    },
    {
      title: "Full-Stack Web Development Certificate",
      subtitle:
        "12 month, Project-based, Front-end & Back-end Development training.",
      image: require("./assets/images/fullstack.png"),
    },
    {
      title: "IBM z/OS Pre-apprenticeship badges",
      subtitle:
        "Took a self-paced IBM apprenticeship where i learned about the IBM Mainframe.",
      image: require("./assets/images/ibm.png"),
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  userName: "hagenah_richie", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails
};
