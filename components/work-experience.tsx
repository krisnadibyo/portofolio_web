import { CardWrapper } from "./ui/card-wrapper";
import Image from "next/image";
// import { Briefcase } from "lucide-react"

interface TechStack {
  name: string;
  color: string;
}

interface WorkExperienceProps {
  company: string;
  position: string;
  duration: string;
  techStack: TechStack[];
  description: string;
  image: string;
}
interface WorkExperienceHeader {
  title: string;
  description: string;
}

function TechBadge({ name }: TechStack) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}
    >
      {name}
    </span>
  );
}

function ExperienceCard({
  company,
  position,
  duration,
  description,
  techStack,
  image,
}: WorkExperienceProps) {
  return (
    <CardWrapper className="relative border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute -left-3 top-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
        <Image src={image} alt="window" width={16} height={16} />
      </div>
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-textDark">{position}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-orange-800 font-semibold">{company}</p>
          <span className="text-sm text-gray-600">{duration}</span>
        </div>
        <div className="text-gray-700 mb-4 mt-4">{description}</div>

        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <TechBadge key={index} {...tech} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export function WorkExperience({
  workExperienceHeader,
  experiences,
}: {
  workExperienceHeader: WorkExperienceHeader;
  experiences: WorkExperienceProps[];
}) {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-textDark">
          {workExperienceHeader.title}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {workExperienceHeader.description}
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
  );
}
