import emoji from "react-easy-emoji";

const brandAssets = {
  uqam: require("./assets/images/brands/uqam-logo.jpg"),
  jeancoutu: require("./assets/images/brands/jean-coutu-logo.png"),
  couchetard: require("./assets/images/brands/couche-tard-logo.png"),
  ageei: require("./assets/images/brands/ageei-logo.png"),
  tux: require("./assets/images/brands/tux-logo.png")
};

const projectAssets = {
  donateWithAthena: require("./assets/images/projects/donate-with-athena-soa.jpg")
};

const splashScreen = {
  enabled: false,
  animation: null,
  duration: 0
};

const illustration = {
  animated: true
};

const greeting = {
  username: "George Fam",
  title: "Hi all, I'm George",
  subTitle: emoji(
    "Software engineering student building full-stack platforms, open-source fixes, and automation that removes repetitive work."
  ),
  resumeLink: "resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/George-Fam",
  linkedin: "https://www.linkedin.com/in/george-fam/",
  gmail: "fam.george@courrier.uqam.ca",
  gitlab: "https://gitlab.com/ageei/ageei.org",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "I build polished web systems, automation, and infrastructure that can be shipped and maintained.",
  skills: [
    emoji("⚡ Full-stack web apps with Angular, Spring Boot, REST APIs, and SQL"),
    emoji("⚡ Deployment pipelines, Docker-based services, and cloud delivery"),
    emoji("⚡ Automation, CI/CD, and tooling that reduces manual work"),
    emoji("⚡ Open-source bug fixes and platform extensions across web and desktop")
  ],
  softwareSkills: [
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "typescript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "javascript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "spring boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "gcp", fontAwesomeClassname: "fab fa-google" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "UQAM",
      logo: brandAssets.uqam,
      subHeader: "B.Sc. Computer Science & Software Engineering",
      duration: "Sept. 2023 - May 2027 (Expected)",
      desc: "Computer science and software engineering student focused on full-stack systems, DevOps, and applied problem solving.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Frontend", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "85%" },
    { Stack: "DevOps / Automation", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Student Association President",
      company: "AGEEI-UQAM",
      companylogo: brandAssets.ageei,
      date: "Apr. 2026 - Present",
      desc: "Lead the student association while shipping and maintaining its public platform and internal tooling.",
      descBullets: [
        "Oversaw student-facing systems and communications for the association.",
        "Kept the public platform aligned with changing content and event needs."
      ]
    },
    {
      role: "Student Association VP of Technology",
      company: "AGEEI-UQAM",
      companylogo: brandAssets.ageei,
      date: "Jan. 2026 - Apr. 2026",
      desc: "Built and maintained the association’s technical infrastructure, from CMS integrations to production hosting.",
      descBullets: [
        "Delivered the calendar sync and internal services deployed through GitLab CI.",
        "Ran production services with Docker, Nginx, SSO, and encrypted backups."
      ]
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "UQAM",
      companylogo: brandAssets.uqam,
      date: "Oct. 2024 - May 2026",
      desc: "Supported labs, tutoring, and teaching materials across Java, Linux, Git, debugging, and data structures.",
      descBullets: [
        "Led Linux workshops and wrote an install guide.",
        "Authored lab materials for core CS concepts and tooling."
      ]
    },
    {
      role: "Pharmacy Technician",
      company: "Jean Coutu",
      companylogo: brandAssets.jeancoutu,
      date: "Sept. 2022 - Feb. 2025",
      desc: "Handled customer support and medical data entry in a high-volume, accuracy-sensitive environment."
    },
    {
      role: "Assistant Manager",
      company: "Couche-Tard",
      companylogo: brandAssets.couchetard,
      date: "Jul. 2018 - Jul. 2020",
      desc: "Managed cash handling, store presentation, and team onboarding in a fast-paced retail setting.",
      descBullets: [
        "Improved cash accuracy and reduced discrepancies.",
        "Boosted holiday sales through product promotion."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Selected work from the CV, organized like case studies.",
  projects: [
    {
      image: projectAssets.donateWithAthena,
      projectName: "Donate With Athena",
      projectDesc:
        "Gamified donation platform for Shield of Athena, built in a 5-person team and awarded 2nd place at Morgan Stanley's Code to Give Hackathon.",
      footerLink: [
        { name: "Live site", url: "https://donatewithathena.com/" },
        { name: "Repository", url: "https://github.com/George-Fam/DonateWithAthena" }
      ]
    },
    {
      image: brandAssets.ageei,
      projectName: "AGEEI.org",
      projectDesc:
        "Full-stack Angular 21 + Java 17 association platform with CMS-driven content, FAQ search, and calendar synchronization.",
      footerLink: [
        { name: "Live site", url: "https://ageei.org/" },
        { name: "Repository", url: "https://gitlab.com/ageei/ageei.org" }
      ]
    },
    {
      image: "https://raw.githubusercontent.com/George-Fam/plezy-tizen/main/assets/plezy.png",
      projectName: "plezy-tizen",
      projectDesc:
        "Flutter-based Plex/Jellyfin client fork extended to Samsung Tizen with a native C# media player and CI/CD support.",
      footerLink: [{ name: "Repository", url: "https://github.com/George-Fam/plezy-tizen" }]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg",
      projectName: "LaTeX CV & Cover Letter Automation",
      projectDesc:
        "PowerShell and Python automation for generating, validating, and compiling multiple CV variants with GitHub Actions.",
      footerLink: [{ name: "Repository", url: "https://github.com/George-Fam/Resume" }]
    },
    {
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20250703161306662411/Example-of-an-AVL-Tree-11.webp",
      projectName: "AVL Tree Implementation",
      projectDesc:
        "C++ AVL tree with set operations and tests for correctness and performance; ranked 1st out of 116.",
      footerLink: [{ name: "Repository", url: "https://github.com/George-Fam/AVLTree" }]
    },
    {
      image: brandAssets.tux,
      projectName: "linutil open-source fix",
      projectDesc:
        "Fixed a runtime failure in the Ollama installer script of a popular Linux toolbox, restoring the installation flow for users.",
      footerLink: [{ name: "PR #1223", url: "https://github.com/ChrisTitusTech/linutil/pull/1223" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Selected wins that complement the project work.",
  achievementsCards: [
    {
      title: "CSGames 2026",
      subtitle: "4th place in DevOps.",
      image: "https://2026.csgames.org/img/CS-GAMES-26-LOGO.svg",
      imageAlt: "CSGames logo",
      footerLink: [
        { name: "CSGames", url: "https://2026.csgames.org/" }
      ]
    },
    {
      title: "Morgan Stanley Code to Give",
      subtitle: "2nd place out of 14 teams for Donate With Athena.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQHD-9v8FnpTCA/article-cover_image-shrink_600_2000/B56ZT.TABIGUAU-/0/1739433181799?e=1782345600&v=beta&t=7DcZkhm-Z1SSHBRKWNRkzqFkwPK99Z2kX1NLeKaE1Xk",
      imageAlt: "Morgan Stanley Code to Give",
      footerLink: [
        { name: "LinkedIn post", url: "https://www.linkedin.com/posts/george-fam_codetogive-share-7396397437004845057-oDop/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC20l1oB394J8T-vBLVxWxrGSFRJGJrbmoU" }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Writing is hidden for this portfolio.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Talks are hidden for this portfolio.",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "If you want to talk projects, internships, or collaboration, my inbox is open.",
  number: "514-663-9709",
  email_address: "fam.george@courrier.uqam.ca"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

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
