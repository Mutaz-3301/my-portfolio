"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HoverEffectProps {
  items: Array<{
    title: string
    description: React.ReactNode
    link: string
  }>
  className?: string
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={cn(
              "absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-sm transition duration-300",
              hoveredIndex === idx ? "opacity-100" : "opacity-0",
            )}
          />
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-gray-900 border border-gray-800 relative z-20 group-hover:border-gray-600 transition-colors">
            <div className="relative z-50">
              <h4 className="text-white font-bold tracking-wide text-lg mb-4">{item.title}</h4>
              <div className="text-gray-400 tracking-wide leading-relaxed text-sm">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
