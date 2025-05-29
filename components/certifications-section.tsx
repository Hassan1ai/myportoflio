"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Globe, Lightbulb } from "lucide-react"

const achievements = [
  {
    title: "Fanni Mobtaker 2024",
    description: "Finalist in innovation competition",
    year: "2024",
    type: "Competition",
    icon: Trophy,
    color: "bg-yellow-500",
  },
  {
    title: "ISEF 2024",
    description: "Qualified for the International Science and Engineering Fair",
    year: "2024",
    type: "International",
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    title: "UGRF 2024",
    description: "Finalist with recycling project",
    year: "2024",
    type: "Research",
    icon: Award,
    color: "bg-green-500",
  },
  {
    title: "EISTEF 2024",
    description: "Presented an innovative sustainability project",
    year: "2024",
    type: "Innovation",
    icon: Lightbulb,
    color: "bg-purple-500",
  },
]

export function CertificationsSection() {
  return (
    <section id="awards" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Awards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation, technical excellence, and contribution to sustainability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.year}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{achievement.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Impact & Recognition</h3>
              <p className="text-muted-foreground">
                These achievements represent my commitment to innovation and sustainability. Through my projects,
                particularly Reacyclonic, I've contributed to environmental awareness and demonstrated the potential of
                technology to address real-world challenges.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
