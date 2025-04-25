"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedBackground() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; positions: { x: number[]; y: number[] } }>>([])

  // Initialize dimensions and particles on mount
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial update
    updateDimensions()

    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      positions: {
        x: Array.from({ length: 3 }, () => Math.random() * window.innerWidth),
        y: Array.from({ length: 3 }, () => Math.random() * window.innerHeight),
      },
    }))
    setParticles(newParticles)
    setIsLoading(false)

    // Update on resize
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0.4))]" />
      </div>

      {/* Animated Particles */}
      <AnimatePresence>
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute h-2 w-2 rounded-full bg-purple-500/30"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: particle.positions.x,
                y: particle.positions.y,
              }}
              transition={{
                opacity: { duration: 1 },
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                filter: "blur(4px)",
              }}
            />
          ))}
        </div>
      </AnimatePresence>

      {/* Mouse Follow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px bg-gradient-to-r from-purple-500/10 to-blue-500/10"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.15), transparent 40%)`,
        }}
      />
    </div>
  )
} 