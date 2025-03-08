import { Code, FolderKanban, PersonStanding } from "lucide-react"

// Hero Section
export const hero = {
  name: "I am Krisna Dibyo",
  title: "Curious Software Engineer",
  description: "A tech enthusiast with a passion for building products that solve real-world problems.",
}

// Stats Section
export const stats = [
  { id: 1, value: "10+", label: "Years of Experience" },
  { id: 2, value: "3", label: "Tech Roles" },
  { id: 3, value: "50M+", label: "Apps Downloads" },
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
  }
]