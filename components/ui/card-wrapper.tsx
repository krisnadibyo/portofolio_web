import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
}

export function CardWrapper({ children, className = "" }: CardWrapperProps) {
  return <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>{children}</div>
}

