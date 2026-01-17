/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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

const greeting: {
  title: "Hi, I'm Virdoex Hunter",
  subtitle:
    "Application Security Engineer & Bug Bounty Hunter with 5+ years of offensive-first experience across Web, API, Mobile (Android/iOS) and Microservices. I focus on how trust breaks in real product flows — auth, payments, sessions, and abuse paths.",
},

  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "virdoexhunter@gmail.com",
  github: "https://github.com/Virdoexhunter",
  linkedin: "https://www.linkedin.com/in/virdoexhunter/",
  twitter: "https://x.com/virdoex_hunter",
  medium: "https://virdoexhunter.medium.com",
  youtube: "https://www.youtube.com/@virdoex",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
 title: "What I Do",
subTitle: "OFFENSIVE APPLICATION SECURITY & PRODUCT DEFENSE",
skills: [
  emoji(
    "⚡ Perform offensive-first security testing across Web, API, Mobile (Android / iOS) and microservice architectures to uncover real-world abuse paths."
  ),
  emoji(
    "⚡ Identify authentication, authorization, session and business-logic flaws by modeling how trust breaks in real product flows."
  ),
  emoji(
    "⚡ Conduct threat modeling from feature ideation to architecture review and translate risks into developer-actionable remediation."
  ),
  emoji(
    "⚡ Embed security into CI/CD pipelines using SAST, DAST and SCA to enable shift-left security."
  ),
  emoji(
    "⚡ Build exploit proof-of-concepts and work directly with engineering teams until fixes are shipped to production."
  ),
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  data: [
    {
      title: "Application & Product Security",
      skills: [
        "Web Application Pentesting",
        "API Security & Authorization Flaws",
        "Mobile Security (Android / iOS)",
        "Thick Client Security Testing",
        "Authentication & Authorization Abuse",
        "Business Logic & Payment Flow Exploitation",
        "Session Management & Token Security",
        "OAuth / OIDC / SSO Misconfigurations",
        "Threat Modeling & Abuse Case Identification",
        "Secure SDLC & Security Design Reviews",
      ],
    },
    {
      title: "DevSecOps & CI/CD Security",
      skills: [
        "CI/CD Pipeline Security",
        "Shift-Left Security Practices",
        "SAST (Checkmarx, Semgrep)",
        "DAST (Burp Suite Pro, OWASP ZAP)",
        "Software Composition Analysis (SCA)",
        "Secrets Detection (trufflehog)",
        "Dependency & Supply-Chain Security",
      ],
    },
    {
      title: "Container, Cloud & Microservices Security",
      skills: [
        "Container Runtime Security (Sysdig)",
        "Microservices Architecture Assessments",
        "Runtime Misconfiguration Detection",
        "Service-to-Service Trust Abuse",
        "Kubernetes Security Basics",
        "Cloud-Native Threat Modeling",
      ],
    },
    {
      title: "Mobile, IoT & Specialized Testing",
      skills: [
        "Android Pentesting (Frida, MobSF, Jadx)",
        "iOS Application Security Testing",
        "Deeplink & URL Scheme Exploitation",
        "IoT & MIoT Pentesting",
        "Medical Devices (DICOM, HL7, PACS)",
        "FDA 510(k), SaMD, SBOM Security Reviews",
      ],
    },
    {
      title: "Red Teaming & Adversary Simulation",
      skills: [
        "Red Team Engagements",
        "Phishing & Social Engineering",
        "Attack Simulation & Threat Emulation",
        "OSINT-Driven Recon & Enumeration",
        "Attack Surface Management",
        "MITRE ATT&CK Mapping",
      ],
    },
    {
      title: "Tools, Automation & Scripting",
      skills: [
        "Burp Suite Pro, Nuclei, ZAP",
        "Frida, MobSF, Jadx",
        "Nmap, Metasploit",
        "Sysdig, Kibana, Redpanda",
        "Bash & Python Automation",
        "Custom Security Tooling",
      ],
    },
    {
      title: "Standards, Frameworks & Compliance",
      skills: [
        "OWASP Top 10 (Web, API, Mobile)",
        "NIST Security Framework",
        "PCI-DSS",
        "HIPAA",
        "GDPR",
        "FDA Security Standards",
      ],
    },
    {
      title: "Soft Skills & Collaboration",
      skills: [
        "Security Communication with Engineers",
        "Developer-Actionable Reporting",
        "Problem Solving & Root Cause Analysis",
        "Cross-Team Collaboration",
        "Leadership & Mentorship",
        "Client-Facing Security Discussions",
      ],
    },
  ],
};

// Education Section

const educationInfo = [
  {
    schoolName: "Kurukshetra University",
    subHeader: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    duration: "2017 – 2020",
    desc:
      "Completed undergraduate studies with strong foundations in computer science, software engineering, and security concepts.",
    grade: "79%",
  },
  {
    schoolName: "GBN Polytechnic",
    subHeader: "Diploma in Computer Science Engineering",
    duration: "2015 – 2017",
    desc:
      "Focused on core programming, networking, operating systems, and practical system-level engineering.",
    grade: "80%",
  },
];


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = [
  {
    role: "Product Security Consultant",
    company: "Emirates NBD (via Forward Defense)",
    companylogo: require("./assets/images/enbd.png"),
    date: "Feb 2025 – Present",
    desc: [
      "Performed targeted security assessments for web, Android and iOS applications operating in microservice architectures.",
      "Led threat modeling sessions from feature ideation through architecture review, identifying abuse cases before code was written.",
      "Embedded security checks into sprint cycles and CI/CD pipelines to enable shift-left security.",
      "Built exploit proof-of-concepts for authentication, authorization, session and payment abuse to demonstrate real-world impact.",
      "Reviewed design documents and feature proposals, flagging broken trust assumptions and weak enforcement boundaries.",
      "Reverse engineered client-side logic to identify hidden authorization paths and trust bypasses.",
      "Partnered directly with engineering teams to ensure vulnerabilities were remediated and validated before production release.",
    ],
  },
  {
    role: "Security Consultant",
    company: "Ampcus Cyber",
    companylogo: require("./assets/images/ampcus.png"),
    date: "Feb 2024 – Feb 2025",
    desc: [
      "Conducted comprehensive web, API and mobile (Android/iOS) security assessments with emphasis on business logic exploitation.",
      "Chained low-severity issues into high-impact attack paths across authentication, authorization and workflow logic.",
      "Built automation scripts to eliminate repetitive manual testing and scale assessment coverage.",
      "Led OSINT-driven attack surface discovery and adversary simulations.",
      "Executed red team exercises including phishing and social engineering campaigns.",
      "Delivered detailed, developer-actionable security reports and remediation guidance.",
    ],
  },
  {
    role: "Cyber Security Specialist",
    company: "Network Intelligence India",
    companylogo: require("./assets/images/nii.png"),
    date: "Oct 2021 – Dec 2023",
    desc: [
      "Led vulnerability assessment and penetration testing (VAPT) for web, mobile and infrastructure environments.",
      "Performed firewall, WAF, WiFi and network device security reviews for enterprise clients.",
      "Assessed secure configurations across servers, network devices and perimeter controls.",
      "Collaborated with client teams to validate fixes and improve security posture.",
      "Contributed to multiple enterprise-scale security engagements across regulated environments.",
    ],
  },
];


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
