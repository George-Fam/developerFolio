import emoji from "react-easy-emoji";

const brandAssets = {
  uqam: require("./assets/images/brands/uqam-logo.jpg"),
  jeancoutu: require("./assets/images/brands/jean-coutu-logo.png"),
  couchetard: require("./assets/images/brands/couche-tard-logo.png"),
  ageei: require("./assets/images/brands/ageei-logo.png"),
  bell: require("./assets/images/brands/bell-logo.png"),
  tux: require("./assets/images/brands/tux-logo.png"),
  morganStanleyCodeToGive: require("./assets/images/brands/morgan-stanley-code-to-give.jpg")
};

const projectAssets = {
  donateWithAthena: require("./assets/images/projects/donate-with-athena-soa.jpg"),
  optiframe: require("./assets/images/projects/optiframe.png")
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
    "Software engineering student and software development intern at Bell Flight, building full-stack platforms, open-source fixes, and automation that removes repetitive work."
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
  subTitle:
    "I build polished web systems, automation, and infrastructure that can be shipped and maintained.",
  skills: [
    emoji(
      "⚡ Full-stack web apps with Angular, Spring Boot, REST APIs, and PostgreSQL"
    ),
    emoji("⚡ Deployment pipelines, Docker-based services, and cloud delivery"),
    emoji("⚡ Automation, CI/CD, and tooling that reduces manual work"),
    emoji(
      "⚡ Computer-vision measurement pipelines with OpenCV and ONNX models"
    ),
    emoji(
      "⚡ Open-source bug fixes and platform extensions across web and desktop"
    )
  ],
  softwareSkills: [
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "angular", fontAwesomeClassname: "fab fa-angular"},
    {skillName: "typescript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "javascript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "spring boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "gcp", fontAwesomeClassname: "fab fa-google"},
    {skillName: "sql", fontAwesomeClassname: "fas fa-database"},
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "bash", fontAwesomeClassname: "fas fa-terminal"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"}
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
      duration: "Sept. 2023 - Dec. 2027 (Expected)",
      desc: "Computer science and software engineering student focused on full-stack systems, DevOps, and applied problem solving.",
      descBullets: [
        "4th place, CSGames 2026 (DevOps)",
        "2nd place, Morgan Stanley Code to Give",
        "Ranked 1st of 116 on a C++ course project (AVL tree with set operations)"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "Frontend", progressPercentage: "90%"},
    {Stack: "Backend", progressPercentage: "85%"},
    {Stack: "DevOps / Automation", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Intern, Business Intelligence",
      company: "Bell Flight (Textron)",
      companylogo: brandAssets.bell,
      date: "Aug. 2026 - Present",
      desc: "Workflow automation and analytics applications for a BI team expanding into custom software.",
      descBullets: [
        "Own a workflow automation and digitalization application end to end, built with Angular, Spring Boot (Spring Modulith) and Azure SQL, targeting a 50% reduction in a business process's lead time.",
        "Co-develop the migration of an Excel-fed Power BI report into a full-stack Databricks App: build the Python Flask backend on Lakebase, own platform deployment and CI/CD, and contribute to the Angular frontend.",
        "Established the software development workflow for a BI team expanding into custom applications: branching and pull-request policy, CI pipelines, and project structure in Azure DevOps.",
        "Built the team's internal marketplace of AI coding-assistant skills and agents: authored 10+ skills and 2 agents (requirements and architecture documents, architecture review against source code, Azure DevOps automation), packaged as installable plugins with a release pipeline to Artifactory."
      ]
    },
    {
      role: "Student Association President",
      company: "AGEEI-UQAM",
      companylogo: brandAssets.ageei,
      date: "Apr. 2026 - Present",
      desc: "Lead a 12-person executive team representing 860+ undergraduate computer science students at UQAM.",
      descBullets: [
        "Launched 4 new student clubs (AI, AWS Student Builder Group, Competitive Programming, UI/UX) and revived the Game Development club, growing them to 135 active members.",
        "Organized Montreal's Hacktoberfest Hack Day with Major League Hacking for about 40 participants and built partnerships with PolyAI, AQIII, and Bittensor for workshops and a seminar.",
        "Hosted an on-campus recruiting session with RBC; relaunching the association's career fair for winter 2027, its first edition since 2020."
      ]
    },
    {
      role: "Student Association VP of Technology",
      company: "AGEEI-UQAM",
      companylogo: brandAssets.ageei,
      date: "Jan. 2026 - Apr. 2026",
      desc: "Built and ran the association's technical infrastructure, from CMS integrations to production hosting.",
      descBullets: [
        "Built a Java app on Azure Functions integrating Directus CMS with Google Calendar via webhooks and a nightly cron job, deployed via GitLab CI.",
        "Administered a production Azure VM running Vaultwarden, Snipe-IT, and Directus CMS via Docker Compose and Nginx behind Cloudflare, with SSO and automated encrypted backups.",
        "Set up a CTFd competition platform and designed original CTF challenges in cryptography, steganography, and reverse engineering."
      ]
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "UQAM",
      companylogo: brandAssets.uqam,
      date: "Oct. 2024 - May 2026",
      desc: "Lab sessions, tutoring, and teaching materials for core computer science courses.",
      descBullets: [
        "Designed and delivered lab sessions with course instructors and tutored students in Java, OOP, Assembly, Linux, Git, debugging, and Data Structures & Algorithms.",
        "Facilitated Linux workshops and authored an install guide and lab materials on data structures and software tooling."
      ]
    },
    {
      role: "Pharmacy Technician",
      company: "Jean Coutu",
      companylogo: brandAssets.jeancoutu,
      date: "Sept. 2022 - Feb. 2025",
      desc: "Delivered high-volume customer support and medical data entry, triaging requests while maintaining accuracy, confidentiality, and time-sensitive service targets."
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
        "Full-stack gamified donation platform for Shield of Athena (Java, Spring Boot, Angular, MySQL), built in a 5-person team, containerized with Docker and deployed on GCP. Awarded 2nd place out of 14 teams at Morgan Stanley's Code to Give Hackathon.",
      footerLink: [
        {name: "Live site", url: "https://donatewithathena.com/"},
        {
          name: "Repository",
          url: "https://github.com/George-Fam/DonateWithAthena"
        }
      ]
    },
    {
      image: projectAssets.optiframe,
      projectName: "OptiFrame",
      projectDesc:
        "CodeML 2026 hackathon app, built in a 4-person team, that turns a photo of a recycled eyeglass lens into a 3D-printable frame. Spring Boot measurement pipeline (OpenCV, U-Net exported to ONNX) with about 0.2 mm error against a 0.5 mm target, and an Angular PWA with a 3D preview.",
      footerLink: [
        {name: "Live site", url: "https://optiframe.app/"},
        {name: "Repository", url: "https://github.com/George-Fam/optiframe"}
      ]
    },
    {
      image: brandAssets.ageei,
      projectName: "AGEEI.org",
      projectDesc:
        "Full-stack association platform: Angular 21 frontend on Azure Static Web Apps and a Java 17 serverless backend on Azure Functions, with content managed in Directus CMS and automated GitLab CI deployments.",
      footerLink: [
        {name: "Live site", url: "https://ageei.org/"},
        {name: "Repository", url: "https://gitlab.com/ageei/ageei.org"}
      ]
    },
    {
      image:
        "https://raw.githubusercontent.com/George-Fam/plezy-tizen/main/assets/plezy.png",
      projectName: "plezy-tizen",
      projectDesc:
        "Fork adding Samsung Tizen TV support to a Flutter-based Plex/Jellyfin client, with a native C# media player written from scratch and a GitHub Actions job producing a signed TPK.",
      footerLink: [
        {name: "Repository", url: "https://github.com/George-Fam/plezy-tizen"}
      ]
    },
    {
      image: brandAssets.tux,
      projectName: "Open-source fixes: pgloader, linutil",
      projectDesc:
        "Fixed a pgloader v4 performance regression where the MSSQL source applied INCLUDING/EXCLUDING filters only after querying metadata for every table, and a runtime failure in the Ollama installer script of linutil, a 5k-star Linux toolbox.",
      footerLink: [
        {
          name: "pgloader PR #1785",
          url: "https://github.com/dimitri/pgloader/pull/1785"
        },
        {
          name: "PR #1223",
          url: "https://github.com/ChrisTitusTech/linutil/pull/1223"
        }
      ]
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
      footerLink: [{name: "CSGames", url: "https://2026.csgames.org/"}]
    },
    {
      title: "Morgan Stanley Code to Give",
      subtitle: "2nd place out of 14 teams for Donate With Athena.",
      image: brandAssets.morganStanleyCodeToGive,
      imageAlt: "Morgan Stanley Code to Give",
      footerLink: [
        {
          name: "LinkedIn post",
          url: "https://www.linkedin.com/posts/george-fam_codetogive-share-7396397437004845057-oDop/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC20l1oB394J8T-vBLVxWxrGSFRJGJrbmoU"
        }
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
  subtitle:
    "If you want to talk projects, internships, or collaboration, my inbox is open.",
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
