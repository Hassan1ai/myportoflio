"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Cpu, Globe, Smartphone } from "lucide-react"

const FloatingIcon = ({
  icon: Icon,
  delay = 0,
  duration = 20,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = 100,
}: {
  icon: any
  delay?: number
  duration?: number
  startX?: number
  startY?: number
  endX?: number
  endY?: number
}) => {
  return (
    <motion.div
      className="absolute text-primary/10 z-0"
      initial={{
        x: `${startX}vw`,
        y: `${startY}vh`,
        rotate: 0,
        scale: 0.5,
      }}
      animate={{
        x: `${endX}vw`,
        y: `${endY}vh`,
        rotate: 360,
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Icon size={40} />
    </motion.div>
  )
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingIcon icon={Code} delay={0} startX={-10} startY={20} endX={110} endY={80} duration={25} />
      <FloatingIcon icon={Palette} delay={5} startX={110} startY={10} endX={-10} endY={90} duration={30} />
      <FloatingIcon icon={Zap} delay={10} startX={-10} startY={60} endX={110} endY={20} duration={22} />
      <FloatingIcon icon={Cpu} delay={15} startX={110} startY={70} endX={-10} endY={30} duration={28} />
      <FloatingIcon icon={Globe} delay={20} startX={-10} startY={40} endX={110} endY={60} duration={26} />
      <FloatingIcon icon={Smartphone} delay={25} startX={110} startY={50} endX={-10} endY={10} duration={24} />
    </div>
  )
}
