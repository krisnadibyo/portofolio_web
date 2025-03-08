import { Mail, LinkedinIcon, Github } from "lucide-react";

interface ContactProps {
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
}

export function Contact({ contact }: { contact: ContactProps }) {
  return (
    <>
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-textDark">
          {contact.title}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {contact.description}
        </p>
      </div>
      <div className="max-w-lg mx-4">
        <div className="space-y-3 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-textDark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <LinkedinIcon className="text-primary" size={24} />
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/krisnadibyo"
                className="font-semibold text-textDark underline hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.linkedin}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Github className="text-primary" size={24} />
            </div>
            <div>
              <a
                href="https://github.com/krisnadibyo"
                className="font-semibold text-textDark underline hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}