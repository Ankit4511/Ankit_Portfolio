import leetmetric from "../assets/leetMetric.png";
import studysync from "../assets/study-sync.png";
import mclaren from "../assets/McLaren.jpg";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    id: "leetmetric",

    title: "LeetMetric App",
    category: "React",

    type: "Personal",

    year: 2025,

    status: "Completed",

    difficulty: "Intermediate",

    aiReady: false,
    
    deployment: "Not Deployed",

    image: leetmetric,

    overview:
      "LeetMetric is a React-based analytics dashboard that helps users track and visualize their LeetCode progress through interactive charts and statistics.",

    fullDescription:
      "LeetMetric provides a comprehensive overview of coding progress by displaying problem-solving statistics, accuracy metrics, difficulty distribution, and performance insights. The application helps users stay motivated and monitor their coding journey with a clean and modern interface.",

    features: [
      "Track total problems solved and accuracy",
      "Breakdown by difficulty levels",
      "Interactive charts and graphs",
      "Performance analytics",
      "Motivational progress tracking",
    ],

    techStack: ["React.js", "Tailwind CSS", "Chart.js", "JavaScript"],

    github: "https://github.com/Ankit4511/LeetMetric-App",

    live: "#",

    featured: true,
  },

  {
    id: "study-sync",

    title: "StudySync",
    category: "MERN",

    type: "Academic",

    year: 2025,

    status: "Completed",

    difficulty: "Advanced",

    aiReady: false,

    deployment: "Vercel",

    image: studysync,

    overview:
      "StudySync is a full-stack educational platform designed to improve students' learning experience through centralized study management.",

    fullDescription:
      "StudySync helps students organize study materials, track learning progress, manage educational resources, and improve productivity. The application focuses on delivering a modern and intuitive learning environment while maintaining responsiveness and performance across all devices.",

    features: [
      "Responsive and modern UI",
      "Secure authentication system",
      "Study material management",
      "Progress tracking",
      "Interactive learning workflow",
      "Mobile-friendly design",
      "Optimized performance",
      "Personalized learning experience",
    ],

    techStack: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "HTML5",
      
    ],

    github: "https://github.com/Ankit4511/study-sync",

    live: "https://study-sync-cyan-three.vercel.app/",
    featured: true,
  },

  {
    id: "portfolio",

    title: "Personal Portfolio",
    category: "Frontend",

    type: "Personal",

    year: 2025,

    status: "In Progress",

    difficulty: "Advanced",

    aiReady: true,

    deployment: "Vercel",

    image: portfolio,

    overview:
      "A modern developer portfolio built using React and Tailwind CSS showcasing skills, projects, certifications and GitHub activity.",

    fullDescription:
      "This portfolio website was developed to create a professional online presence. It includes responsive layouts, project showcases, certifications, GitHub statistics, animations, and contact functionality. The project follows component-based architecture and modern UI principles to provide an engaging user experience.",

    features: [
      "Responsive design",
      "Modern dark theme UI",
      "Projects showcase",
      "GitHub statistics dashboard",
      "Certification section",
      "Animated interactions",
      "Contact section",
      "React Router navigation",
    ],

    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "React Icons",
      "Vercel",
    ],

    github: "https://github.com/Ankit4511/Responsive-Portfolio",

    live: "https://ankitsutharportfolio.vercel.app/",
    homepage: true,
  },

  {
    id: "mclaren",

    title: "McLaren Landing Page",
    category: "Frontend",

    type: "Personal",

    year: 2024,

    status: "Completed",

    difficulty: "Beginner",

    aiReady: false,

    deployment: "Not Deployed",

    image: mclaren,

    overview:
      "A premium automotive landing page inspired by McLaren branding and modern web design principles.",

    fullDescription:
      "The McLaren Landing Page focuses on creating a visually stunning automotive experience using modern layouts, responsive design, and engaging UI elements. The project demonstrates front-end design skills and attention to aesthetics.",

    features: [
      "Responsive layout",
      "Premium design aesthetics",
      "Hero section",
      "Car showcase section",
      "Interactive navigation",
      "Smooth scrolling",
    ],

    techStack: ["HTML5", "CSS3", "JavaScript"],

    github: "https://github.com/Ankit4511/McLAREN-Responsive-landing-page",

    live: "#",
    homepage: true,
  },
];

export default projects;
