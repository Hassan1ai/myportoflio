"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hassan Mohamed</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Frontend Developer & Graphic Designer</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Crafting sleek web experiences with clean code and creative design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" onClick={() => scrollToSection("#projects")} className="text-lg px-8 py-6">
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="text-lg px-8 py-6"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/hassan" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/hassan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://behance.net/hassan" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.5 11.5c0-1.38-1.12-2.5-2.5-2.5S2.5 10.12 2.5 11.5 3.62 14 5 14s2.5-1.12 2.5-2.5zM5 15.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm9.5-4c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-2.5 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7-9h-4v1h4V6.5z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/201099549075" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hassan.0523042@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary/50 p-2">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Image
                    src="/images/hassan-profile.png"
                    alt="Hassan Mohamed"
                    
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
