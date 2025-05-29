"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Settings, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "bg-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    title: "Graphic & UI/UX Design",
    icon: Palette,
    color: "bg-pink-500",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "Adobe Premiere Pro", level: 80 },
      { name: "UI Systems", level: 88 },
      { name: "Wireframes", level: 85 },
      { name: "Color Theory", level: 90 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Settings,
    color: "bg-green-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "REST APIs", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "Azure DevOps", level: 75 },
    ],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    color: "bg-purple-500",
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 82 },
      { name: "SignalR", level: 78 },
      { name: "Design Patterns", level: 80 },
      { name: "Testing", level: 75 },
      { name: "Debugging", level: 90 },
    ],
  },
]

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export function EnhancedSkillsSection() {
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
            A comprehensive overview of my technical skills and creative abilities with proficiency levels
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <motion.div
                      className={`p-3 rounded-lg ${category.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="group-hover:text-primary transition-colors">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} delay={skillIndex * 0.1} />
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
