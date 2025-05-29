"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Code, Palette } from "lucide-react"
import { VideoShowcase } from "@/components/video-showcase"
import { AnimatedCounter } from "@/components/animated-counter"

const timeline = [
  {
    year: "2022",
    title: "Started Design Journey",
    description: "Began learning design with Photoshop and Figma",
    icon: Palette,
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Learned React & TypeScript",
    icon: Code,
  },
  {
    year: "2024",
    title: "Built Recyclonic",
    description: "Developed a full-stack web platform for e-waste management",
    icon: Code,
  },
  {
    year: "2024",
    title: "Competition Success",
    description: "Qualified for ISEF, Fanni Mobtaker, and UGRF",
    icon: GraduationCap,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Frontend Developer and Graphic Designer with 2 years of experience. I specialize in
            React.js, Next.js, and TypeScript. I love blending code and creativity to build modern, responsive, and
            user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Al-Sewedy International School for Applied Technology</h4>
                    <p className="text-muted-foreground">Software Development Specialization</p>
                    <p className="text-sm text-muted-foreground">2023 – 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">What Drives Me</h3>
                <p className="text-muted-foreground">
                  I believe in the power of technology to solve real-world problems. My passion lies in creating digital
                  solutions that are not only functional but also beautiful and accessible to everyone. Whether it's
                  developing a complex web application or designing an intuitive user interface, I strive for excellence
                  in every project.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Behind the Scenes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <VideoShowcase
              title="Coding Process"
              description="Watch how I approach problem-solving and build applications from scratch"
              videoSrc="/videos/coding-demo.mp4"
              poster="/images/recyclonic-dashboard.jpg"
            />
            <VideoShowcase
              title="Design Workflow"
              description="My creative process from concept to final design implementation"
              videoSrc="/videos/design-process.mp4"
              poster="/images/ui-design-1.jpg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <AnimatedCounter end={2} suffix="+" />
                  <p className="text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div>
                  <AnimatedCounter end={15} suffix="+" />
                  <p className="text-muted-foreground mt-2">Projects Completed</p>
                </div>
                <div>
                  <AnimatedCounter end={4} />
                  <p className="text-muted-foreground mt-2">Major Awards</p>
                </div>
                <div>
                  <AnimatedCounter end={500} suffix="+" />
                  <p className="text-muted-foreground mt-2">People Impacted</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
