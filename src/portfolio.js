/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import MyPDF from "./assets/Resume.pdf";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sebastjan mevlja",
  title: "Hi all, I'm Sebastjan",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with Flutter / JavaScript / Nodejs / Django / and some other cool libraries and frameworks."
  ),
  resumeLink: MyPDF, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mevljas",
  linkedin: "https://www.linkedin.com/in/sebastjan-mevlja/",
  gmail: "sebastjan.mevlja@gmail.com",
  facebook: "https://www.facebook.com/sebastjan.mevlja",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I am an ambitious and energetic student, who commits a lot of his time, learning new upcoming technologies. I have studied in numerous fields of coding including web and mobile development, microcontroller hardware, and game development. As a high school student, I was introduced to mobile application development which grabbed my interest instantly and I've been dedicated to exploring this vast field ever since. In my free time, I like to learn new things, read books and travel. Besides studying for the university, I'm learning to develop Web and Mobile applications.",
  skills: [
    emoji("⚡ Develop Web and Mobile applications"),
    emoji("⚡ Backend development"),
    emoji("⚡ Software testing & quality")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Computer and Information Science Ljubljana",
      logo: require("./assets/images/fri.png"),
      subHeader: "Master's degree, Multimedia",
      duration: "October 2022 - Present",
      desc: "Second-cycle interdisciplinary Master's study programme."
    },
    {
      schoolName: "Faculty of Computer and Information Science Ljubljana",
      logo: require("./assets/images/fri.png"),
      subHeader: "Bachelor's degree, Computer and Information Sciences",
      duration: "October 2018 – September 2022",
      desc: "First cycle professional study programme.",
      descBullets: [
        "Programing languages: Java, Javascript, Python, PHP, C & R",
        "SQL",
        "Web development",
        "Android app development",
        "ARM microcontroller development",
        "Linux",
        "Vagrant",
        "Kubernetes",
        "WebGL",
        "Software testing & quality",
        "User interfaces",
        "Artificial intelligence",
        "Algorithms and data structures",
        "Computer communications",
        "Operating systems",
        "Graphic design",
        "Communication protocols and network security",
        "Computer graphics",
        "Statistics",
        "System software",
        "Software engineering",
        "Information systems",
        "Game technology and virtual reality",
        "Electronic and mobile business"
      ]
    },
    {
      schoolName: "Electrotechnical and Computer School Nova Gorica",
      logo: require("./assets/images/ers.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 – June 2018",
      desc: "Technical Secondary School For Computer Science.",
      descBullets: [
        "Programing languages: Java, Javascript & PHP",
        "HTML & CSS",
        "Oracle SQL & MySQL",
        "Oracle Forms",
        "Web development",
        "Android app development",
        "Hardware & Software management",
        "Motorola microcontroller development",
        "Linux & Windows server management",
        "Powershell",
        "Computer communications",
        "Electrical knowledge"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Node.js", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Django", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Vue.js", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Telekom Slovenije",
      companylogo: require("./assets/images/telekomSlovenije.png"),
      date: "May 2021 – Present",
      desc: "Development of a cross-platform Flutter NEO mobile application.",
      descBullets: [
        "Mobile Flutter Development",
        "Backend Python & Node.js Development"
      ]
    },
    {
      role: "Software Engineer",
      company: "Geological Survey of Slovenia",
      companylogo: require("./assets/images/geozs.png"),
      date: "Aug 2020 – Oct 2020",
      desc: "Development a content management system for the analysis of harvested data using Django, PostgreSQL, JavaScript, and HTML5/CSS."
    }
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
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/telekomSlovenije.png"),
      projectName: "NEO Mobile application",
      projectDesc: "Cross-platform NEO mobile application built with Flutter.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://neo.io/info"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/geozs.png"),
      projectName: "CMS for harvested data",
      projectDesc:
        "Content management system for the analysis of harvested data.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.geo-zs.si/index.php/en/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sebastjan.mevlja@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
