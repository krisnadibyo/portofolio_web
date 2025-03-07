import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { WorkExperience } from "@/components/work-experience"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen text-textDark">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-textDark">
              I am Lukman
              <span className="block text-primary mt-2">Next-Level Web Developer.</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg">
              I help companies solve problems by building accessible and inclusive web products and digital experiences
              that deliver exceptional user value.
            </p>
          </div>

          <Stats />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-services-gradient py-16" id="services">
        <div className="container mx-auto px-4">
          <Services />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-projects-gradient py-16" id="works">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-experience-gradient py-16" id="experience">
        <div className="container mx-auto px-4">
          <WorkExperience />
        </div>
      </section>

      {/* Contact Section - Info Only */}
      <section className="bg-contact-gradient py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-textDark">Let&apos;s Get In Touch</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'm just a message away.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textDark">Phone</h3>
                  <p className="text-gray-700">+91 7074399354</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textDark">Email</h3>
                  <p className="text-gray-700">dev.lukmansk@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-textDark">Address</h3>
                  <p className="text-gray-700">Murshidabad, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-textDark">Lukman</h3>
              <p className="text-gray-700">
                Full Stack Developer based in your location. Available for freelance work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-textDark">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-textDark">Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-textDark">Contact Us</h4>
              <ul className="space-y-2 text-gray-700">
                <li>hello@example.com</li>
                <li>+1234567890</li>
                <li>Your Address Here</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-700">
            <p>© 2024 Lukman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

