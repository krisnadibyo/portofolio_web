import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

interface TechStack {
  name: string
  color: string
}

interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  techStack: TechStack[]
}

function TechBadge({ name, color }: TechStack) {
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
      {name}
    </span>
  )
}

function ProjectCard({ title, description, image, demoLink, githubLink, techStack }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2 text-textDark">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <TechBadge key={index} {...tech} />
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90 transition-all duration-300"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90 transition-all duration-300"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const projects = [
    {
      title: "NFT Marketplace Dashboard",
      description: "A modern dashboard for NFT trading with real-time updates and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
      techStack: [
        { name: "React", color: "blue" },
        { name: "TypeScript", color: "blue" },
        { name: "Ethers.js", color: "purple" },
        { name: "TailwindCSS", color: "cyan" },
      ],
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with cart, checkout, and payment integration.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
      techStack: [
        { name: "Next.js", color: "gray" },
        { name: "Prisma", color: "blue" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Stripe", color: "purple" },
      ],
    },
    {
      title: "Social Media App",
      description: "Real-time social media platform with messaging and post sharing features.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
      techStack: [
        { name: "React", color: "blue" },
        { name: "Socket.io", color: "gray" },
        { name: "Node.js", color: "green" },
        { name: "MongoDB", color: "green" },
      ],
    },
  ]

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-textDark">Featured Projects</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore my latest web development projects. Each project demonstrates my commitment to creating innovative and
          user-friendly digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  )
}

