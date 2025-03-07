import { CardWrapper } from "./ui/card-wrapper"
import { Briefcase } from "lucide-react"

interface TechStack {
  name: string
  color: string
}

interface WorkExperienceProps {
  company: string
  position: string
  duration: string
  description: string[]
  techStack: TechStack[]
}

function TechBadge({ name, color }: TechStack) {
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
      {name}
    </span>
  )
}

function ExperienceCard({ company, position, duration, description, techStack }: WorkExperienceProps) {
  return (
    <CardWrapper className="relative border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute -left-3 top-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
        <Briefcase className="text-white h-3 w-3" />
      </div>
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-textDark">{position}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-orange-600 font-medium">{company}</p>
          <span className="text-sm text-gray-600">{duration}</span>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <TechBadge key={index} {...tech} />
          ))}
        </div>
      </div>
    </CardWrapper>
  )
}

export function WorkExperience() {
  const experiences = [
    {
      company: "TechInnovate Solutions",
      position: "Senior Frontend Developer",
      duration: "2021 - Present",
      description: [
        "Led the development of a React-based dashboard that increased user engagement by 40%",
        "Implemented responsive design principles that improved mobile conversion rates by 25%",
        "Mentored junior developers and conducted code reviews to ensure high quality standards",
      ],
      techStack: [
        { name: "React", color: "blue" },
        { name: "TypeScript", color: "blue" },
        { name: "Next.js", color: "gray" },
        { name: "TailwindCSS", color: "cyan" },
      ],
    },
    {
      company: "Digital Creations Agency",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      description: [
        "Developed and maintained client websites using React and Node.js",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Optimized website performance resulting in 30% faster load times",
      ],
      techStack: [
        { name: "Node.js", color: "green" },
        { name: "Express", color: "gray" },
        { name: "MongoDB", color: "green" },
        { name: "React", color: "blue" },
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Junior Developer",
      duration: "2018 - 2019",
      description: [
        "Assisted in building MVPs for early-stage startups",
        "Gained experience with modern JavaScript frameworks and libraries",
        "Participated in agile development processes and sprint planning",
      ],
      techStack: [
        { name: "JavaScript", color: "yellow" },
        { name: "Vue.js", color: "green" },
        { name: "Firebase", color: "orange" },
      ],
    },
  ]

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-textDark">Work Experience</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          My professional journey has equipped me with valuable experience across different roles and projects. Here's a
          glimpse of my career path.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-200 ml-3"></div>
        <div className="space-y-8 ml-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </>
  )
}

