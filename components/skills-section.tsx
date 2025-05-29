"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Settings, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "bg-blue-500",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "Axios",
      "SWR",
      "Context API",
    ],
  },
  {
    title: "Graphic & UI/UX Design",
    icon: Palette,
    color: "bg-pink-500",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Accessibility (a11y)",
      "UI Systems",
      "Wireframes",
      "Color Theory",
      "Typography",
    ],
  },
  {
    title: "Developer Tools",
    icon: Settings,
    color: "bg-green-500",
    skills: [
      "Git",
      "GitHub",
      "GitFlow",
      "REST APIs",
      "MongoDB",
      "SQL Server",
      "Agile",
      "Azure DevOps",
      "SOLID Principles",
    ],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    color: "bg-purple-500",
    skills: [
      "Data Structures & Algorithms",
      "SignalR",
      "Coding Competitions (ACPC Teens)",
      "Design Patterns",
      "Testing Basics",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
