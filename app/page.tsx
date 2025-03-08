import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { WorkExperience } from "@/components/work-experience";
import { Navbar } from "@/components/navbar";
import {
  contact,
  experiences,
  footerText,
  hero,
  projects,
  projectsHeader,
  services,
  servicesHeader,
  stats,
  workExperienceHeader,
} from "@/app/data/constant";

import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-textDark">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-4" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-textDark">
              {hero.name}
              <span className="block text-primary mt-2">{hero.title}</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg">{hero.description}</p>
          </div>
          <Stats stats={stats} />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-services-gradient py-16" id="services">
        <div className="container mx-auto px-4">
          <Services servicesHeader={servicesHeader} services={services} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-projects-gradient py-16" id="projects">
        <div className="container mx-auto px-4">
          <Projects projectsHeader={projectsHeader} projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-experience-gradient py-16" id="experiences">
        <div className="container mx-auto px-4">
          <WorkExperience
            workExperienceHeader={workExperienceHeader}
            experiences={experiences}
          />
        </div>
      </section>

      {/* Contact Section - Info Only */}
      <section className="bg-contact-gradient" id="contact">
        <div className="container mx-auto px-4">
          <Contact contact={contact} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <Footer footerText={footerText} />
        </div>
      </footer>
    </main>
  );
}
