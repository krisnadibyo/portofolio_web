import { Code, FolderKanban, Brain, PersonStanding } from "lucide-react"

// Hero Section
export const hero = {
  name: "Krisna Dibyo Atmojo",
  title: "Curious Software Engineer",
  description: "A tech enthusiast with a passion for building products that solve real-world problems.",
}

// Stats Section
export const stats = [
  { id: 1, value: "10+", label: "Years of Experience" },
  { id: 2, value: "3", label: "Tech Roles" },
  { id: 3, value: "5M+", label: "Apps Downloads" },
  { id: 4, value: "3+", label: "Projects Completed" },
]

// Services Section
export const servicesHeader = {
  title: "What I Do",
  description: "I offer a wide range of services to help businesses and individuals create impactful digital experiences. Here's how I can help you succeed."
}

export const services = [
  {
    id: 1,
    title: "Software Development",
    description: "7+ years experience building web and mobile apps that are fast, scale, and easy to maintain.",
    icon: <Code size={24} />
  },
  {
    id: 2,
    title: "Software Management",
    description: "4+ years leading and growing software development teams that scale to millions of users.",
    icon: <PersonStanding size={24} />
  },
  {
    id: 3,
    title: "Project/Program Management",
    description: "3 years managing multiple and complex projects within budget and timeline.",
    icon: <FolderKanban size={24} />
  },
  {
    id: 4,
    title: "AI Solution",
    description: "Creating AI solutions with Machine Learning, Generative LLM, and Deep Learning.",
    icon: <Brain size={24} />
  }
]

// Projects Section
export const projectsHeader = {
  title: "Featured Projects",
  description: "Explore my latest projects. I've worked on a variety of projects, from web development to AI solutions."
}

export const projects = [
  {
    title: "Cover Letter Generator",
    description: "A tool that generates cover letters for job applications using LLM.",
    image: "/cover-letter-generator.png",
    demoLink: "https://coverletter.krisnadibyo.xyz",
    githubLink: "https://github.com/krisnadibyo/cover-letter-generator",
    techStack: [
      { name: "React", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Next.js", color: "blue" },
      { name: "TailwindCSS", color: "blue" },
      { name: "Deepseek", color: "blue" },
    ],
  },
  // {
  //   title: "AI-Powered Chat Expense Tracker",
  //   description: "A chatbot that helps you track your expenses and save money.",
  //   image: "/cover-letter-generator.png",
  //   demoLink: "https://expense-tracker.krisnadibyo.xyz",
  //   githubLink: "https://github.com/krisnadibyo/expense_api",
  //   techStack: [
  //     { name: "Python", color: "blue" },
  //     { name: "FastAPI", color: "blue" },
  //     { name: "PostgreSQL", color: "blue" },
  //     { name: "Docker", color: "blue" },
  //     { name: "Github Actions", color: "blue" },
  //     { name: "Deepseek", color: "blue" },
  //   ],
  // },
  {
    title: "Platform Merdeka Mengajar (Ruang GTK)",
    description: "An Education super app that improves Indonesian teachers' quality",
    image: "/pmm.png",
    demoLink: "https://play.google.com/store/apps/details?id=id.belajar.app&hl=gsw",
    githubLink: "",
    techStack: [
      { name: "Android", color: "blue" },
      { name: "Kotlin", color: "blue" },
      { name: "Jetpack Compose", color: "blue" },
      { name: "PWA", color: "blue" },
      { name: "Gitlab CI", color: "blue" },
      { name: "Firebase", color: "blue" },
    ],
  },
]

// Work Experience Section
export const workExperienceHeader = {
  title: "Work Experience",
  description: "My professional journey has equipped me with valuable experience across different roles and companies."
}
export const experiences = [
  {
    company: "Govtech Edu, Jakarta, Indonesia",
    position: "Software Engineering Manager",
    duration: "2020 - Dec 2024",
    image: "/govtechedu.png",
    description: `Key contributor in leading 15 engineers across 3 different engineering teams.
    Built an education super app from scratch, serving 4 million teachers across Indonesia.
    Led the mobile platform team to deliver key features while maintaining 99.9% stability, achieving recognition as the highest-rated government app with 4.9 stars.
    Led the web platform team in developing tools and UI components, resulting in a 30% increase in frontend productivity.
    Led the QA platform team in building automation tools and establishing performance testing frameworks,ensuring infrastructure readiness for serving a minimum 5,000 requests per second (RPS).`,
    techStack: [
      { name: "Management", color: "blue" },
      { name: "Android", color: "blue" },
      { name: "Full Stack", color: "blue" },
      { name: "GCP", color: "blue" },
      { name: "Next.js", color: "blue" },
      { name: "React", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Kotlin", color: "blue" },
      { name: "Go", color: "blue" },
      { name: "PostgreSQL", color: "blue" },
      { name: "Docker", color: "blue" },
      { name: "Gitlab CI", color: "blue" },
      { name: "K6", color: "blue" },  
    ],
  },
  {
    company: "Bukalapak, Jakarta, Indonesia",
    position: "Technical Program Manager",
    duration: "2018 - 2020",
    image: "/bl_logo.jpeg",
    description: `Managed and maintained the release cycle for Bukalapak's Android and iOS platforms, successfully delivering 30 features per release.
Streamlined the release process through clear guidelines and procedures, reducing the cycle time from 3 weeks to 2 weeks. Managed
and coordinated incident responses with cross-functional teams, achieving a crash-free rate of 99%. Eliminated product team
bottlenecks and enhanced agile practices, resulting in a 30% improvement in roadmap completion.`,
    techStack: [
      { name: "Project Management", color: "blue" },
      { name: "Incident Management", color: "blue" },
      { name: "Release Management", color: "blue" },
      { name: "Agile/Scrum", color: "blue" },
    ],
  },
  {
    company: "Bukalapak, Jakarta, Indonesia",
    position: "Software Engineer",
    image: "/bl_logo.jpeg",
    duration: "2014 - 2018",
    description: `Developed and maintained core features of Bukalapak marketplace for both Android and iOS platforms, serving over 50 million
monthly users. Implemented a real-time chat feature using WebSocket technology that significantly increased the Add-To-Cart rate by
30%. Enhanced credit card payment processing by refactoring and improving code quality, which improved the payment success rate
from 70% to 90%. Developed premium seller features that generated 50% increase in revenue streams.`,
    techStack: [
      { name: "Android", color: "blue" },
      { name: "iOS", color: "blue" },
      { name: "Java", color: "blue" },
      { name: "Kotlin", color: "blue" },
      { name: "Swift", color: "blue" },
      { name: "Objective-C", color: "blue" },
    ],
  },
  {
    company: "GDP Venture, Jakarta, Indonesia",
    position: "Software Engineer",
    image: "/gdp_labs.png",
    duration: "2013",
    description: `Built an Android app from scratch for Infokost.id, a property rental listing platform. Successfully launched the app on Google Play
Store while maintaining the crash-free rate of 99%.`,
    techStack: [
      { name: "Android", color: "blue" },
      { name: "Java", color: "blue" },
    ],
  }
]

// Contact Section
export const contact = {
  title: "Let's Connect",
  description: "Have a project in mind or want to discuss potential opportunities? I'm just a message away.",
  email: "krisnadibyo@gmail.com",
  address: "Jakarta, Indonesia",
  github: "github.com/krisnadibyo",
  linkedin: "linkedin.com/in/krisnadibyo",
}
export const footerText="© 2025 Krisna Dibyo. All rights reserved."