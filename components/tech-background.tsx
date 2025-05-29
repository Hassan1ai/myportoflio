"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const TechParticle = ({ delay = 0 }: { delay?: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })
  }, [])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary/20 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [position.x, position.x + (Math.random() - 0.5) * 200],
        y: [position.y, position.y + (Math.random() - 0.5) * 200],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    />
  )
}

const CodeLine = ({ delay = 0, direction = 1 }: { delay?: number; direction?: number }) => {
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
      style={{ width: "200px" }}
      initial={{ x: direction > 0 ? -200 : window.innerWidth + 200, y: Math.random() * window.innerHeight }}
      animate={{
        x: direction > 0 ? window.innerWidth + 200 : -200,
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 3,
        ease: "linear",
      }}
    />
  )
}

const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      className="absolute text-primary/5 text-4xl"
      initial={{
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
        rotate: 0,
      }}
      animate={{
        y: -100,
        rotate: 360,
        x: Math.random() * window.innerWidth,
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  )
}

export function TechBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <TechParticle key={`particle-${i}`} delay={i * 0.2} />
      ))}

      {/* Moving Code Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <CodeLine key={`line-${i}`} delay={i * 1.5} direction={i % 2 === 0 ? 1 : -1} />
      ))}

      {/* Floating Tech Icons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingIcon key={`icon-${i}`} delay={i * 2}>
          {["⚛️", "🚀", "💻", "🎨", "⚡", "🔧", "📱", "🌐"][i]}
        </FloatingIcon>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
