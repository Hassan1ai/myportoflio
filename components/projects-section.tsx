"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Recycle, Calendar, Sun } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Reacyclonic",
    description:
      "A platform for e-waste collection, tracking, and recycling. Built to promote sustainability through smart reuse and partnerships with recycling companies.",
    image: "/images/Screenshot 2025-05-29 205054.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Secure user authentication",
      "Waste pickup scheduling",
      "Real-time inventory tracking",
      "API integration with recycling companies",
    ],
    github: "https://github.com/Hassan1ai/Recyclonic.git",
    demo: "https://recyclonic-lyart.vercel.app/",
    icon: Recycle,
    featured: true,
  },
  {
    title: "Easy Table Converter",
    description:
      "A versatile table converter supporting 11 formats. Paste or upload data, edit tables, and export in CSV, JSON, HTML, Excel, and more with powerful sort and filter tools.",
    image: "/images/Screenshot 2025-05-29 192809.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "FilePond", "PapaParse"], 
    features:["Supports 11 table formats (CSV, JSON, SQL, HTML, etc.)",
  "Real-time format conversion",
  "Editable table preview",
  "Full-text search and filtering",
  "Row and column reordering",
  "File upload and download support",
  "Copy to clipboard functionality",
  "Undo/Redo operations",
  "Responsive and intuitive UI"],
    github: "https://github.com/Hassan1ai/table-convert.git",
    demo: "https://table-convert.vercel.app/",
    icon: Sun,
    featured: false,
  },
  {
    title: "Task Flow",
    description: "A nature-inspired task management app blending beauty with productivity. Organize tasks, track habits, and plan seasonally.",
    image: "/images/Taskflow.png",
    tech: ["React.js", "TypeScript", "Local Storage", "CSS Modules"],
    features: ["Nature-themed UI", "Habit cultivation", "Seasonal task planning", "Achievement system","Progress insights"],
    github: "https://github.com/Hassan1ai/Todo-list.git",
    demo: "https://taskflow-fawn-chi.vercel.app/",
    icon: Calendar,
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden ${project.featured ? "ring-2 ring-primary" : ""}`}>
                {project.featured && (
                  <div className="bg-primary text-primary-foreground px-4 py-2 text-center font-semibold">
                    🌟 Featured Project
                  </div>
                )}
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"} gap-6 p-6`}>
                  <div className="space-y-4">
                    <CardHeader className="p-0">
                      <CardTitle className="flex items-center space-x-3 text-2xl">
                        <project.icon className="h-8 w-8 text-primary" />
                        <span>{project.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <Button asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
