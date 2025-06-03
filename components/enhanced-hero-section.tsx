"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle, Download, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { TypewriterText } from "./typewriter-text"
import { ParticleField } from "./particle-field"

export function EnhancedHeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticleField />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                👋 Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              Hassan Mohamed
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-6">
              <TypewriterText
                texts={["Frontend Developer", "Graphic Designer", "UI/UX Enthusiast", "Problem Solver"]}
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 max-w-2xl">
              Crafting sleek web experiences with clean code and creative design.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => scrollToSection("#projects")} className="text-lg px-8 py-6 group">
                  View Projects
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="text-lg px-8 py-6"
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://drive.google.com/file/d/1HY7BpFvnDOEWVwLlgUwNcwyUBsCnpBjG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div> {/* ← هذا هو القوس المفقود اللي كان سبب الخطأ */}

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: "https://github.com/hassanmohamed23", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/hassan", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://wa.me/201099549075", label: "WhatsApp" },
                { icon: Mail, href: "mailto:hassan.0523042@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="ghost" size="icon" asChild className="relative group">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-6 w-6" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary/50 p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Image
                      src="/images/hassan-profile.png"
                      alt="Hassan Mohamed"
                      width={300}
                      height={300}
                      className="rounded-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("#about")} className="rounded-full">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
