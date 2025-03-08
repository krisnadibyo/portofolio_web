import type React from "react"
import { CardWrapper } from "./ui/card-wrapper"

interface ServiceProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

interface ServicesHeaderProps {
  title: string
  description: string
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-textDark">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </CardWrapper>
  )
}

export function Services({ servicesHeader, services }: { servicesHeader: ServicesHeaderProps, services: ServiceProps[] }) {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-textDark">{servicesHeader.title}</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {servicesHeader.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            id={service.id}
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  )
}

