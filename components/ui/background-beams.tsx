"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const beams: Array<{
      x: number
      y: number
      length: number
      angle: number
      speed: number
      opacity: number
    }> = []

    // Create beams
    for (let i = 0; i < 5; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate(beam.angle)

        const gradient = ctx.createLinearGradient(0, 0, beam.length, 0)
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${beam.opacity})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, -1, beam.length, 2)
        ctx.restore()

        beam.angle += beam.speed * 0.01
        beam.x += Math.cos(beam.angle) * 0.5
        beam.y += Math.sin(beam.angle) * 0.5

        if (beam.x < 0) beam.x = canvas.width
        if (beam.x > canvas.width) beam.x = 0
        if (beam.y < 0) beam.y = canvas.height
        if (beam.y > canvas.height) beam.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: "linear-gradient(180deg, #000000 0%, #111111 100%)" }}
    />
  )
}
